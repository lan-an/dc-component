import { AxiosPromise, type AxiosInstance } from 'axios';

export type payloadType = 'data' | 'params';

export interface singleSignOnPropsInterface {
  /** @description 单点登录请求api地址 */
  api: string;
  /** @description 地址栏字符串参数名称 */
  query?: string;
  /** @description 单点登录请求标识符名称 */
  requestToken?: string;
  /** @description 单点登录请求类型 */
  requestMethod?: string;
  /** @description 单点登录负载类型 */
  requestPayload?: payloadType;
  /** @description 单点登录成功后返回标识符名称 */
  responseToken?: string;
  /** @description 是否隐藏消息 */
  hideMessage: boolean;
  /** @description 外部Axios实例 */
  axiosInstance?: AxiosInstance;
  /** @description 是否手动处理axios响应 */
  axiosManualHandling?: boolean;
}

export const singleSignOnPropsDefaults = {
  /** @description 字符串参数名称 */
  query: 'auth_code',
  /** @description 单点登录请求标识符名称 */
  requestToken: 'token',
  /** @description 单点登录请求类型 */
  requestMethod: 'POST',
  /** @description 单点登录负载类型 */
  requestPayload: 'data' as payloadType,
  /** @description 单点登录返回标识符名称 */
  responseToken: 'token',
  /** @description 是否隐藏消息 */
  hideMessage: false,
  /** @description 是否手动处理axios响应 */
  axiosManualHandling: false,
};

export type singleSignOnEmitsType = {
  /** @description 单点登录返回Promise */
  'response-promise': [promise: Promise<any> | AxiosPromise<any>];
  /** @description 单点登录返回标识符内容 */
  'response-data-token': [token: string];
};
