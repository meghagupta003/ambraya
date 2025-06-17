// utils/supabase/server.ts
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// Optional: Add your DB types if available
// import { type Database } from '@/types/supabase';

export const createClient = () =>
  createServerComponentClient({
    cookies,
  });
