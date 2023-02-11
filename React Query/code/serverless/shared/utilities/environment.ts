export const environment = {
  /** Whether the app is running in development */
  isDevelopment: process.env.NETLIFY_LOCAL === 'true',

  /** Supabase key for authentication */
  supabaseKey: process.env.SUPABASE_KEY,

  /** Supabase database URL */
  supabaseUrl: process.env.SUPABASE_URL,
} as const
