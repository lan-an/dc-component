/*
 * @Date: 2023-10-17 14:04:27
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-20 12:41:37
 * @FilePath: \dc-component\packages\components\vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig({
  build: {
    target: 'modules',
    outDir: 'es',
    minify: false,
    rollupOptions: {
      external: ['vue'],
      input: ['src/index.js'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: 'es',
          preserveModulesRoot: 'src'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: 'lib',
          preserveModulesRoot: 'src'
        }
      ]
    },
    lib: {
      entry: './src/index.js',
      formats: ['es', 'cjs']
    }
  },
  plugins: [vue(), VueSetupExtend()]
})
