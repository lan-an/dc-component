<!--
 * @Date: 2023-11-06 10:07:11
 * @Auth: 873768511@qq.com
 * @LastEditors: 873768511@qq.com
 * @LastEditTime: 2023-11-10 10:54:04
 * @FilePath: \dc-component\src\view\dOrganizationTree\index.vue
-->
<template>
  <ElRow style="height:100%">
    <ElCol :span="8">
      <OrganizationTree
        :treeContainer="{width:'100%',height:'100%',padding: '20px',boxSizing:' border-box'}"
        ref="treeRef"
        :treeData="treeData"
        v-bind="treeOption"
        :getTree="getTree"
        empty-text="暂无数据"
        @handleNodeClick="handleNodeClick"
        @handleSelected="handleSelected"
        @handSearch="handSearch"
        @getLoadTree="getLoadTree"
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
    // isLazy:false,
    // isHighlight:true
    // isShowCheckbox:true,
    checkStrictly:true,
  })
/**
 * 
 * @param text 搜索条件
 * @param callback 搜索异步回调
 */
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
/**
 * 
 * @param data 选中当前节点信息
 * @param isSelected 是否被选中
 * @param checkedNodes 已选中节点信息
 */
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
/**
 * 
 * @param data 点击当前树节点信息
 */
const handleNodeClick = (data:Tree)=>{
  handleRequest()
}

/**
 * 
 * @param id 
 */
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

/**
 * 
 * @param id 
 * @param callback 懒加载子节点回调
 */
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