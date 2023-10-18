/*
 * @Date: 2023-10-17 11:15:29
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-17 18:13:19
 * @FilePath: \dcqc-component\packages\components\src\index.js
 */
import * as components from './components';
export * from './components';
export const install = function (app) {
  Object.keys(components).forEach(key => {
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
