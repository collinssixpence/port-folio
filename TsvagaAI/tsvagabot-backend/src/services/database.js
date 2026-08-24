const { pool } = require('../config/db');

function normalizeParsedInput(parsedQuery) {
  if (!parsedQuery || typeof parsedQuery !== 'object') {
    return {
      product: '',
      quantity: null,
      location: null,
      sort_by: 'price_asc',
      max_price: null,
    };
  }

  return {
    product: String(parsedQuery.product || '').trim(),
    quantity: parsedQuery.quantity || null,
    location: parsedQuery.location || null,
    sort_by: ['price_asc', 'price_desc', 'distance'].includes(parsedQuery.sort_by)
      ? parsedQuery.sort_by
      : 'price_asc',
    max_price:
      parsedQuery.max_price !== undefined && parsedQuery.max_price !== null
        ? Number(parsedQuery.max_price)
        : null,
  };
}

async function searchProducts(parsedQuery) {
  const normalized = normalizeParsedInput(parsedQuery);

  if (!normalized.product) {
    return [];
  }

  const params = [];
  const conditions = [];
  let index = 1;

  conditions.push(`name ILIKE $${index}`);
  params.push(`%${normalized.product}%`);
  index += 1;

  if (normalized.location) {
    conditions.push(`(location_name ILIKE $${index} OR vendor_name ILIKE $${index})`);
    params.push(`%${normalized.location}%`);
    index += 1;
  }

  if (normalized.max_price !== null && Number.isFinite(normalized.max_price)) {
    conditions.push(`price <= $${index}`);
    params.push(Number(normalized.max_price));
    index += 1;
  }

  let query = `
    SELECT
      id,
      name,
      price,
      vendor_name,
      vendor_phone,
      location_name
    FROM products
    WHERE ${conditions.join(' AND ')}
  `;

  if (normalized.sort_by === 'price_desc') {
    query += ' ORDER BY price DESC';
  } else if (normalized.sort_by === 'distance' && normalized.location) {
    query += ` ORDER BY CASE WHEN location_name ILIKE $${index} THEN 0 ELSE 1 END, price ASC`;
    params.push(`%${normalized.location}%`);
  } else {
    query += ' ORDER BY price ASC';
  }

  query += ' LIMIT 5';

  try {
    const result = await pool.query(query, params);
    return result.rows;
  } catch (error) {
    console.error('Database search failed:', error.message);
    return [];
  }
}

module.exports = {
  searchProducts,
  normalizeParsedInput,
};
