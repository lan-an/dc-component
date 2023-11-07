<!--
 * @Date: 2023-11-02 16:32:33
 * @Author: liu-hongrui
 * @LastEditors: liu-hongrui
 * @LastEditTime: 2023-11-07 10:29:45
 * @FilePath: \dc-component\src\view\dCropper\index.vue
-->
<template>
  <d-cropper
    ref="clipperRef"
    preview-width="200"
    title="自定义标题"
    @confirm="onConfirm"
  />
  <el-button @click="upload">上传裁剪图片</el-button>
</template>

<script setup lang="ts">
import {ElButton} from 'element-plus'
import { DCropper } from 'dc-pro-component';
import {ref} from 'vue'
import type { DCropperType } from 'dc-pro-component';
const clipperRef = ref<DCropperType>()

const upload = (): void => {
  // 打开裁剪组件
  if(clipperRef.value) return
  clipperRef.value.uploadFile();
};
const onConfirm = (val: any): void => {
  console.log(val, '裁剪后的图片信息');
};
</script>

<style>
</style>