/*
 * @Date: 2023-10-17 11:20:49
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-24 10:14:33
 * @FilePath: \dc-component\packages\utils\install.ts
 */
export const withInstall = (comp: any): any => {
  comp.install = app => {
    //注册组件
    app.component(comp.name, comp)
  }
  return comp
}
