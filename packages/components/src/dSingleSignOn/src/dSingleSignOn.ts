import { AxiosPromise, type AxiosInstance, AxiosRequestConfig } from 'axios';

export const payloadTypes = ['data', 'params'] as const;

/** @description 请求状态 */
export const statusTypes = [
  'not-start',
  'pending',
  'success',
  'failed',
] as const;

export interface singleSignOnPropsInterface {
  /** @description 单点登录请求api地址 */
  api?: string;
  /** @description 地址栏字符串参数名称 */
  query: string;
  /** @description 单点登录请求标识符名称 */
  requestToken?: string;
  /** @description 单点登录请求类型 */
  requestMethod?: string;
  /** @description 单点登录负载类型 */
  requestPayload?: (typeof payloadTypes)[number];
  /** @description 单点登录Axios请求配置项，此项生效时其他请求配置项均不生效 */
  requestAxiosConfig?: AxiosRequestConfig;
  /** @description 单点登录成功后返回标识符名称 */
  responseToken?: string;
  /** @description 是否隐藏消息（手动处理请求时强制隐藏） */
  hideMessage?: boolean;
  /** @description 外部Axios实例 */
  axiosInstance?: AxiosInstance;
  /** @description 是否手动开始请求 */
  manualStart?: boolean;
  /** @description 是否手动处理axios响应 */
  manualHandle?: boolean;
}

export type singleSignOnEmitsType = {
  /** @description 单点登录返回异步操作Promise */
  'response-promise': [promise: Promise<any> | AxiosPromise];
  /** @description 单点登录返回标识符内容 */
  'response-data-token': [token: string];
};
