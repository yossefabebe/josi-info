import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // ✅ IMPORTANT for Netlify or GitHub Pages
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['@emailjs/browser'],
  },
})
