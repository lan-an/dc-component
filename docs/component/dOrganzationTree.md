<!--
 * @Date: 2023-11-10 09:26:45
 * @Auth: 873768511@qq.com
 * @LastEditors: 873768511@qq.com
 * @LastEditTime: 2023-11-10 10:19:38
 * @FilePath: \dc-component\docs\component\dOrganzationTree.md
-->

# dOrganzationTree 组织树

组件便捷式开发

## 基础用法

::: tip
搜索条件可以通过输入框`search`参数来实现树结构的搜索`getLoadTree`支持支持异步加载树结构通过回调函数方式，`treeData`同步树结构以此获取全部数据,`treeContainer`控制树结构显示属性,`handSearch`树结构的查询
:::


  <dOrganzationTree></dOrganzationTree>




::: details Show Code

```vue

<template>
  <ElRow style="height:100%">
    <ElCol :span="8">
      <OrganizationTree
        :treeContainer="{width:'100%',height:'100%',padding: '20px',boxSizing:' border-box'}"
        ref="treeRef"
        :treeData="treeData"
        v-bind="treeOption"
        empty-text="暂无数据"
        @handleNodeClick="handleNodeClick"
        @handleSelected="handleSelected"
        @handSearch="handSearch"
      >
      </OrganizationTree>
    </ElCol>
    <ElCol :span="16">
      <div v-loading="loading" style="width:100%;text-align:center;line-height:300px;"></div>
    </ElCol>
  </ElRow>
</template>

<script lang="ts" setup>
import { ref, toRef, watch } from 'vue'
import {ElInput,ElButton,ElRow,vLoading,ElCol} from 'element-plus'
import { DOrganizationTree } from 'dc-pro-component';
import {DArrowRight} from '@element-plus/icons-vue'
import { reactive } from 'vue';

type Tree={
  label:string;
  id:number|string;
  children?:Tree[];
  code?:string,
  disabled?:boolean,
  isLeaf?:boolean
}
type Tree1 = Partial<Tree>
let checkedNode = ref('')
const treeData= ref<Tree1[] >([{
    id: 2,
    label: '市委',
    code: 'GO_f6dcdfa87d1e4eadb0e33d2a2d7c6333',
    children: null,

  },{
    id: 3,
    label: "市人大市人大市人大市人大市人大市人大",
    code: "GO_acbaf8c3ee0642f19592cf73bf4cc016",
    children: null,

  }],
 )
const  treeOption=ref({
    isSearchable:true,
    ellipsisLen: 10,
    checkStrictly:true,
  })

const handSearch=(text: string , callback)=>{
  if(!text){
    getTree(0).then((res:Tree[])=>{
      callback(res)
    })
  }else{
    const data: Tree[] = [{ label: `${text}`, id:1, children:null }]
    treeData.value = data
  }
}

const handleSelected = (data:Tree,isSelected:boolean,checkedNodes:Tree[])=>{
  if(checkedNodes.length>0){
    const arr:Array<string> = checkedNodes.map(item=>{
      return item.label
    })
    checkedNode.value = arr.join(',')
  }
}

// 刷新loading
let loading = ref(false)
const handleRequest = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    }, 2000);
};

const handleNodeClick = (data:Tree)=>{
  handleRequest()
}

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
    <ElCol :span="12">
      <DOrganizationTree
        :treeContainer="{width:'100%',height:'100%',padding: '20px',boxSizing:' border-box'}"
        ref="treeRef"
        :treeData="treeData"
        v-bind="treeOption"
        :getTree="getTree"
        empty-text="暂无数据"
        @handleNodeClick="handleNodeClick"
        @handleSelected="handleSelected"
        @handSearch="handSearch"
        @handSaveNodes="handSaveNodes"
        @getLoadTree="getLoadTree"
      >
      </DOrganizationTree>
    </ElCol>
    <ElCol :span="16">
    </ElCol>
  </ElRow>
</template>

<script lang="ts" setup>
import { ref, toRef, watch } from 'vue'
import {ElInput,ElButton,ElRow,vLoading,ElCol} from 'element-plus'
import { DOrganizationTree } from 'dc-pro-component';
import {DArrowRight} from '@element-plus/icons-vue'
import { reactive } from 'vue';

type Tree={
  label:string;
  id:number|string;
  children?:Tree[]|null;
  code?:string,
  disabled?:boolean

}
type Tree1 = Partial<Tree>
let checkedNode = ref('')
const treeData= ref<Tree1[] >([{
    id: 2,
    label: '市委',
    code: 'GO_f6dcdfa87d1e4eadb0e33d2a2d7c6333',
    children: null,

  },{
    id: 3,
    label: "市人大市人大市人大市人大市人大市人大",
    code: "GO_acbaf8c3ee0642f19592cf73bf4cc016",
    children: null,

  }],
 )
const  treeOption=ref({
    isSearchable:true,
    ellipsisLen: 10,
    checkStrictly:true,
  })

 
const handSearch=(text: string , callback)=>{
  if(!text){
    getTree(0).then((res:Tree[])=>{
      callback(res)
    })
  }else{
    const data: Tree[] = [{ label: `${text}`, id:1, children:null }]
    treeData.value = data
  }
}

const handleSelected = (data:Tree,isSelected:boolean,checkedNodes:Tree[])=>{
  if(checkedNodes.length>0){
    const arr:Array<string> = checkedNodes.map(item=>{
      return item.label
    })
    checkedNode.value = arr.join(',')
  }
}
const handSaveNodes = (nodes:Tree[])=>{
  console.log(nodes,'nodes')
}
let loading = ref(false)

const handleRequest = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    }, 2000);
};
const handleNodeClick = (data:Tree)=>{
  handleRequest()
}


const getTree=(id:number = 0)=>{
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


const getLoadTree = (
  id:number=0,
  callback:(data:Tree[])=>void
)=>{
  getTree(id).then((res:Tree[])=>{
    callback(res)
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
| isSearchable | 是否需要搜索 | boolean | true |
| treeContainer | 容器样式 | object | {} |
| ellipsisLimit | 文本省略 | boolean | true |
| isLazy | 是否懒加载 | Boolean | true |
| checkStrictly | 是否父子不关联 | Boolean | true |

## 插槽

| 插槽名 | 说明 |
|--------|------|
| `empty` | 当数据为空时自定义的内容 |

