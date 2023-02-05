import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shared': resolve(__dirname, '/app/shared'),
      '@entries': resolve(__dirname, '/app/entries'),
      '@pages': resolve(__dirname, '/app/pages'),
      '@layouts': resolve(__dirname, '/app/layouts'),
      '@router': resolve(__dirname, '/app/router'),
    },
  },
})
