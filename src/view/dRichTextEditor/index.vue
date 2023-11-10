<!--
 * @Date: 2023-11-10 23:59:59
 * @Auth: 915005137@qq.com
 * @LastEditors: 915005137@qq.com
 * @LastEditTime: 2023-11-10 23:59:59
 * @FilePath: \dc-component\src\view\DRichTextEditor\index.vue
 -->
<template>
  <div>
    <DRichTextEditor
      ref="uploadRefs"
      :fileTypes="fileTypes"
      :fileList="fileList"
      :file-mapping="fileMapping"
      :uploadUrl="uploadUrl"
      :autoUpload="false"
      :isTemplate="true"
      @download-file="downloadFile"
      @upload-change="uploadChange"
      @upload-remove="uploadRemove"
      @upload-success="uploadSuccess"
    />
    <el-button  @click="submitForm" type="primary">导入文件</el-button>
  </div>


</template>
<script lang="ts" setup>
import {getCurrentInstance, ref} from 'vue'
import {ElButton} from "element-plus";
import { DRichTextEditor } from 'dc-pro-component';
const fileMapping = ref({
  name:'fileName',
  url:'fileUrl'
})
const fileTypes = ref('.xls,.xlsx,.doc,.docx,.pdf,.zip')
const uploadUrl = ref('https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15')
const { proxy } =  getCurrentInstance();

//文件回显初始值
const fileList = ref([
  {
    fileName: 'element-plus-logo.xlsx',
    fileUrl: 'https://element-plus.org/images/element-plus-logo.svg',
  }
])
//文件上传成功
function uploadSuccess(response){
  //示例：文件名为fileName，fileUrl
  fileList.value.push({
    fileName:response.data.name,
    fileUrl:response.data.url,
  })
}
//文件删除
function uploadRemove(file,list) {
  //示例：文件名为fileName，fileUrl
  fileList.value = list.map(i => {
    return {
      fileName: i.response.data.name,
      fileUrl: i.response.data.url,
    }
  })
}
function downloadFile(){
  console.log('下载')
}
//导入文件时上传更新
function uploadChange(file,list){
  fileList.value=list
}
//手动提交校验文件格式大小
function submitForm(){
  let flag=true
  fileList.value.forEach(item=>{
    if(!proxy.$refs.uploadRefs.uploadBefore(item)){
      flag=false
    }
  })
  if(!flag) return
  console.log('文件校验通过')
}
</script>

<style scoped>

</style>
