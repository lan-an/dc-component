export const singleSignOnPropsDefaults = {
  /** @description 单点登录请求类型 */
  requestMethod: 'POST',
  /** @description 单点登录负载类型 */
  requestPayload: 'data' as const,
  /** @description 单点登录返回标识符名称 */
  responseToken: 'token',
  /** @description 是否隐藏消息（手动处理请求时强制隐藏） */
  hideMessage: false,
  /** @description 是否手动开始请求 */
  manualStart: false,
  /** @description 是否手动处理Axios响应 */
  manualHandle: false,
};
