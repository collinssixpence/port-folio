require('dotenv').config();

const { Pool } = require('pg');

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 5432),
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'postgres',
  ssl:
    process.env.DB_SSL === 'true'
      ? {
          rejectUnauthorized: false,
        }
      : false,
};

const pool = new Pool(dbConfig);

async function connectDB() {
  try {
    await pool.query('SELECT 1');
    console.log('PostgreSQL connected successfully.');
    return true;
  } catch (error) {
    console.warn(
      'PostgreSQL connection failed. Database queries will be skipped until DB env vars are configured.'
    );
    console.warn(error.message);
    return false;
  }
}

module.exports = {
  pool,
  connectDB,
  dbConfig,
};
