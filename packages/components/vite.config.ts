/*
 * @Date: 2023-10-17 14:04:27
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-20 15:34:50
 * @FilePath: \dc-component\packages\components\vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

import dts from 'vite-plugin-dts'
export default defineConfig({
  build: {
    target: 'modules',
    outDir: 'es',
    minify: false,
    rollupOptions: {
      external: ['vue'],
      input: ['src/index.ts'],
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
      entry: './src/index.ts',
      formats: ['es', 'cjs']
    }
  },
  plugins: [
    vue(),
    dts({
      entryRoot: './src',
      outputDir: ['./es/src', './lib/src'],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: './tsconfig.json'
    }),
    VueSetupExtend()
  ]
})
