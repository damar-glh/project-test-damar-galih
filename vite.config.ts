import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/project-test-damar-galih/',
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.ts', '.js', '.vue', '.json']
  }
  // because deploy to vercel, we need to set off proxy
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://suitmedia-backend.suitdev.com/',
  //       changeOrigin: true,
  //       rewrite: (path) => path,
  //     },
  //   }
  // }
})
