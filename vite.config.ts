import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ Good for Netlify or subfolder deployment
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['@emailjs/browser'],
  },
})
