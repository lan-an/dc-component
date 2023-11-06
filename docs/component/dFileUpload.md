# DFileUpload 文件上传组件

## 说明

`DFileUpload` 是一个用于文件上传的便捷式开发组件，它基于Element Plus组件库开发，支持文件格式、大小校验，拖拽上传等功能。

## 基础用法

基础的自动上传文件用法。
<script lang="ts" setup>
import {ref} from 'vue'
import { DFileUpload } from 'dc-pro-component';
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
const fileList2 = ref([])
</script>

<DFileUpload
      :file-list="fileList"
      :upload-url="uploadUrl"
      @upload-error="handleUploadError"
      @upload-success="handleUploadSuccess"
    />
    
 
::: details Show Code

```vue
<template>
  <DFileUpload
     :file-list="fileList"
     :upload-url="uploadUrl"
     @upload-error="handleUploadError"
     @upload-success="handleUploadSuccess"
  />
</template>
<script setup>
import { ref } from 'vue';
import DFileUpload from '@/components/DFileUpload.vue';
const fileList = ref([
 {
    name: 'element-plus-logo.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  {
    name: 'element-plus-logo2.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  }
]);
const uploadUrl = ref('https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15');
const handleUploadError = (error) => {
  // 处理文件上传失败
};
const handleUploadSuccess = (file, list) => {
  // 处理文件上传成功
};
</script>
:::


## 拖拽上传

文件拖拽方法通过提交按钮手动上传,自定义文件类型,文件大小,文件数量。
<DFileUpload
      :is-drag="true"
      :limit-num="5"
      :file-size="10"
      file-types=".png,.jpg"
      :auto-upload="false"
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
     :auto-upload="false"
     :file-list="fileList"
     :upload-url="uploadUrl"
     @upload-change="uploadChange"
  />
</template>
<script setup>
import { ref } from 'vue';
import DFileUpload from '@/components/DFileUpload.vue';
const fileList = ref([]);
const uploadUrl = ref('https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15');
const uploadChange = (file, list) => {
  // 获取需要上传的文件参数
};
</script>

:::

## Attributes

| 参数 | 说明 | 类型  | 默认值  |
| ---- | ---- | ------ | ------------------- |
| fileTypes | 限制文件类型 | string | .xls,.xlsx,.doc,.docx,.pdf,.zip |
| uploadUrl | 接口地址 | string | -- |
| isDrag | 是否拖拽 | Boolean | 否 |
| autoUpload | 是否自动上传文件 | Boolean | 否 |
| limitNum | 数量限制 | Number | 3 |
| fileSize | 文件大小限制 | Number | 5 |
| fileList | 文件列表，用于数据回显 | Array | -- |
| paramsData | 上传时附带的额外参数 | Object | -- |
| uploadHeaders | 设置上传的请求头部 | Object | -- |
| upload-change | 文件上传更新,一般用于手动上传 | Function | -- |
| upload-remove | 文件列表移除文件时的钩子 | Function | -- |
| upload-error | 文件上传失败时的钩子 | Function | -- |
| upload-success | 文件上传成功时的钩子 | Function | -- |
