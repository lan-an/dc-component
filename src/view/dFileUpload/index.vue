<!--
 * @Date: 2023-11-10 23:59:59
 * @Auth: 915005137@qq.com
 * @LastEditors: 915005137@qq.com
 * @LastEditTime: 2023-11-10 23:59:59
 * @FilePath: \dc-component\src\view\dFileUpload\index.vue
 -->
<template>
  <DFileUpload
    :fileTypes="fileTypes"
    :fileList="fileList"
    :uploadUrl="uploadUrl"
    @upload-success="uploadSuccess"
    @upload-change="uploadChange"
  />

</template>
<script lang="ts" setup>
import {ref} from 'vue'
import { DFileUpload } from 'dc-pro-component';
const fileTypes = ref('.xls,.xlsx,.doc,.docx,.pdf,.zip')
const uploadUrl = ref('https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15')
//文件回显初始值
const fileList = ref([
  {
    name: 'element-plus-logo.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  {
    name: 'element-plus-logo2.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  }
])
//文件上传更新
function uploadChange(file,list){
  console.log(file,list)
}
//文件上传成功
function uploadSuccess(file,list) {
  console.log(file,list)
}
</script>

<style scoped>

</style>
