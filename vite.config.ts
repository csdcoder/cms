import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),    
    VueSetupExtend(),
    ElementPlus()
  ],
  resolve: {
    alias: {
      "@": "/src"
    }
  }
})