/*
 * @Date: 2023-10-18 09:36:50
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-18 11:36:09
 * @FilePath: \dcqc-component\packages\components\src\button\index.js
 */
import button from "./button.vue";
import { withInstall } from "dcqc-utils";
//app.use(注册组件)
const DButton = withInstall(button);
export default DButton;
