-- Ryland Environmental Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Offices table
CREATE TABLE IF NOT EXISTS offices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(50) DEFAULT 'GA',
  address TEXT,
  phone VARCHAR(20),
  hours VARCHAR(255) DEFAULT 'Mon-Fri 8am-5pm',
  towns_served TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Services table
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  icon VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Office-Service junction table
CREATE TABLE IF NOT EXISTS office_services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  office_id UUID REFERENCES offices(id) ON DELETE CASCADE,
  service_id UUID REFERENCES services(id) ON DELETE CASCADE,
  UNIQUE(office_id, service_id)
);

-- FAQs table
CREATE TABLE IF NOT EXISTS faqs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category VARCHAR(100) DEFAULT 'General',
  is_universal BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Office-FAQ junction table (for location-specific FAQs)
CREATE TABLE IF NOT EXISTS office_faqs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  office_id UUID REFERENCES offices(id) ON DELETE CASCADE,
  faq_id UUID REFERENCES faqs(id) ON DELETE CASCADE,
  UNIQUE(office_id, faq_id)
);

-- Form submissions table
CREATE TABLE IF NOT EXISTS form_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  form_type VARCHAR(100) NOT NULL,
  office_slug VARCHAR(100),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  organization VARCHAR(255),
  service_type VARCHAR(100),
  message TEXT,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_offices_slug ON offices(slug);
CREATE INDEX IF NOT EXISTS idx_faqs_slug ON faqs(slug);
CREATE INDEX IF NOT EXISTS idx_faqs_category ON faqs(category);
CREATE INDEX IF NOT EXISTS idx_faqs_universal ON faqs(is_universal);
CREATE INDEX IF NOT EXISTS idx_form_submissions_created ON form_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_form_submissions_status ON form_submissions(status);

-- Enable Row Level Security
ALTER TABLE offices ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE office_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE office_faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Public read access policies for content tables
CREATE POLICY "Public read access for offices" ON offices FOR SELECT USING (true);
CREATE POLICY "Public read access for services" ON services FOR SELECT USING (true);
CREATE POLICY "Public read access for office_services" ON office_services FOR SELECT USING (true);
CREATE POLICY "Public read access for faqs" ON faqs FOR SELECT USING (true);
CREATE POLICY "Public read access for office_faqs" ON office_faqs FOR SELECT USING (true);

-- Form submissions: public insert, admin read
CREATE POLICY "Public insert for form_submissions" ON form_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Service role full access to form_submissions" ON form_submissions FOR ALL USING (auth.role() = 'service_role');
