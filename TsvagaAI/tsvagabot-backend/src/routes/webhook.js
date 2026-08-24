const express = require('express');

const { parseSearchQuery } = require('../services/aiParser');
const { searchProducts } = require('../services/database');
const { sendWhatsAppMessage, formatSearchResults } = require('../services/whatsapp');

const router = express.Router();

router.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token) {
    if (mode === 'subscribe' && token === process.env.WEBHOOK_VERIFY_TOKEN) {
      console.log('WEBHOOK_VERIFIED');
      return res.status(200).send(challenge);
    }

    return res.sendStatus(403);
  }

  return res.status(400).send('Missing webhook verification parameters');
});

router.post('/webhook', async (req, res) => {
  try {
    const body = req.body || {};

    if (!body.object || !Array.isArray(body.entry)) {
      return res.sendStatus(404);
    }

    const entry = body.entry[0];
    const change = entry?.changes?.[0];
    const value = change?.value;
    const message = value?.messages?.[0];

    if (!message || !message.from) {
      return res.sendStatus(200);
    }

    const senderPhone = message.from;
    const text = message.text?.body || '';

    if (!text) {
      return res.sendStatus(200);
    }

    console.log(`Received message from ${senderPhone}: "${text}"`);

    const parsedQuery = await parseSearchQuery(text);
    const listings = await searchProducts(parsedQuery);
    const responseText = formatSearchResults(parsedQuery, listings);

    await sendWhatsAppMessage(senderPhone, responseText);

    return res.sendStatus(200);
  } catch (error) {
    console.error('Webhook pipeline error:', error);
    return res.status(500).json({ error: 'Failed to process message' });
  }
});

module.exports = router;
