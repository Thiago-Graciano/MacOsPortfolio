import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
