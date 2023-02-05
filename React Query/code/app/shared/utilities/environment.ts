export const environment = {
  /** Whether the app is running in development */
  isDevelopment: import.meta.env.DEV,

  /** Whether the app is running in production */
  isProduction: import.meta.env.PROD,

  /** Internal API for this application */
  internalApiUrl: import.meta.env.VITE_INTERNAL_API_URL,
} as const
