# DCheckCard 多选卡片

用于选择多个选项。

## 基础用法

<script setup>
import { DCheckCard } from 'dc-pro-component';
import {ref} from 'vue'
const changeCheck = (val) => {
  console.log(val, 'changeCheck');
};
const list = ref([
  {
    title: '卡片1',
    content: '卡片1的内容',
    checked: true,
  },
  {
    title: '卡片2',
    content: '卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容',
    checked: false,
  },
  {
    title: '卡片3',
    content: '卡片3的内容',
    checked: false,
  },
  {
    title: '卡片4',
    content: '卡片4的内容',
    checked: false,
  },
  {
    title: '卡片5',
    content: '卡片5的内容',
    checked: false,
  },

])
</script>


<div class="container">
  <DCheckCard class="item" v-for="item in list" :checked="item.checked" :title="item.title" :content="item.content" @changeCheck="changeCheck"/>
</div>

<style scoped>
.container{
  display: flex;

}
.item{
  margin-right: 10px;
}
</style>
::: details Show Code

```vue
<template>
  <div class="container">
    <DCheckCard class="item" v-for="item in list" :checked="item.checked" :title="item.title" :content="item.content" @changeCheck="changeCheck"/>
  </div>
</template>
<script setup>
import { DCheckCard } from 'dc-pro-component';
import {ref} from 'vue'
const changeCheck = (val) => {
  console.log(val, 'changeCheck');
};
const list = ref([
  {
    title: '卡片1',
    content: '卡片1的内容',
    checked: true,
  },
  {
    title: '卡片2',
    content: '卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容卡片2的内容',
    checked: false,
  },
  {
    title: '卡片3',
    content: '卡片3的内容',
    checked: false,
  },
  {
    title: '卡片4',
    content: '卡片4的内容',
    checked: false,
  },
  {
    title: '卡片5',
    content: '卡片5的内容',
    checked: false,
  },

])
</script>

<style scoped>
.container{
  display: flex;

}
.item{
  margin-right: 10px;
}
</style>
```

:::

## Attributes

| 参数 | 说明 | 类型   | 可选值                                           | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------ | ------- |
| checked | 是否为选中状态 | boolean | true/false | 必填项 |
| style | 可以设置card样式 | object | -- | -- |
| title | card标题 | string | -- | -- |
| border | card内容 | string | -- | -- |
| gap | card内容行数，超出显示省略号 | number |  | 2 |


## 事件

| 事件名 | 说明 | 类型 | 可选值 | 默认值  |
|--------|-------|----------| -- | -- |
| changeCheck | 返回当前操作的对象数据 | Function(val) | -- | -- |