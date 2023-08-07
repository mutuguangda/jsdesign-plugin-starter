import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import jsdesign from './src/plugins'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    viteSingleFile(),
    jsdesign(),
  ],
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: {
        app: './ui.html',
      },
    },
  },
  server: (() => {
    return {
      open: '/ui.html',
    }
  })(),
})
