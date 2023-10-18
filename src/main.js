/*
 * @Date: 2023-10-17 11:30:47
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-17 18:14:54
 * @FilePath: \dcqc-component\src\main.js
 */
import { createApp } from "vue";
import App from "./app.vue";
import * as dcqc from "dcqc";
const app = createApp(App);
app.use(dcqc).mount("#app");
