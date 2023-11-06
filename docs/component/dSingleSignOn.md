# DFileUpload 单点登录

单点登录

## 基础用法

基础用法

## API

### 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| `api` | 单点登录请求api地址 | string | - | - |
| `query` | 地址栏字符串参数名称 | string | - | auth_code
| `request-token` | 单点登录请求标识符名称 | string | - | token
| `request-method` | 单点登录请求类型 | string | - | POST
| `request-payload` | 单点登录负载类型 | string | 'data' / 'params' | params
| `response-token` | 单点登录成功后返回标识符名称 | string | - | token
| `hide-message` | 是否隐藏消息 | boolean | true / false | false
| `manual-handling` | 是否手动处理axios响应 | boolean | true / false | false

### 事件

| 事件名 | 说明 | 回调参数 |
|--------|-------|----------|
| `response-promise` | 单点登录返回Promise | `Promise<any> \| AxiosPromise<any>`
| `response-data-token` | 单点登录返回标识符内容 | string

### 暴露属性

| 属性名 | 说明 | 类型 | 可选值 |
|--------|------|------|--------|
| `status` | 消息 | string | 'pending' / 'success' / 'failed' |
| `message` | 消息 | string | - |
