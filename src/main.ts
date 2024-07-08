/*
 * @Date: 2023-10-17 11:30:47
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2024-07-08 10:54:25
 * @FilePath: \dc-component\src\main.ts
 */
import { createApp } from 'vue';
import App from './app.vue';
import router from './router/index';
import * as dc from 'dc-pro-component';

import 'dc-pro-component/lib/style.css';

const app = createApp(App);

app.use(dc).use(router).mount('#app');
