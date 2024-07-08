/*
 * @Date: 2023-10-18 13:01:07
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2024-07-08 10:24:38
 * @FilePath: \dc-component\docs\.vitepress\theme\index.js
 */
import DefaultTheme from 'vitepress/theme';
import * as dc from 'dc-pro-component';
import 'dc-pro-component/lib/style.css';
import * as examples from '../example';
import { createRouter, createWebHistory } from 'vue-router';

//全局注册组件
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(dc);
    examples.default.map((item) => {
      item.forEach((each) => {
        app.component(`${each.__name}`, each);
      });
    });

    if (!import.meta.env.SSR) {
      app.use(
        createRouter({
          history: createWebHistory(),
          routes: [],
        }),
      );
    }
  },
};
