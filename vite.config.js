import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    port: 3000,
    strictPort: true,  // Exit if port is already in use
    open: true,        // Auto-open browser on start
    host: true
  }
})
