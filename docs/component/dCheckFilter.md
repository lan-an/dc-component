<!--
 * @Date: 2023-10-18 13:01:07
 * @Auth: 463997479@qq.com
 * @LastEditors: liu-hongrui
 * @LastEditTime: 2023-11-21 11:40:31
 * @FilePath: \dc-component\docs\component\dCheckFilter.md
-->

# DCheckFilter 条件筛选

用于条件筛选。

## 基础用法

<script setup lang="ts">
import { DCheckFilter,DTags } from 'dc-pro-component';
import { ref } from "vue";
const list = ref([
  {
    title: "标题一",
    children: [
      {value:'1-1',label:'标题 1-1'},
      {value:'1-2',label:'标题 1-2'},
      {value:'1-3',label:'标题 1-3'},
      {value:'1-4',label:'标题 1-4'},
    ],
  },
  {
    title: "标题二",
    children: [
      {value:'2-1',label:'标题 2-1'},
      {value:'2-2',label:'标题 2-2'},
      {value:'2-3',label:'标题 2-3'},
    ],
  },
]);
const tagsList = ref([])
const sendCheck = (currentList:any,checkTags:any[]) => {
  console.log(currentList,'当前标题选中的数据');
  console.log(checkTags,'所有选中的数据');
  tagsList.value = checkTags
}
</script>


<div v-for="item in list">
  <d-check-filter :checkList="item.children" :title="item.title" @sendCheck="sendCheck" />
</div>
<DTags :tagsList="tagsList" tageTitle="选中" />

::: details Show Code

```vue
<template>
  <div v-for="item in list">
    <d-check-filter :checkList="item.children" :title="item.title" @sendCheck="sendCheck" />
  </div>
  <d-tags :tagsList="tagsList" tageTitle="选中" />
</template>
```

:::

## Attributes

| 参数 | 说明 | 类型   | 可选值                                           | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------ | ------- |
| checkList | 数据 | Array |  | [] |
| title | 数据标题 | string |  | "" |
| labelWidht | label宽度 | number |  | 80 |
| border | 是否带边框 | boolean |  | false |


## 事件

| 事件名 | 说明 | 类型 | 可选值 | 默认值  |
|--------|-------|----------| -- | -- |
| sendCheck | 返回选中数据和tags数据 | Function(currentList:any,checkTags:any[]) | -- | -- |