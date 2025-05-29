/// <reference types="vite/client" />

import process from 'node:process'
import { fileURLToPath, URL } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import svgLoader from 'vite-svg-loader'
import { dirs as componentDirs, resolvers } from './src/components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
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
    process.env?.VITE_VUE_DEV_TOOLS?.match(/^(1|true)/i) && vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
