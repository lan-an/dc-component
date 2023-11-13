/*
 * @Date: 2023-10-17 11:29:11
 * @Auth: 463997479@qq.com
 * @LastEditors: 873768511@qq.com
 * @LastEditTime: 2023-11-13 14:13:34
 * @FilePath: \dc-component\vite.config.ts
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path'

export default defineConfig({
  base: "/dc-component",
  plugins: [vue()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'packages/components/src'),
      '@hooks': path.resolve(__dirname, 'packages/components/hooks'),
      '@constants': path.resolve(__dirname, 'packages/components/constants'),
      '@style': path.resolve(__dirname, 'packages/components/style'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@style/base" as *;'
      }
    }
  },
});

