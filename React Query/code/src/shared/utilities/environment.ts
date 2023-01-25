export const environment = {
  /** Whether the app is running in development */
  isDevelopment: import.meta.env.DEV,

  /** Whether the app is running in production */
  isProduction: import.meta.env.PROD,

  /** Key for authenticate with Supabase */
  supabaseKey: import.meta.env.VITE_SUPABASE_KEY,
} as const
