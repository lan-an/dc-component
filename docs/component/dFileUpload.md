# DFileUpload 文件上传组件

## 说明

`DFileUpload` 是一个用于文件上传的便捷式开发组件，它基于Element Plus组件库开发，支持文件映射回显，文件格式，大小校验，拖拽上传，手动点击上传等功能。

## 基础用法

常用表单自动上传文件用法，自定义文件名回显。
<script lang="ts" setup>
import {ref,getCurrentInstance} from 'vue'
import { DFileUpload } from 'dc-pro-component';
import {ElButton} from "element-plus";
const { proxy } = getCurrentInstance();
const fileMapping = ref({
  name:"fileName",
  url:"fileUrl"
})
const uploadUrl = ref('https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15')
//文件回显初始值
const fileList = ref([
  {
    fileName: 'element-plus-logo.xlsx',
    fileUrl: 'https://element-plus.org/images/element-plus-logo.xlsx',
  }
])
const fileList2 = ref([])
const fileList3 = ref([])
//文件上传更新
function uploadChange(file,list){
  fileList3.value=list
}
//下载模板
function downloadFile(){
  console.log('下载模板')
}
// 提交表单检验文件格式大小
function submitForm(){
  let flag=true
  fileList3.value.forEach(item=>{
    if(!proxy.$refs.uploadRefs.uploadBefore(item)){
      flag=false
    }
  })
  if(!flag) return
  console.log('文件校验通过')
}
</script>

<DFileUpload
      :file-list="fileList"
      :upload-url="uploadUrl"
      :limit-num="3"
      :file-mapping="fileMapping"
      @upload-error="handleUploadError"
      @upload-success="handleUploadSuccess"
    />
    
 
::: details Show Code

```vue
<template>
  <DFileUpload
     :file-list="fileList"
     :limit-num="3"
     :upload-url="uploadUrl"
     :file-mapping="fileMapping"
     @upload-remove="handleUploadRemove"
     @upload-success="handleUploadSuccess"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import DFileUpload from '@/components/DFileUpload.vue';
const uploadUrl = ref('https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15');
const fileList = ref([
  {
    fileName: 'element-plus-logo.xlsx',
    fileUrl: 'https://element-plus.org/images/element-plus-logo.xlsx',
  }
])
const fileMapping = ref({
  name:"fileName",
  url:"fileUrl"
})

handleUploadRemove(file,list){
  // 处理文件删除 示例：文件名为fileName，fileUrl
  fileList.value = list.map(i => {
    return {
      fileName: i.response.data.name,
      fileUrl: i.response.data.url,
    }
  })
};

handleUploadSuccess(file, list){ 
  //处理文件上传成功 示例：文件名为fileName，fileUrl
  fileList.value.push({
    fileName:response.data.name,
    fileUrl:response.data.url,
  })  
};

</script>
:::


## 拖拽上传

文件拖拽自动上传,自定义文件类型,文件大小,文件数量。
<DFileUpload
      :is-drag="true"
      :limit-num="5"
      :file-size="10"
      file-types=".png,.jpg"
      :upload-url="uploadUrl"
      :file-list="fileList2"
      @upload-error="handleUploadError"
      @upload-success="handleUploadSuccess"
    />
    
 
::: details Show Code

```vue
<template>
  <DFileUpload
     :is-drag="true"
     :limit-num="5"
     :file-size="10"
     file-types=".png,.jpg"
     :file-list="fileList"
     :upload-url="uploadUrl"
     @upload-change="uploadChange"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import DFileUpload from '@/components/DFileUpload.vue';
const fileList = ref([]);
const uploadUrl = ref('https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15');

const handleUploadError = (error) => {
  // 处理文件上传失败
};

const handleUploadSuccess = (file, list) => {
  // 处理文件上传成功
};
</script>
:::


## 手动点击上传

手动提交上传,校验文件格式大小。
<div>
  <DFileUpload
      ref="uploadRefs"
      :upload-url="uploadUrl"
      :file-list="fileList3"
      :autoUpload="false"
      :isTemplate="true"
      @download-file="downloadFile"
      @upload-change="uploadChange"/>
  <el-button  @click="submitForm" type="primary">提交</el-button>
</div>


::: details Show Code

```vue
<template>
  <DFileUpload
      ref="uploadRefs"
     :upload-url="uploadUrl"
     :file-list="fileList"
     :autoUpload="false"
     :isTemplate="true"
     @download-file="downloadFile"
     @upload-change="uploadChange"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import DFileUpload from '@/components/DFileUpload.vue';
const fileList = ref([]);
const uploadUrl = ref('https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15');

//文件上传更新
function uploadChange(file,list){
  fileList.value=list
}

//下载模板
function downloadFile(){
  console.log('下载模板')
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
:::

## Attributes

| 参数 | 说明 | 类型  | 默认值  |
| ---- | ---- | ------ | ------------------- |
| fileTypes | 限制文件类型 | string | .xls,.xlsx,.doc,.docx,.pdf,.zip |
| uploadUrl | 接口地址 | string | -- |
| templateText | 模板按钮文字 | string | 点击下载模板文件 |
| btnText | 上传按钮文字 | string | 上传文件 |
| isDrag | 是否拖拽 | Boolean | 否 |
| autoUpload | 是否自动上传文件 | Boolean | 否 |
| limitNum | 数量限制 | Number | 1 |
| fileSize | 文件大小限制 | Number | 5 |
| fileList | 文件列表，用于数据回显 | Array | -- |
| paramsData | 上传时附带的额外参数 | Object | -- |
| uploadHeaders | 设置上传的请求头部 | Object | -- |
| fileMapping | 文件属性名称映射，自定义类名方便回显 | Object | "{name:'name',url:'url'}" |
| upload-change | 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用 | Function | -- |
| upload-remove | 文件列表移除文件时的钩子 | Function | -- |
| upload-error | 文件上传失败时的钩子 | Function | -- |
| upload-success | 文件上传成功时的钩子 | Function | -- |
| download-file | 下载模板文件 | Function | -- |
