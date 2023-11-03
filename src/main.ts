/*
 * @Date: 2023-10-17 11:30:47
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-11-01 11:04:42
 * @FilePath: \dc-component\src\main.ts
 */
import { createApp } from 'vue';
import App from './app.vue';
import router from './router/index';
import * as dc from 'dc-pro-component';
const app = createApp(App);

app.use(dc).use(router).mount('#app');
