/// <reference types="vite/client" />

import process from 'node:process'
import { fileURLToPath, URL } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import { dirs as componentDirs, resolvers } from './src/components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: true,
      vueTemplate: true,
      dirs: [
        'src/components/helpers',
      ],
      imports: [
        'vue',
        'vue-router',
      ],
    }),
    Components({
      dts: true,
      resolvers,
      dirs: componentDirs,
    }),
    tailwindcss(),
    process.env?.VITE_VUE_DEV_TOOLS === 'true' && vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
