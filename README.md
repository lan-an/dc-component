<!--
 * @Date: 2023-10-17 15:20:53
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-19 10:48:58
 * @FilePath: \dc-component\README.md
-->

# vue-amazing-ui

_该组件库采用 `Vue3`+ `Vite` + `antd` 实现！_<br/>
_持续探索更新中...！_<br/>
_开箱即用！_

## Document & Online preview

[dc-pro-component](https://lan-an.github.io/dc-component/)

## Install & Use

```bash
pnpm i dc-pro-component
# or
npm install dc-pro-component
# or
yarn add dc-pro-component
```

Import and register component

**Global**

```ts
import { createApp } from 'vue'
import App from './App.vue'

import dc from 'dc-pro-component'

const app = createApp(App)
app.use(dc)
```

**Local**

```vue
<script setup>
import { Button } from 'dc-pro-component'
</script>
```

## Project

- Get the project code

```sh
git clone https://github.com/lan-an/dc-component.git
```

- Install dependencies

```sh
cd dc

pnpm i
```

- Run project

```sh
pnpm dev
```

<div>

"main": "lib/index.js",
"module": "es/index.js",

</div>
