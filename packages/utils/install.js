/*
 * @Date: 2023-10-17 11:20:49
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-17 11:20:56
 * @FilePath: \dcqc-component\utils\utils.js
 */
export const withInstall = (comp) => {
  comp.install = (app) => {
    //注册组件
    app.component(comp.name, comp);
  };
  return comp;
};

export const demo =()=>{
  alert('')
}