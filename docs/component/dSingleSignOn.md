# DSingleSignOn 单点登录

用于单点登录操作。

## 基础用法

指定API地址，读取地址栏字符串参数后进行请求，获取返回的标识符。

[点击此处在地址栏上添加字符串请求，以查看效果](dSingleSignOn.html?auth_code=123456)

## 自定义请求方式

可以自定义请求与响应的参数名称。

## 自定义消息

可以使用插槽自定义显示的消息，也可以用`hide-message`关闭消息显示。

## 自定义Axios实例

内部创建的基础Axios实例可能不能满足需求，
可以使用`axios-instance`自定义Axios实例。

## 自定义处理响应

内部对相应进行的解析可能不能满足需求，
可以使用`manual-handling`属性与`response-promise`事件手动处理返回的响应。

## API

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| `api` | 单点登录请求api地址 | string | - | - |
| `query` | 地址栏字符串参数名称 | string | - | auth_code
| `request-token` | 单点登录请求标识符名称 | string | - | token
| `request-method` | 单点登录请求类型 | string | - | POST
| `request-payload` | 单点登录负载类型 | string | data / params | params
| `response-token` | 单点登录成功后返回标识符名称 | string | - | token
| `hide-message` | 是否隐藏消息 | boolean | true / false | false
| `axios-instance` | 外部Axios实例 | AxiosInstance | - | -
| `manual-handling` | 是否手动处理axios响应 | boolean | true / false | false

## 插槽

| 插槽名 | 说明 |
|--------|------|
| `pending` | 请求加载中显示消息的内容 |
| `success` | 请求成功显示消息的内容 |
| `failed` | 请求失败显示消息的内容 |

## 事件

| 事件名 | 说明 | 回调参数 |
|--------|-------|----------|
| `response-promise` | 单点登录返回Promise | `Promise<any> \| AxiosPromise<any>`
| `response-data-token` | 单点登录返回标识符内容 | string

## 暴露属性

| 属性名 | 说明 | 类型 | 可选值 |
|--------|------|------|--------|
| `status` | 消息 | string | pending / success / failed |
| `message` | 消息 | string | - |
