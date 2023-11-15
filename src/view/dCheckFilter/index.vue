<!--
 * @Date: 2023-11-15 14:44:37
 * @Author: liu-hongrui
 * @LastEditors: liu-hongrui
 * @LastEditTime: 2023-11-15 15:41:08
 * @FilePath: \dc-component\src\view\dCheckFilter\index.vue
-->
<template>
  <div v-for="item in list">
    <d-check-filter :checkList="item.children" :title="item.title" @sendCheck="sendCheck" />
  </div>
  
</template>

<script setup lang="ts">
import { DCheckFilter } from 'dc-pro-component';
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
const value = ref()
const sendCheck = (val) => {
	console.log(val),'sendCheck';
  value.value = val
}
</script>

<style scoped>
</style>