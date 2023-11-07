# DSingleSignOn 单点登录

用于单点登录操作。

:::warning
目前本组件使用了`vue-router`以读取路由参数，仅支持应用挂载了`VueRouter.createRouter`的根实例后使用。
:::

## 基础用法

指定API地址，读取地址栏字符串参数后进行请求，获取返回的标识符。

[点击此处在地址栏上添加字符串请求，刷新后查看效果](dSingleSignOn.html?auth_code=123456)

<d-single-sign-on-demo-basic></d-single-sign-on-demo-basic>

::: details Show Code

```vue{5,7,9,11}
<template>
  <!-- 登录成功 -->
  <div style="border: 1px solid black; padding: 5px">
    <d-single-sign-on
      api="https://yesno.wtf/api"
      request-method="get"
      request-query="auth_code"
      request-token="force"
      request-payload="params"
      response-token="answer"
      @response-data-token="handleResponseToken"
    ></d-single-sign-on>
    <span v-if="token">获取的标识符是：{{ token }}</span>
  </div>
</template>

<script setup lang="ts" name="SingleSignOn">
import { ref } from 'vue';
import { DSingleSignOn } from 'dc-pro-component';
const token = ref('');

function handleResponseToken(res: string) {
  token.value = res;
}
</script>

<style lang="scss" scoped></style>
```

:::

## 自定义请求方式

可以自定义请求与响应的参数名称。

## 自定义消息

可以使用插槽自定义显示的消息，也可以用`hide-message`关闭消息显示。

## 自定义Axios实例

内部创建的基础Axios实例可能不能满足需求，
可以使用`axios-instance`自定义Axios实例。

## 自定义处理响应

内部对响应进行的解析可能不能满足需求，
可以使用`manual-start`属性设置不自动动开始请求，`manual-handling`属性设置手动处理返回的响应。

使用`start`方法手动开始请求、`response-promise`事件获取响应。

::: tip
`start`方法自身也返回了异步操作响应。可以使用以下的方式处理响应：

```js
singleSignOnRef.value.start().then((response) => {
  // 处理响应
});
```

:::

## 自定义请求配置

内部生成的请求配置可能不能满足需求，
可以使用`request-axios-config`属性设置Axios请求配置。

::: info
`request-axios-config`属性生效时，其他请求配置项均不生效。
:::

## API

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| `api` | 单点登录请求api地址 | string | - | - |
| `query` | 地址栏字符串参数名称 | string | - | auth_code
| `request-token` | 单点登录请求标识符名称 | string | - | token
| `request-method` | 单点登录请求类型 | string | - | POST
| `request-payload` | 单点登录负载类型 | string | data / params | params
| `request-axios-config` | 单点登录Axios请求配置项，此项生效时其他请求配置项均不生效 | AxiosRequestConfig | - | -
| `response-token` | 单点登录成功后返回标识符名称 | string | - | token
| `hide-message` | 是否隐藏消息 | boolean | true / false | false
| `axios-instance` | 外部Axios实例 | AxiosInstance | - | -
| `manual-start` | 是否手动开始请求 | boolean | true / false | false
| `manual-handling` | 是否手动处理Axios响应 | boolean | true / false | false

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
