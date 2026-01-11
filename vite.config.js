import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use root path for development, /schematic/ for production (GitHub Pages)
  base: process.env.NODE_ENV === 'production' ? '/schematic/' : '/',
})
