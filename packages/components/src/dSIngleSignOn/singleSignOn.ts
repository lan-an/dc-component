import { type AxiosInstance } from 'axios';

export interface singleSignOnPropsInterface {
  /** @description 单点登录api地址 */
  api: string;
  /** @description 字符串参数名称 */
  query?: string;
  /** @description 单点登录请求标识符名称 */
  token?: string;
  /** @description 单点登录成功后跳转地址 */
  target?: string;
  /** @description Axios实例 */
  axiosInstance?: AxiosInstance;
}
export const singleSignOnPropsDefaults = {
  /** @description 单点登录api地址 */
  api: '/single-sign-on',
  /** @description 字符串参数名称 */
  query: 'auth_code',
  /** @description 单点登录请求标识符名称 */
  token: 'token',
  /** @description 单点登录成功后跳转地址 */
  target: '/',
};

export const singleSignOnEmits = ['response'];
