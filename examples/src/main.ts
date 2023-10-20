/*
 * @Date: 2023-10-17 11:30:47
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-17 11:34:40
 * @FilePath: \dcqc-component\examples\main.js
 */
import { createApp } from 'vue'
import App from './app.vue'
import * as dc from 'dc-pro-component'

const app = createApp(App)
app.use(dc).mount('#app')
