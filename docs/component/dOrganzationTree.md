<!--
 * @Date: 2023-11-10 09:26:45
 * @Auth: 873768511@qq.com
 * @LastEditors: 873768511@qq.com
 * @LastEditTime: 2023-11-13 18:13:40
 * @FilePath: \dc-component\docs\component\dOrganzationTree.md
-->

# dOrganzationTree 组织树

组件便捷式开发

## 基础用法

通过 isFiltratable 属性可用来过滤树节点

  <dOrganzationTree></dOrganzationTree>


::: details Show Code

```vue

<template>
  <ElRow style="height:100%">
    <ElCol :span="8">
      <DOrganizationTree
        :treeContainer="{width:'100%',height:'100%',padding: '20px',boxSizing:' border-box'}"
        ref="treeRef"
        v-bind="treeOption"
        :treeData="treeData"
        :highlightCurrent="true"
        empty-text="暂无数据"
      >
      </DOrganizationTree>
    </ElCol>
  </ElRow>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {ElRow,ElCol} from 'element-plus'
import { DOrganizationTree } from 'dc-pro-component';

type Tree={
  label:string;
  id:number|string;
  children?:Tree[];
}
type Tree1 = Partial<Tree>
const  treeOption=ref({
    isLazy:false,
    isAsyncSearch:false,
})
const treeData= ref<Tree1[] >([{
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
异步树结构通过请求的方式动态获取数据` @getLoadTree="getLoadTree"`搜索条件通过`handleSearch`异步获取数据
:::



<dOrganzationTreeAsync/>

::: details Show Code

```vue

<template>
  <ElRow style="height:100%">
    <ElCol :span="8">
      <OrganizationTree
        :treeContainer="{width:'100%',height:'100%',padding: '20px',boxSizing:' border-box'}"
        ref="treeRef"
        :treeData="treeData"
        :highlightCurrent="true"
        v-bind="treeOption"
        v-loading="loadingTree"
        empty-text="暂无数据"
        @nodeClick="nodeClick"
        @handSearch="handSearch"
        :load="getLoadTree"
      >
      </OrganizationTree>
    </ElCol>
  </ElRow>
</template>

<script lang="ts" setup>
import { ref, toRef, watch } from 'vue'
import {ElRow,vLoading,ElCol,ElIcon} from 'element-plus'
import { DOrganizationTree } from 'dc-pro-component';

type Tree={
  label:string;
  id:number|string;
  children?:Tree[]|null;
  code?:string,
  disabled?:boolean,
  isLeaf?:boolean,
  key?:'string',
  level?:number,
}
type Tree1 = Partial<Tree>
const  treeOption=ref({
    isAsyncSearch:true,
    ellipsisLimit: true,
    isLazy:true,
    checkStrictly:true,
    isShowCheckbox:true
})
const treeData= ref<Tree1[] >([],
 )
// 懒加载方法
/**
 * 
 * @param id 
 */
 const getTree=(id:string='')=>{
  return new Promise<Tree[]>((resolve) => {
    setTimeout(() => {
      const data: Tree[] = [
      { label: `leaf${id}1`, id:id+'1', children:null },
      { label: `leaf${id}2`, id:id+'2', children:null, disabled:true },
      ]
      resolve(data)
    }, 500)
  })
}
const loadingTree = ref(false)
/**
 * 
 * @param text 搜索条件
 * @param callback 搜索异步回调
 */
const handSearch=(text: string , callback)=>{
  loadingTree.value = true
  if(!text){
    getTree('').then((res:Tree[])=>{
      treeData.value = res
      loadingTree.value = false
    })
  }else{
    const data: Tree[] = [{ label: `${text}`, id:1, children:null }]
    loadingTree.value = false
    treeData.value = data
  }
}
/**
 * 
 * @param data 点击当前树节点信息
 */
const nodeClick = (data:Tree)=>{
  console.log(data.id)
}
/**
 * 
 * @param node 当前点击的节点
 * @param resolve 为数据加载完成的回调(必须调用)
 */
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
| isFiltratable | 是否可筛选 | boolean | true |
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

