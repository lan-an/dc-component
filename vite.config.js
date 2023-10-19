/*
 * @Date: 2023-10-17 11:29:11
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-18 16:55:54
 * @FilePath: \dc-component\vite.config.js
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
export default defineConfig({
  base: "/dc-component",
  plugins: [vue()],
});
