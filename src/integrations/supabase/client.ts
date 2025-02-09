
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://esshcepnzherlsseqxzt.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzc2hjZXBuemhlcmxzc2VxeHp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2NTI2MjYsImV4cCI6MjA1MDIyODYyNn0.sEgmWkA5t6ne1o0fSQtJ3k-V_mVUxaXrshgiaks7dvg";

export const supabase = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      persistSession: true,
    },
  }
);
