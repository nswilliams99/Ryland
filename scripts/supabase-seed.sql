-- Ryland Environmental Seed Data
-- Run this after the schema is created

-- Insert Services
INSERT INTO services (slug, name, description, icon) VALUES
('residential', 'Residential Waste Removal', 'Weekly curbside trash pickup for homes', 'home'),
('recycling', 'Residential Recycling', 'Recycling collection and drop-off services', 'recycle'),
('commercial', 'Commercial Dumpsters', 'Front-load dumpsters for businesses (4, 6, 8 yard)', 'building'),
('rolloff', 'Industrial Roll-Off Dumpsters', 'Roll-off containers for construction and industrial (10-40 yard)', 'truck'),
('portable-toilets', 'Portable Toilet Rentals', 'Portable restrooms for events and job sites', 'restroom'),
('transfer-station', 'Transfer & Recycling Station', 'Drop-off facility for waste and recyclables', 'warehouse')
ON CONFLICT (slug) DO NOTHING;

-- Insert Offices
INSERT INTO offices (slug, name, city, state, address, phone, hours, towns_served) VALUES
('augusta', 'Augusta Office', 'Augusta', 'GA', '123 Waste Management Dr, Augusta, GA 30901', '(706) 555-0100', 'Mon-Fri 8am-5pm', ARRAY['Augusta', 'Evans', 'Martinez', 'Grovetown', 'Waynesboro']),
('baxley', 'Baxley Office', 'Baxley', 'GA', '456 Recycling Rd, Baxley, GA 31513', '(912) 555-0200', 'Mon-Fri 8am-5pm', ARRAY['Baxley', 'Jesup', 'Vidalia']),
('dublin', 'Dublin Office', 'Dublin', 'GA', '789 Environmental Way, Dublin, GA 31021', '(478) 555-0300', 'Mon-Fri 8am-5pm', ARRAY['Dublin', 'Eastman']),
('houston-county', 'Houston County Office', 'Warner Robins', 'GA', '321 Service Blvd, Warner Robins, GA 31088', '(478) 555-0400', 'Mon-Fri 8am-5pm', ARRAY['Warner Robins', 'Perry', 'Centerville']),
('milledgeville', 'Milledgeville Office', 'Milledgeville', 'GA', '654 Green St, Milledgeville, GA 31061', '(478) 555-0500', 'Mon-Fri 8am-5pm', ARRAY['Milledgeville', 'Sandersville']),
('macon', 'Macon Office', 'Macon', 'GA', '987 Bibb Ave, Macon, GA 31201', '(478) 555-0600', 'Mon-Fri 8am-5pm', ARRAY['Macon', 'Forsyth']),
('savannah', 'Savannah Office', 'Savannah', 'GA', '159 Coastal Hwy, Savannah, GA 31401', '(912) 555-0700', 'Mon-Fri 8am-5pm', ARRAY['Pooler', 'Rincon', 'Richmond Hill', 'Statesboro', 'Garden City']),
('tifton', 'Tifton Office', 'Tifton', 'GA', '2508 Carpenter Road South, Tifton, GA 31793', '(229) 382-4411', 'Mon-Fri 8am-5pm', ARRAY['Tifton', 'Tift County']),
('sandersville', 'Sandersville Transfer Station', 'Sandersville', 'GA', '123 Transfer Rd, Sandersville, GA 31082', '(478) 555-0800', 'Mon-Fri 7am-4pm, Sat 8am-12pm', ARRAY['Washington County', 'Sandersville']),
('waycross', 'Waycross Office', 'Waycross', 'GA', '753 Okefenokee Dr, Waycross, GA 31501', '(912) 555-0900', 'Mon-Fri 8am-5pm', ARRAY['Waycross'])
ON CONFLICT (slug) DO NOTHING;

-- Link services to offices
-- Augusta (all 4 main services)
INSERT INTO office_services (office_id, service_id)
SELECT o.id, s.id FROM offices o, services s 
WHERE o.slug = 'augusta' AND s.slug IN ('residential', 'recycling', 'commercial', 'rolloff')
ON CONFLICT DO NOTHING;

-- Baxley (all 4 main services)
INSERT INTO office_services (office_id, service_id)
SELECT o.id, s.id FROM offices o, services s 
WHERE o.slug = 'baxley' AND s.slug IN ('residential', 'recycling', 'commercial', 'rolloff')
ON CONFLICT DO NOTHING;

-- Dublin (all 4 main services)
INSERT INTO office_services (office_id, service_id)
SELECT o.id, s.id FROM offices o, services s 
WHERE o.slug = 'dublin' AND s.slug IN ('residential', 'recycling', 'commercial', 'rolloff')
ON CONFLICT DO NOTHING;

-- Houston County (all 4 main services)
INSERT INTO office_services (office_id, service_id)
SELECT o.id, s.id FROM offices o, services s 
WHERE o.slug = 'houston-county' AND s.slug IN ('residential', 'recycling', 'commercial', 'rolloff')
ON CONFLICT DO NOTHING;

-- Milledgeville (all 4 main services)
INSERT INTO office_services (office_id, service_id)
SELECT o.id, s.id FROM offices o, services s 
WHERE o.slug = 'milledgeville' AND s.slug IN ('residential', 'recycling', 'commercial', 'rolloff')
ON CONFLICT DO NOTHING;

-- Macon (all 4 main services)
INSERT INTO office_services (office_id, service_id)
SELECT o.id, s.id FROM offices o, services s 
WHERE o.slug = 'macon' AND s.slug IN ('residential', 'recycling', 'commercial', 'rolloff')
ON CONFLICT DO NOTHING;

-- Savannah (commercial, rolloff, portable toilets, transfer station)
INSERT INTO office_services (office_id, service_id)
SELECT o.id, s.id FROM offices o, services s 
WHERE o.slug = 'savannah' AND s.slug IN ('commercial', 'rolloff', 'portable-toilets', 'transfer-station')
ON CONFLICT DO NOTHING;

-- Tifton (all 4 main services)
INSERT INTO office_services (office_id, service_id)
SELECT o.id, s.id FROM offices o, services s 
WHERE o.slug = 'tifton' AND s.slug IN ('residential', 'recycling', 'commercial', 'rolloff')
ON CONFLICT DO NOTHING;

-- Sandersville (transfer station only)
INSERT INTO office_services (office_id, service_id)
SELECT o.id, s.id FROM offices o, services s 
WHERE o.slug = 'sandersville' AND s.slug IN ('transfer-station')
ON CONFLICT DO NOTHING;

-- Waycross (all 4 main services)
INSERT INTO office_services (office_id, service_id)
SELECT o.id, s.id FROM offices o, services s 
WHERE o.slug = 'waycross' AND s.slug IN ('residential', 'recycling', 'commercial', 'rolloff')
ON CONFLICT DO NOTHING;

-- Insert Universal FAQs (apply to all offices)
INSERT INTO faqs (slug, question, answer, category, is_universal) VALUES
-- Residential FAQs
('what-time-does-trash-truck-come', 'What time does the trash truck come?', 'Trash trucks may arrive any time during the day on your scheduled pickup day. We recommend having your cart at the curb by 6:00 AM to ensure pickup. Routes can vary based on traffic, weather, and service volume.', 'Residential', true),
('what-if-trash-wasnt-picked-up', 'What if my trash wasn''t picked up?', 'If your trash was not collected on your scheduled day, first verify it was a regular pickup day (not delayed for a holiday). Then call our office to report the missed pickup. We''ll work to resolve it promptly, usually within 24-48 hours.', 'Residential', true),
('what-can-i-put-in-trash', 'What can I put in my trash cart?', 'You can dispose of regular household garbage, food waste, and non-recyclable materials. Items should fit inside the cart with the lid fully closed. Do not put hazardous materials, electronics, batteries, or liquids in your trash cart.', 'Residential', true),
('what-cant-go-in-trash', 'What can''t go in my trash cart?', 'Do not put hazardous materials (paint, chemicals, motor oil), electronics, batteries, tires, construction debris, or yard waste in your regular trash cart. These items require special disposal. Contact our office for guidance.', 'Residential', true),
('where-to-place-trash-can-for-pickup', 'Where should I place my trash cart for pickup?', 'Place your cart at the curb with wheels against the curb and the lid opening facing the street. Keep the cart 3 feet away from mailboxes, cars, poles, and other obstacles. This allows our automated trucks to safely empty your container.', 'Residential', true),
('how-to-keep-animals-out-of-trash', 'How do I keep animals out of my trash?', 'Make sure your cart lid is fully closed. Bag all garbage, especially food waste. Consider using a bungee cord to secure the lid if animals are persistent. Don''t put your cart out the night before pickup if possible.', 'Residential', true),
('how-to-get-rid-of-trash-can-smell', 'How do I get rid of trash can smell?', 'Rinse your cart periodically with water and dish soap. Sprinkle baking soda in the bottom to absorb odors. Bag all garbage, especially food waste. Keep the lid closed. In summer, set your cart in the sun to help kill odor-causing bacteria.', 'Residential', true),
('how-to-schedule-bulk-pickup', 'How do I schedule a bulk item pickup?', 'Contact your local Ryland Environmental office to schedule a bulk item pickup. Additional fees may apply depending on the item type and size. Please describe the items when calling so we can provide accurate pricing.', 'Residential', true),

-- Holiday FAQs
('holiday-pickup-schedule', 'What is the holiday pickup schedule?', 'Pickup is delayed ONE day after New Year''s Day, Memorial Day, Thanksgiving, and Christmas. We operate on a normal schedule for MLK Jr. Day, Presidents'' Day, Juneteenth, Independence Day, Labor Day, Columbus Day, and Veterans Day.', 'General', true),

-- Commercial FAQs
('what-size-dumpster-for-business', 'What size dumpster does my business need?', 'For small businesses, a 4-yard dumpster is usually sufficient. Medium businesses typically need a 6-yard container. Larger operations may require an 8-yard dumpster. We''ll assess your needs and recommend the right size.', 'Commercial', true),
('how-often-dumpster-emptied', 'How often is my dumpster emptied?', 'Commercial dumpsters can be emptied 1-3 times per week depending on your needs. We''ll work with you to determine the right pickup frequency based on your waste volume and business type.', 'Commercial', true),
('what-cant-go-in-commercial-dumpster', 'What can''t go in a commercial dumpster?', 'Hazardous materials, liquids, tires, batteries, electronics, medical waste, and hot ashes are prohibited. Construction debris should go in a roll-off container instead. Contact us if you''re unsure about specific items.', 'Commercial', true),

-- Roll-Off FAQs
('what-size-dumpster-do-i-need', 'What size roll-off dumpster do I need?', 'For small cleanouts, a 10-20 yard container works well. Home renovations typically need a 20-30 yard dumpster. Major construction projects may require a 40-yard container. We can help you choose the right size for your project.', 'Roll-Off', true),
('how-long-can-i-keep-dumpster', 'How long can I keep a roll-off dumpster?', 'Standard rental periods are typically 7-14 days. Extended rentals are available at daily rates. Let us know your project timeline and we''ll work out the best rental period for your needs.', 'Roll-Off', true),
('dumpster-rental-cost', 'How much does a dumpster rental cost?', 'Pricing depends on dumpster size, rental duration, and material type. Contact our office for a quote. We offer competitive rates and transparent pricing with no hidden fees.', 'Roll-Off', true),
('do-i-need-permit-for-dumpster', 'Do I need a permit for a dumpster?', 'If the dumpster is placed on your private property, typically no permit is needed. If it''s placed on a public street or right-of-way, you may need a permit from your city. We can guide you through the process.', 'Roll-Off', true),
('what-cant-go-in-rolloff-dumpster', 'What can''t go in a roll-off dumpster?', 'Hazardous materials, paint, chemicals, tires, batteries, appliances with refrigerant (fridges, AC units), and electronics are prohibited. Mixing concrete with other materials may result in additional fees.', 'Roll-Off', true),

-- Portable Toilet FAQs
('how-many-porta-potties-for-event', 'How many portable toilets do I need for my event?', 'A general rule is 1 unit per 50 guests for a 4-hour event. For all-day events or those with alcohol service, plan for 1 unit per 35 guests. We''ll help you determine the right number for your specific event.', 'Portable Toilets', true),
('how-often-porta-potties-cleaned', 'How often are portable toilets cleaned?', 'Standard service includes weekly cleaning and restocking. For events or high-traffic locations, we offer daily or more frequent service. Each cleaning includes pumping, sanitizing, restocking supplies, and deodorizing.', 'Portable Toilets', true),

-- Billing FAQs
('how-to-pay-bill-online', 'How do I pay my bill online?', 'Visit our Pay My Bill page and click the link to access the AMCS payment portal. You can pay with credit card, debit card, or bank transfer. You''ll need your account number from your billing statement.', 'Billing', true)
ON CONFLICT (slug) DO NOTHING;

-- Link universal FAQs to all offices
INSERT INTO office_faqs (office_id, faq_id)
SELECT o.id, f.id 
FROM offices o, faqs f 
WHERE f.is_universal = true
ON CONFLICT DO NOTHING;
