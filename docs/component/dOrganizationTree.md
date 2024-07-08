<!--
 * @Date: 2023-11-10 09:26:45
 * @Auth: 873768511@qq.com
 * @LastEditors: 873768511@qq.com
 * @LastEditTime: 2023-11-14 10:21:10
 * @FilePath: \dc-component\docs\component\dOrganizationTree.md
-->

# dOrganizationTree 组织树

组件便捷式开发

## 基础用法

通过 isFilterable 属性可用来过滤树节点

  <dOrganizationTree></dOrganizationTree>


::: details Show Code

```vue

<template>
  <DOrganizationTree
    ref="treeRef"
    v-bind="treeOption"
    :treeData="treeData"
    :ellipsisLimit="10"
  >
  </DOrganizationTree>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DOrganizationTree } from 'dc-pro-component';

type Tree={
  label:string;
  id:number;
  children?:Tree[];
}
const  treeOption=ref({
    isLazy:false,
    isAsyncSearch:false
})
const treeData= ref<Tree[]>([{
    id: 2,
    label: '市委',
    children: [],

  },{
    id: 3,
    label: "市人大市人大市人大市人大市人大市人大",
    children: [{
      id: 4,
      label: "子节点",
      }]
  }],
 )
</script>

<style>

</style>
```

:::

## 异步树结构


::: tip
通过请求的方式动态获取数据：`:load="getLoadTree"` 懒加载子节点；`@handleSearch` 异步搜索数据。
:::



<dOrganizationTreeAsync/>

::: details Show Code

```vue

<template>
  <DOrganizationTree
    ref="treeRef"
    v-loading="loadingTree"
    :treeData="treeData"
    :highlightCurrent="true"
    :load="getLoadTree"
    @handSearch="handSearch"
  >
  </DOrganizationTree>
</template>

<script lang="ts" setup>
import { ref, onMounted} from 'vue'
import {vLoading} from 'element-plus'
import { DOrganizationTree } from 'dc-pro-component';

type Tree={
  label:string;
  id:string;
  children?:Tree[]|null;
  isLeaf?:boolean,
  key?:string,
  level?:number,
}
const treeData= ref<Tree[] >([],
 )
const getTree=(id:string='')=>{
  return new Promise<Tree[]>((resolve) => {
    setTimeout(() => {
      const data: Tree[] = [
      { label: `leaf${id}1`, id:id+'1', children:null },
      { label: `leaf${id}2`, id:id+'2', children:null },
      ]
      resolve(data)
    }, 500)
  })
}
const loadingTree = ref(false)
const handSearch=(text: string)=>{
  loadingTree.value = true
  if(!text){
    getTree('').then((res:Tree[])=>{
      treeData.value = res
      loadingTree.value = false
    })
  }else{
    const data: Tree[] = [{ label: `${text}`, id:'1', children:null }]
    loadingTree.value = false
    treeData.value = data
  }
}
const getLoadTree = (
  node:Tree,
  resolve:(data:Tree[])=>void
)=>{
  loadingTree.value = node.level===0
  getTree(node.level!==0?node.key:'').then((res:Tree[])=>{
    resolve(res)
    loadingTree.value = false
  })
}
</script>

<style>

</style>
```
:::
## Attributes

| 参数 | 说明 | 类型  | 默认值  |
| ---- | ---- | ------ | ------------------- |
| treeData | 展示数据 | string | {} |
| treeContainer | 容器样式 | object | {} |
| isFilterable | 是否可筛选 | boolean | true |
| isAsyncSearch | 是否需要异步搜索 | boolean | true |
| isLazy | 是否懒加载 | Boolean | true |
| checkStrictly | 是否父子不关联 | Boolean | true |
| expandOnClickNode | 点击是否展开子节点 | Boolean | false |
| checkOnClickNode | 选中节点是否选中复选框 | Boolean | false |
| isShowCheckbox | 是否显示复选框 | Boolean | false |
| ellipsisLimit | 文本省略，自动或限制字符长度 | boolean/number | true |

<!-- ## 方法

| 方法 | 描述 | 参数  | 
| ---- | ---- | ------ |  -->


## 事件

| 事件名 | 说明 | 回调参数  | 
| ---- | ---- | ------ | 
| handSearch | 点击搜索按钮时触发 | string | 

## 插槽

| 插槽名 | 说明 |
|--------|------|
| `treeNode` | 节点自定义 |
| `empty` | 当数据为空时自定义的内容 |

