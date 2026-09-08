import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves from /<repo>/ — set VITE_BASE=/ for a custom domain or local dev.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? '/aushfg/',
})
