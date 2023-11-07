<!--
 * @Date: 2023-10-18 13:01:07
 * @Auth: 463997479@qq.com
 * @LastEditors: liu-hongrui
 * @LastEditTime: 2023-11-07 14:02:05
 * @FilePath: \dc-component\docs\component\dCropper.md
-->

# DCropper 图片裁剪

`DCropper` 是一个用于图片裁剪的组件。

## 基础用法

<script lang="ts" setup>
import {ref} from 'vue'
import { DCropper } from 'dc-pro-component';
import {ElButton} from 'element-plus'
const clipperRef = ref()
const upload = (): void => {
  if(!clipperRef.value) return
  clipperRef.value.uploadFile();
};
const onConfirm = (ImageMsg: any): void => {
  console.log(ImageMsg, '裁剪后的图片信息');
};
</script>

<d-cropper
  ref="clipperRef"
  @confirm="onConfirm"
/>
<el-button type="primary" @click="upload">上传裁剪图片</el-button>

::: details Show Code

```vue
<template>
  <d-cropper
    ref="clipperRef"
    @confirm="onConfirm"
  />
  <el-button type="primary" @click="upload">上传裁剪图片</el-button>
</template>
<script lang="ts" setup>
  import {ref} from 'vue'
  import { DCropper } from 'dc-pro-component';
  import {ElButton} from 'element-plus'
  const clipperRef = ref()
  const upload = () => {
    if(!clipperRef.value) return
    clipperRef.value.uploadFile();
  };
  const onConfirm = (ImageMsg: any) => {
    console.log(ImageMsg, '裁剪后的图片信息');
  };
</script>
```

:::

## Attributes

| 参数 | 说明 | 类型   | 可选值                                           | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------ | ------- |
| `title` | 标题 | string | -  | - |
| `type` | 返回的数据类型 | string | default / Base64 / Blob | default |
| `allow-type-list` | 允许上传的图片类型 | string[] | - | ['jpg', 'png', 'jpeg', 'gif', 'webp'] |
| `limit-size` | 允许上传的图片大小 | number | - | 10 |
| `fixed-number` | 截图框的宽高比例 | number[] | - | [1, 1] |
| `preview-width` | 预览宽度 | string | '100' / '150' / '200' / '250' / '300' | '200' |
| `rotate` | 是否显示旋转按钮 | boolean | true / false | true |
| `canScale` | 是否允许滚轮缩放 | boolean | true / false | true |
| `amplify` | 是否显示放大按钮 | boolean | true / false | true |
| `reduce` | 是否显示缩小按钮 | boolean | true / false | true |
