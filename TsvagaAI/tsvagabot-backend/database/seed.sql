-- Sample Zimbabwean product listings for TsvagaBot testing
-- Run after schema.sql: psql -U postgres -d tsvagabot_db -f database/seed.sql

INSERT INTO products (name, price, vendor_name, vendor_phone, location_name, verified)
VALUES
    ('2L Cooking Oil', 14.50, 'Mbare Bulk Foods', '+263771234567', 'Mbare, Harare', TRUE),
    ('2L Cooking Oil', 15.00, 'Harare Fresh Market', '+263712345678', 'Harare CBD', TRUE),
    ('2L Cooking Oil', 16.25, 'Gweru Essentials', '+263782345679', 'Gweru', TRUE),
    ('2L Cooking Oil', 12.90, 'City Market', '+263773456780', 'Mbare, Harare', TRUE),
    ('2kg Rice', 19.50, 'Zim Grocery Hub', '+263714567891', 'Gweru', TRUE),
    ('2kg Rice', 21.00, 'Cheap Basket', '+263775678912', 'Mbare, Harare', TRUE),
    ('2kg Rice', 23.80, 'Rice and Grain Centre', '+263713456789', 'Bulawayo', TRUE),
    ('2kg Rice', 18.90, 'Mbare Traders', '+263716543210', 'Mbare, Harare', TRUE),
    ('5kg Maize Meal', 26.00, 'Apex Foods', '+263719876543', 'Chitungwiza', TRUE),
    ('5kg Maize Meal', 28.50, 'Zim Pantry', '+263784321098', 'Harare CBD', TRUE),
    ('5kg Maize Meal', 25.75, 'Gweru Traders', '+263783456123', 'Gweru', TRUE),
    ('5kg Sugar', 12.00, 'Sweet Supply', '+263771122233', 'Bulawayo', TRUE),
    ('5kg Sugar', 13.50, 'Mbare Market', '+263774455566', 'Mbare, Harare', TRUE),
    ('5kg Sugar', 11.90, 'Gweru Essentials', '+263781234567', 'Gweru', TRUE),
    ('1kg Salt', 5.50, 'Mbare Goods', '+263785678900', 'Mbare, Harare', TRUE),
    ('1kg Salt', 6.00, 'Harare Fresh Market', '+263712345679', 'Harare CBD', TRUE),
    ('1kg Salt', 5.80, 'Main Street Mart', '+263773456781', 'Bulawayo', TRUE),
    ('4kg Laundry Soap', 18.00, 'Budget Essentials', '+263771234568', 'Gweru', TRUE),
    ('4kg Laundry Soap', 19.40, 'Mbare Traders', '+263774444555', 'Mbare, Harare', TRUE),
    ('4kg Laundry Soap', 20.00, 'Town Supply', '+263789012345', 'Harare CBD', TRUE),
    ('2L Cooking Oil', 17.75, 'Bulawayo Bulk Store', '+263771212121', 'Bulawayo', TRUE)
ON CONFLICT DO NOTHING;
