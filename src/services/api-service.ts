import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

if (!supabaseUrl) {
	throw new Error("Missing Supabase URL");
}
if (!supabaseApiKey) {
	throw new Error("Missing Supabase API key");
}

export const supabase = createClient(supabaseUrl, supabaseApiKey);
