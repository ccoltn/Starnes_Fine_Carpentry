/*
  # Create quote_requests table

  ## Summary
  Creates a table to store customer quote requests submitted through the website contact form.

  ## New Tables
  - `quote_requests`
    - `id` (uuid, primary key) - unique identifier
    - `name` (text, not null) - customer full name
    - `email` (text, not null) - customer email address
    - `phone` (text) - optional phone number
    - `project_type` (text) - type of carpentry project
    - `description` (text) - project details and description
    - `created_at` (timestamptz) - submission timestamp

  ## Security
  - RLS enabled
  - Authenticated users can read all submissions (for admin use)
  - Anyone (anon + authenticated) can insert new requests (public form)
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  project_type text DEFAULT '',
  description text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a quote request"
  ON quote_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view quote requests"
  ON quote_requests
  FOR SELECT
  TO authenticated
  USING (true);
