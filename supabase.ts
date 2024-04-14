import { createClient } from "@supabase/supabase-js";
import { Database } from "./lib/database.types"; 

const supabaseUrl = "https://qgkjakomwapzuhvnrvgr.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? "";

// const serviceRoleKey = process.env.serviceRoleKey ?? "";

// const supabase = createClient(supabaseUrl, supabaseKey);

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
