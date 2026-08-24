const axios = require('axios');

function formatCurrency(value) {
  const amount = Number(value);
  if (!Number.isFinite(amount)) {
    return 'Price not listed';
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(amount);
}

function normalizePhoneNumber(phone) {
  if (!phone) return null;

  const raw = String(phone).replace(/[^\d+]/g, '');
  if (!raw) return null;

  if (raw.startsWith('+')) {
    return raw.replace(/\s+/g, '');
  }

  if (raw.startsWith('0')) {
    return `+263${raw.slice(1)}`;
  }

  if (raw.startsWith('263')) {
    return `+${raw}`;
  }

  return `+${raw}`;
}

function formatSearchResults(parsedQuery, listings) {
  const productLabel = parsedQuery.product || 'product';
  const locationLabel = parsedQuery.location ? ` in ${parsedQuery.location}` : '';

  if (!Array.isArray(listings) || listings.length === 0) {
    return `I could not find verified listings for "${productLabel}"${locationLabel} right now. Try a different area or a broader product name.`;
  }

  const lines = [`Here are the best matches for "${productLabel}"${locationLabel}:`];

  listings.slice(0, 5).forEach((item, index) => {
    const price = formatCurrency(item.price);
    const location = item.location_name || 'Location not listed';
    const vendorPhone = normalizePhoneNumber(item.vendor_phone);
    const vendorLink = vendorPhone ? `https://wa.me/${vendorPhone.replace(/\+/g, '')}` : 'Phone not available';

    lines.push(
      `${index + 1}. ${item.name}\n` +
        `Price: ${price}\n` +
        `Location: ${location}\n` +
        `Seller: ${item.vendor_name || 'Verified vendor'}\n` +
        `Chat: ${vendorLink}`
    );
  });

  return lines.join('\n\n');
}

async function sendWhatsAppMessage(to, messageBody) {
  const token = process.env.WHATSAPP_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;

  if (!token || !phoneNumberId) {
    console.warn('WhatsApp env vars are missing. Skipping outbound message.');
    return null;
  }

  const url = `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`;

  const payload = {
    messaging_product: 'whatsapp',
    to,
    type: 'text',
    text: {
      body: messageBody,
    },
  };

  try {
    const response = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Failed to send WhatsApp message:', error.response?.data || error.message);
    return null;
  }
}

module.exports = {
  formatSearchResults,
  sendWhatsAppMessage,
  normalizePhoneNumber,
  formatCurrency,
};
