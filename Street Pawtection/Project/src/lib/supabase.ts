import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database tables
export interface AnimalReport {
  id: string;
  animal_type: string;
  description: string;
  location: string;
  contact_name: string;
  contact_phone: string;
  contact_email?: string;
  status: string;
  created_at: string;
}

export interface VolunteerApplication {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  availability: string;
  experience?: string;
  selected_roles: string[];
  status: string;
  created_at: string;
}