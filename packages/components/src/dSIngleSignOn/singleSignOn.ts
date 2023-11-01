export const singleSignOnProps = {
  /** @description 单点登录api地址 */
  api: {
    type: String,
    required: false,
    default: '/single-sign-on',
  },
  /** @description 单点登录成功后跳转地址 */
  target: {
    type: String,
    default: '/',
  },
  /** @description 标识符名称 */
  token: {
    type: String,
    default: 'token',
  },
  /** @description 字符串参数名称 */
  suffix: {
    type: String,
    default: 'auth_code',
  },
};

export const singleSignOnEmits = ['response'];
