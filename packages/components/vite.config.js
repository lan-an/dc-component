/*
 * @Date: 2023-10-17 14:04:27
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-17 18:08:30
 * @FilePath: \dcqc-component\packages\components\vite.config.js
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
 
 
export default defineConfig({
  build: {
    target: "modules",
    //打包文件目录
    outDir: "es",
    //压缩
    minify: false,
    //css分离
    //cssCodeSplit: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue"],
      input: ["src/index.js"],
      output: [
        {
          format: "es",
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: "es",
          preserveModulesRoot: "src",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: "lib",
          preserveModulesRoot: "src",
        },
      ],
    },
    lib: {
      entry: "./src/index.js",
      formats: ["es", "cjs"],
    },
  },
  plugins: [vue(),VueSetupExtend()],
});
