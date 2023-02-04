export const environment = {
  /** Supabase key for authentication */
  supabaseKey: process.env.SUPABASE_KEY,

  /** Supabase database URL */
  supabaseUrl: process.env.SUPABASE_URL,
} as const
