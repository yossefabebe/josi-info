import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ Correct for Netlify
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['@emailjs/browser'],
  },
  build: {
    rollupOptions: {
      external: ['@emailjs/browser'],
    },
  },
})
