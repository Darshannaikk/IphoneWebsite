import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sentryVitePlugin } from '@sentry/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),sentryVitePlugin({
    org: "darshannaik",
    project: "javascript-react"
  })],
  build: {
    sourcemap: true
  }
})