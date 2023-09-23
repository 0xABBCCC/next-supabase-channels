import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SUPABASE_KEY: string = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";

const client = createClient(SUPABASE_URL, SUPABASE_KEY)

export default client;