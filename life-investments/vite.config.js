import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // or '0.0.0.0' if you want external access
    port: 5173,        // you can change this to another port if needed
    open: true         // automatically opens your browser when running `npm run dev`
  },
})
