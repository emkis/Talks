declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly SUPABASE_KEY: string
      readonly SUPABASE_URL: string
    }
  }
}

// For this overwrite to work, it's required to export from this module
// otherwise the type inference doesn't work!
// Read more about it here: https://typescript.tv/errors/#TS2669
export {}
