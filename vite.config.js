import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Keep your existing plugins
  base: "/schematic/", // <--- ADD THIS LINE (Your repo name with slashes)
})
