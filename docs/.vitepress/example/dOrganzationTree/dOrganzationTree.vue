<!--
 * @Date: 2023-11-10 09:28:41
 * @Auth: 873768511@qq.com
 * @LastEditors: 873768511@qq.com
 * @LastEditTime: 2023-11-10 10:22:55
 * @FilePath: \dc-component\docs\.vitepress\example\dOrganzationTree\dOrganzationTree.vue
-->
<template>
  <ElRow style="height:100%">
    <ElCol :span="12">
      <DOrganizationTree
        :treeContainer="{width:'100%',height:'100%',padding: '20px',boxSizing:' border-box'}"
        ref="treeRef"
        :treeData="treeData"
        v-bind="treeOption"
        empty-text="暂无数据"
        @handleNodeClick="handleNodeClick"
        @handleSelected="handleSelected"
        @handSaveNodes="handSaveNodes"
        :isLazy="false"
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

  /**
   * 
   * @param text 输入框文本
   * @param callback 回调函数
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
 * @param data treeNode信息
 * @param isSelected 是否选中
 * @param checkedNodes 当前选中节点
 */
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
// 刷新右边
let loading = ref(false)
/**
 * 
 */
const handleRequest = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    }, 2000);
};
//点击
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

</script>

<style>

</style>