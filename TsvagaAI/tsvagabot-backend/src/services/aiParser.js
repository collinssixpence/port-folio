const OpenAI = require('openai');

const DEFAULT_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';

function normalizeValue(value) {
  if (value === undefined || value === null) return null;

  if (typeof value === 'string') {
    const trimmed = value.trim();
    return trimmed === '' ? null : trimmed;
  }

  return value;
}

function normalizeParsedResult(data = {}) {
  return {
    product: normalizeValue(data.product) || '',
    quantity: normalizeValue(data.quantity) || null,
    location: normalizeValue(data.location) || null,
    sort_by: ['price_asc', 'price_desc', 'distance'].includes(data.sort_by)
      ? data.sort_by
      : 'price_asc',
    max_price:
      typeof data.max_price === 'number' && Number.isFinite(data.max_price)
        ? data.max_price
        : data.max_price !== undefined && data.max_price !== null && !Number.isNaN(Number(data.max_price))
          ? Number(data.max_price)
          : null,
  };
}

function fallbackParseSearchQuery(text) {
  const raw = String(text || '').trim();
  if (!raw) {
    return normalizeParsedResult({
      product: '',
      quantity: null,
      location: null,
      sort_by: 'price_asc',
      max_price: null,
    });
  }

  const lowerCase = raw.toLowerCase();

  const quantityMatch = raw.match(
    /(\d+(?:\.\d+)?)\s*(kg|g|l|ml|litre|liter|bottles?|boxes?|packs?|bags?|pcs?|items?|cartons?|tin|tins|kilos?)/i
  );

  const locationKeywords = [
    'harare',
    'bulawayo',
    'mutare',
    'gweru',
    'chitungwiza',
    'masvingo',
    'kwekwe',
    'marondera',
    'mbare',
    'gwanda',
    'bindura',
    'rusape',
    'chipinge',
    'beitbridge',
    'zimbabwe',
    'soweto',
  ];

  let location = null;
  for (const word of locationKeywords) {
    const regex = new RegExp(`\\b${word}\\b`, 'i');
    if (regex.test(raw)) {
      location = word;
      break;
    }
  }

  const maxPriceMatch = raw.match(
    /(?:under|below|less than|budget|max(?:imum)?|up to|around|about|approx(?:imately)?)\s*(?:usd|us\$|zwd|\$)?\s*(\d+(?:[.,]\d{3})*(?:\.\d+)?)/i
  );

  let sort_by = 'price_asc';
  if (
    /(cheapest|lowest price|lowest|budget|mutengo wakaderera|mutengo uri pasi|mari shoma|cheap)/i.test(raw) ||
    /(cheaper|affordable|inexpensive)/i.test(raw)
  ) {
    sort_by = 'price_asc';
  } else if (
    /(expensive|highest price|most expensive|premium|mutengo mukuru|mutengo wakakwira|expensive)/i.test(raw)
  ) {
    sort_by = 'price_desc';
  } else if (/(nearest|near me|close by|nearby|around me|pedyo|padyo|pachivanhu|closest)/i.test(raw)) {
    sort_by = 'distance';
  }

  let product = raw
    .replace(quantityMatch ? quantityMatch[0] : '', '')
    .replace(location ? location : '', '')
    .replace(/\b(cheapest|lowest price|lowest|budget|expensive|highest price|near me|nearby|close by|under|below|less than|up to|max|around|about|approx|price|mutengo|cheaper|premium|pedyo|padyo)\b/gi, '')
    .replace(/\s{2,}/g, ' ')
    .trim();

  if (!product) {
    product = raw;
  }

  if (!location && /\bin\s+([a-zA-Z ]+)$/i.test(raw)) {
    const locCandidate = raw.match(/\bin\s+([a-zA-Z ]+)$/i);
    if (locCandidate) {
      location = locCandidate[1].trim();
    }
  }

  const max_price = maxPriceMatch ? Number(maxPriceMatch[1].replace(/,/g, '')) : null;

  return normalizeParsedResult({
    product,
    quantity: quantityMatch ? quantityMatch[0].trim() : null,
    location,
    sort_by,
    max_price,
  });
}

async function parseSearchQuery(searchText) {
  const userInput = String(searchText || '').trim();

  if (!userInput) {
    return normalizeParsedResult({
      product: '',
      quantity: null,
      location: null,
      sort_by: 'price_asc',
      max_price: null,
    });
  }

  if (!process.env.OPENAI_API_KEY) {
    return fallbackParseSearchQuery(userInput);
  }

  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const systemPrompt = `
      You are a shopping search parser for Zimbabwean consumer product searches.
      Extract the product, quantity, location, sort preference, and max price from the user's message.

      Return valid JSON only with the exact keys:
      {
        "product": "string",
        "quantity": "string or null",
        "location": "string or null",
        "sort_by": "price_asc | price_desc | distance",
        "max_price": number or null
      }

      Rules:
      - If the user asks for the cheapest or lowest price, set sort_by to "price_asc".
      - If the user asks for the most expensive or premium listing, set sort_by to "price_desc".
      - If the user asks for nearest or closest item, set sort_by to "distance".
      - Interpret local terms and common Zimbabwean English / Shona / Ndebele phrases where applicable.
      - Keep the product name concise and merchant-friendly.
      - Quantity can be strings like "2kg", "2L", "1 box", "10 packets", or null.
      - If no price cap is mentioned, set max_price to null.
      - If no location is given, set location to null.
      - Use values that are useful for a product search database.
      - Never add markdown, commentary, or extra fields.
    `;

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || DEFAULT_MODEL,
      temperature: 0,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `Parse this product search request: "${userInput}"` },
      ],
    });

    const rawContent = completion.choices[0]?.message?.content;

    if (!rawContent) {
      return fallbackParseSearchQuery(userInput);
    }

    try {
      const parsed = JSON.parse(rawContent);
      return normalizeParsedResult(parsed);
    } catch (parseError) {
      console.warn('OpenAI parsing failed. Falling back to heuristic search parsing.', parseError.message);
      return fallbackParseSearchQuery(userInput);
    }
  } catch (error) {
    console.warn('OpenAI request failed. Using fallback parser instead.', error.message);
    return fallbackParseSearchQuery(userInput);
  }
}

module.exports = {
  parseSearchQuery,
  normalizeParsedResult,
  fallbackParseSearchQuery,
};
