# DSingleSignOn 单点登录

用于单点登录操作。

:::warning

目前本组件使用了`vue-router`以读取路由参数，仅支持应用挂载了`VueRouter.createRouter`的根实例后使用。

:::

:::info

单点登录需要地址栏携带查询字符串参数。
[点击此处在地址栏上添加字符串参数，刷新后查看效果。](dSingleSignOn.html?auth_code=123456)

:::

## 基础用法

使用`api`参数指定API地址，读取`query`参数指定的地址栏查询字符串参数后进行请求。

使用`response-token`参数指定返回标识符的名称，`response-data-token`事件获取返回的标识符。

<d-single-sign-on-demo-basic></d-single-sign-on-demo-basic>

::: details 查看源代码

<<< @/.vitepress/example/dSingleSignOn/dSingleSignOnDemoBasic.vue{4,5,9,10}

:::

## 自定义请求与响应参数

可以自定义请求方式，请求与响应的参数名称。

使用`query`参数指定查询字符串参数名称，使用`request-token`参数指定请求时的标识符名称。

使用`request-method`和`request-payload`定义请求类型和负载类型，默认为`POST`请求。

使用`response-token`定义响应的标识符名称。

::: details 查看源代码

<<< @/.vitepress/example/dSingleSignOn/dSingleSignOnDemoBasic.vue{5-9}

:::
::: info

未设置`request-token`参数时，请求时的标识符名称与`query`参数相同。

:::

## 自定义消息

可以使用插槽自定义显示的消息，也可以用`hide-message`关闭消息显示。

::: code-group

<<< @/.vitepress/example/dSingleSignOn/dSingleSignOnDemoMessage.vue#message-1 [自定义显示消息]

<<< @/.vitepress/example/dSingleSignOn/dSingleSignOnDemoMessage.vue#message-2 [关闭消息显示]

:::

## 自定义开始请求、处理响应

内部对响应进行的解析可能不能满足需求，
可以使用`manual-start`属性设置不自动动开始请求，`manual-handle`属性设置手动处理返回的响应。

使用`start`方法手动开始请求、`response-promise`事件获取响应。

<d-single-sign-on-demo-manual></d-single-sign-on-demo-manual>

::: details 查看源代码

<<< @/.vitepress/example/dSingleSignOn/dSingleSignOnDemoManual.vue{9-11,29-41}

:::

::: tip
`start`方法自身也返回了异步操作响应。手动开始请求时可以使用以下的方式处理响应，无需`response-promise`事件获取响应：

```js
singleSignOnRef.value.start().then((response) => {
  // 处理响应
});
```

同时参见[自定义Axios请求配置](#自定义axios请求配置)的源代码。

:::

## 自定义Axios实例

内部创建的基础Axios实例可能不能满足需求，
可以使用`axios-instance`自定义Axios实例，常用于自定义请求拦截器添加身份标识符。

<d-single-sign-on-demo-axios></d-single-sign-on-demo-axios>

::: details 查看源代码

<<< @/.vitepress/example/dSingleSignOn/dSingleSignOnDemoAxios.vue{7,30-56}

:::

::: tip

本组件已经支持常见的```return Promise.resolve(response.data)```响应拦截器，无需使用`response-promise`自定义处理响应。

```js{4}
// 自定义的Axios响应拦截器
service.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data ?? response); // 无需自定义处理响应
  },
  (error) => {
    return Promise.reject(error);
  },
);
```

:::

## 自定义Axios请求配置

内部生成的Axios请求配置可能不能满足需求，
可以使用`request-axios-config`属性手动设置Axios请求配置。

<d-single-sign-on-demo-config></d-single-sign-on-demo-config>

::: details 查看源代码

<<< @/.vitepress/example/dSingleSignOn/dSingleSignOnDemoConfig.vue{5,25-33}

:::

::: info
`request-axios-config`属性生效时，`request-token`、`request-method`、`request-payload`均不生效。
:::

::: tip
手动设置Axios请求配置时，不会检查字符串查询参数，也不会向配置内自动添加。所以通常需要手动开始请求（`manual-start`），以携带含有参数的配置。
:::

## API

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| `api` | 单点登录请求api地址 | string | - | -
| `query` | 地址栏字符串参数名称 | string | - | -
| `request-token` | 单点登录请求标识符名称 | string | - | token
| `request-method` | 单点登录请求类型 | string | - | POST
| `request-payload` | 单点登录请求负载类型 | string | data / params | data
| `request-axios-config` | 单点登录Axios请求配置项，此项生效时`request-token`、`request-method`、`request-payload`均不生效 | AxiosRequestConfig | - | -
| `response-token` | 单点登录成功后返回标识符名称 | string | - | token
| `hide-message` | 是否隐藏消息 | boolean | true / false | false
| `axios-instance` | 外部Axios实例 | AxiosInstance | - | -
| `manual-start` | 是否手动开始请求 | boolean | true / false | false
| `manual-handle` | 是否手动处理Axios响应 | boolean | true / false | false

## 插槽

| 插槽名 | 说明 |
|--------|------|
| `not-start` | 请求未开始加载时显示消息的内容 |
| `pending` | 请求加载中显示消息的内容 |
| `success` | 请求成功显示消息的内容 |
| `failed` | 请求失败显示消息的内容 |

## 事件

| 事件名 | 说明 | 回调参数 |
|--------|-------|----------|
| `response-data-token` | 单点登录返回标识符内容 | string
| `response-promise` | 单点登录返回异步操作Promise | `Promise<any> \| AxiosPromise<any>`

## 外部方法

| 方法名 | 说明 | 类型 |
|--------|------|------|
| `start` | 手动开始单点登录请求 | Function: `() => Promise<any>` |  

## 外部属性

| 属性名 | 说明 | 类型 | 可选值 |
|--------|------|------|--------|
| `status` | 请求状态 | string | not-start / pending / success / failed |
| `message` | 消息 | string | - |
