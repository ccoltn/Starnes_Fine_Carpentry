import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://hhmqryowmmxutisgpnlm.supabase.co/rest/v1/";
const supabaseAnonKey = "sb_publishable_mv4lawfanuWH6szwl-4ZZQ_HeR3DwEt";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
