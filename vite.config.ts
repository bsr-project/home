import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import UnoCSS from 'unocss/vite'
import { presetWind } from 'unocss'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import autoImportData from './auto-import'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.docx'],
  plugins: [
    vue(),
    vueJsx(),

    AutoImport({
      imports: autoImportData as any[],
      dts: fileURLToPath(
        new URL('./src/types/auto-import.d.ts', import.meta.url)
      ),
      eslintrc: {
        enabled: true
      },
      resolvers: [ElementPlusResolver()]
    }),

    Components({
      dts: fileURLToPath(
        new URL('./src/types/components.d.ts', import.meta.url)
      ),
      resolvers: [ElementPlusResolver()]
    }),

    UnoCSS({
      presets: [presetWind()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
