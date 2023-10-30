<!--
 * @Date: 2023-10-18 13:01:07
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-24 14:04:49
 * @FilePath: \dc-component\docs\component\button.md
-->

# Button 按钮

按钮用于开始一个即时操作。

## 基础用法

<script lang="ts" setup>
import { DTableSearch } from 'dc-pro-component';
import { ElButton, ElInput, ElSpace,ElFormItem } from 'element-plus';
import {onUnmounted} from 'vue'
const columns = [
  {
    prop: 'name',

    label: 'name',
    slotName:'name'
  },
  {
    prop: 'date',
    label: 'date',
  },
  {
    prop: 'address',
    label: 'address',
    render:()=>{
      return ''
    }
  },
  {
    prop: '操作',
    label: '操作',
   slotName:'action',
   width:300
  },
];
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189',
  },
];

let timer=null
const handleRequest = (params, done) => {
  console.log(params);
  // done({data:[],total:1000});
  timer=setTimeout(()=>{
  done({data:tableData,total:1000});
    
  },2000)
  //请求返回数据
};
onUnmounted(()=>{
  clearTimeout(timer)
})
</script>
<style scoped>
  
</style>


  <DTableSearch
    :columns="columns"
    :request="handleRequest"
    :pagination="{
      background: true,
      layout:'total, sizes, prev, pager, next, jumper',
      small: 'small',
      pageSizes  :[10, 200, 300, 400]
    }"  
    :hasSearch="true"
    title="Card name"
    :header-cell-style="{
      background:'#f5f7fa'
    }"
    border
    class="vp-raw"
  >
  <template #dTableRight>
      <el-button type="primary" class="button">Operation button</el-button>
      <el-button class="button">...</el-button>
    </template>
    <template #searchData="{ search }">
      <el-space>
        <el-form-item prop="name" label="Activity name">
          <el-input v-model="search.name" />
        </el-form-item>
      </el-space>
    </template>
 <template #name="data">
      <div>{{ data.data.name }}</div>
    </template>
    <template #action="data">
      <el-button link type="primary">operation add</el-button>
      <el-button link  type="warning" >peration edit</el-button>
    </template>
</DTableSearch>


::: details Show Code

```vue
<template>
  <DTableSearch
    :columns="columns"
    :request="handleRequest"
    :pagination="{
      background: true,
      layout:'total, sizes, prev, pager, next, jumper',
      small: 'small',
      pageSizes  :[10, 200, 300, 400]
    }"  
    :hasSearch="true"
    title="Card name"
    :header-cell-style="{
      background:'#f5f7fa'
    }"
    border
    class="vp-raw"
  >
  <template #dTableRight>
      <el-button type="primary" class="button">Operation button</el-button>
      <el-button class="button">...</el-button>
    </template>
    <template #searchData="{ search }">
      <el-space>
        <el-form-item prop="name" label="Activity name">
          <el-input v-model="search.name" />
        </el-form-item>
      </el-space>
    </template>
 <template #name="data">
      <div>{{ data.data.name }}</div>
    </template>
    <template #action="data">
      <el-button link type="primary">operation add</el-button>
      <el-button link  type="warning" >peration edit</el-button>
    </template>
</DTableSearch>
</template>
```

:::


## Attributes

| 参数 | 说明 | 类型   | 可选值                                           | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------ | ------- |
| size | 尺寸 | string | large / small / mini                             | default |
| type | 类型 | string | primary / ghost / dashed / link / text / default | primary |
