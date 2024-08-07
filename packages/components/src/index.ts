/*
 * @Date: 2023-10-17 11:15:29
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2024-07-08 10:57:48
 * @FilePath: \dc-component\packages\components\src\index.ts
 */
import * as components from './components';
import type { App } from 'vue';
export * from './components';
import 'element-plus/dist/index.css';
export const install = function (app: App) {
  Object.keys(components).forEach((key) => {
    const component = components[key];
    if (component.install) {
      app.use(component);
    }
  });

  return app;
};

export default {
  install,
};
