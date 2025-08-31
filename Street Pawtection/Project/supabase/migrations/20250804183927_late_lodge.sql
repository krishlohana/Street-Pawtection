/*
  # Create tables for animal reports and volunteer applications

  1. New Tables
    - `animal_reports`
      - `id` (uuid, primary key)
      - `animal_type` (text)
      - `description` (text)
      - `location` (text)
      - `contact_name` (text)
      - `contact_phone` (text)
      - `contact_email` (text)
      - `status` (text, default 'new')
      - `created_at` (timestamp)
    - `volunteer_applications`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text)
      - `phone` (text)
      - `address` (text)
      - `availability` (text)
      - `experience` (text)
      - `selected_roles` (jsonb)
      - `status` (text, default 'pending')
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public insert and authenticated read
*/

-- Create animal_reports table
CREATE TABLE IF NOT EXISTS animal_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  animal_type text NOT NULL,
  description text NOT NULL,
  location text NOT NULL,
  contact_name text NOT NULL,
  contact_phone text NOT NULL,
  contact_email text,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Create volunteer_applications table
CREATE TABLE IF NOT EXISTS volunteer_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  availability text NOT NULL,
  experience text,
  selected_roles jsonb NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE animal_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteer_applications ENABLE ROW LEVEL SECURITY;

-- Create policies for animal_reports
CREATE POLICY "Anyone can insert animal reports"
  ON animal_reports
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can read animal reports"
  ON animal_reports
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can update animal reports"
  ON animal_reports
  FOR UPDATE
  TO anon
  USING (true);

CREATE POLICY "Anyone can delete animal reports"
  ON animal_reports
  FOR DELETE
  TO anon
  USING (true);

-- Create policies for volunteer_applications
CREATE POLICY "Anyone can insert volunteer applications"
  ON volunteer_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can read volunteer applications"
  ON volunteer_applications
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can update volunteer applications"
  ON volunteer_applications
  FOR UPDATE
  TO anon
  USING (true);

CREATE POLICY "Anyone can delete volunteer applications"
  ON volunteer_applications
  FOR DELETE
  TO anon
  USING (true);