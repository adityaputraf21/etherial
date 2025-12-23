import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nltnsmnlbqnxusxcrwyo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sdG5zbW5sYnFueHVzeGNyd3lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyMTUwOTMsImV4cCI6MjA2OTc5MTA5M30.tGvpaUn-wZNqFiqstU9GiyR-XlfFUAON_c453KdjD-M'; // Ini dari Supabase > Project Settings > API

export const supabase = createClient(supabaseUrl, supabaseKey);
