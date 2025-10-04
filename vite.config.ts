import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',   // Netlify her şeyi kökten yayınlar
  plugins: [react()],
})
