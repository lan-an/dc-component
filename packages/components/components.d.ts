/*
 * @Date: 2023-10-24 10:21:15
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-11-10 10:46:26
 * @FilePath: \dc-component\packages\components\components.d.ts
 */
import * as components from './src/components';
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    // 'd-button': typeof components.Button
  }
}
