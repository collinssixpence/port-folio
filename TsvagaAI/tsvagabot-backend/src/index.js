require('dotenv').config();

const express = require('express');
const webhookRoutes = require('./routes/webhook');
const { connectDB } = require('./config/db');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/', webhookRoutes);

app.get('/', (req, res) => {
  res.json({
    name: 'TsvagaBot API',
    status: 'running',
    message: 'WhatsApp search bot backend is active.',
  });
});

async function startServer() {
  const dbConnected = await connectDB();

  if (dbConnected) {
    console.log('Database connection ready for product searches.');
  } else {
    console.log('Continuing without a live DB connection. Configure DB env vars to enable product search queries.');
  }

  app.listen(PORT, () => {
    console.log(`TsvagaBot webhook server running on port ${PORT}`);
  });
}

startServer();
