/*
 * @Date: 2023-10-17 11:15:29
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-20 15:10:08
 * @FilePath: \dc-component\packages\components\src\index.ts
 */
import * as components from './components'
import type { App } from 'vue'
export * from './components'
export const install = function (app: App) {
  Object.keys(components).forEach(key => {
    const component = components[key]
    if (component.install) {
      app.use(component)
    }
  })
  return app
}

export default {
  install
}
