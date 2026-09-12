import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// `base` musí zodpovedať názvu GitHub repozitára, aby fungoval GitHub Pages.
// Pri lokálnom `npm run dev` sa použije '/'.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/maturita-literatura/' : '/',
  plugins: [react(), tailwindcss()],
}))
