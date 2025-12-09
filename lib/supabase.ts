import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

let _supabase: SupabaseClient | null = null;
let _supabaseAdmin: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }
  if (!_supabase) {
    _supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
  return _supabase;
}

export function getSupabaseAdmin(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseServiceKey) {
    return null;
  }
  if (!_supabaseAdmin) {
    _supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
  }
  return _supabaseAdmin;
}

export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;
export const supabaseAdmin = supabaseUrl && supabaseServiceKey ? createClient(supabaseUrl, supabaseServiceKey) : null;

export type Office = {
  id: string;
  slug: string;
  name: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  hours: string;
  services: string[];
  towns_served: string[];
  created_at: string;
};

export type FAQ = {
  id: string;
  slug: string;
  question: string;
  answer: string;
  category: string;
  is_universal: boolean;
  created_at: string;
};

export type OfficeFAQ = {
  id: string;
  office_id: string;
  faq_id: string;
};

export type FormSubmission = {
  id: string;
  form_type: string;
  office_slug: string | null;
  name: string;
  email: string;
  phone: string | null;
  organization: string | null;
  service_type: string | null;
  message: string | null;
  created_at: string;
};

export type Service = {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  created_at: string;
};

export type OfficeService = {
  id: string;
  office_id: string;
  service_id: string;
};
