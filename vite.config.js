import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mosaic/',
  define: {
    'process.env': process.env
  },
  plugins: [vue()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  }
})
