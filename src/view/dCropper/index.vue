<!--
 * @Date: 2023-11-02 16:32:33
 * @Author: liu-hongrui
 * @LastEditors: liu-hongrui
 * @LastEditTime: 2023-11-08 11:05:16
 * @FilePath: \dc-component\src\view\dCropper\index.vue
-->
<template>
  <d-cropper
    ref="clipperRef"
    @getCropData="onConfirm"
  />
  <el-button @click="upload">上传裁剪图片</el-button>
</template>

<script setup lang="ts">
import {ElButton} from 'element-plus'
import { DCropper } from 'dc-pro-component';
import {ref} from 'vue'
const clipperRef = ref()
const upload = (): void => {
  if(!clipperRef.value) return
  clipperRef.value.uploadFile();
};
const onConfirm = (ImageMsg: any): void => {
  console.log(ImageMsg, '裁剪后的图片信息');
};

</script>

<style>
</style>