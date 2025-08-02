import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
 base: './', // ✅ For Netlify (or custom domain)
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
