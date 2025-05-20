import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/gsl-dust-tool/',
  server: {
    headers: {
      'Cache-Control': 'no-store',
    },
    watch: {
      usePolling: true,
    },
  },
})
