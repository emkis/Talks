import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shared': resolve(__dirname, '/src/shared'),
      '@entries': resolve(__dirname, '/src/entries'),
      '@pages': resolve(__dirname, '/src/pages'),
    },
  },
})
