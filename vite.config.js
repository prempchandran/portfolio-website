import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@data': '/src/data',
      '@hooks': '/src/hooks',
      '@utils': '/src/utils',
      '@styles': '/src/styles',
      '@assets': '/src/assets'
    }
  },
  // Base path for GitHub Pages deployment (change 'portfolio-website' to your repo name)
  base: '/portfolio-website/'
})
