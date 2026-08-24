-- TsvagaBot product catalog schema
-- Run this in PostgreSQL first: psql -U postgres -d tsvagabot_db -f database/schema.sql

CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10,2) NOT NULL CHECK (price >= 0),
    vendor_name VARCHAR(255) NOT NULL,
    vendor_phone VARCHAR(50) NOT NULL,
    location_name VARCHAR(255) NOT NULL,
    verified BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_products_name
    ON products (name);

CREATE INDEX IF NOT EXISTS idx_products_location
    ON products (location_name);

CREATE INDEX IF NOT EXISTS idx_products_verified
    ON products (verified);

CREATE INDEX IF NOT EXISTS idx_products_price
    ON products (price);
