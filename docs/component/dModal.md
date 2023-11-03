<!--
 * @Date: 2023-11-03 09:44:04
 * @Author: liu-hongrui
 * @LastEditors: liu-hongrui
 * @LastEditTime: 2023-11-03 15:17:30
 * @FilePath: \dc-component\docs\component\dModal.md
-->

# Modal 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

Modal 弹出一个对话框，适合需要定制性更大的场景。
<script setup lang="ts">
	import {DModal} from 'dc-pro-component';
	import {ElButton} from 'element-plus';
	import { ref } from 'vue';
	const visibleModal = ref<boolean>(false)
</script>
<dcqc-space >
  <DModal
    :visible="visibleModal"
    :title="'标题'"
    width="30%"
    @close="visibleModal = false"
  >
		<span>这是一条信息</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="visibleModal = false">取消</el-button>
        <el-button type="primary" @click="visibleModal = false">确认</el-button>
      </span>
    </template>
  </DModal>
  <el-button type="primary" @click="visibleModal = true">打开对话框</el-button>
</dcqc-space>

::: details Show Code

```vue
<template>
  <DModal
    :visible="visibleModal"
    :title="'标题'"
    width="30%"
    @close="visibleModal = false"
  >
    <span>这是一条信息</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="visibleModal = false">取消</el-button>
        <el-button type="primary" @click="visibleModal = false">确认</el-button>
      </span>
    </template>
  </DModal>
  <el-button type="primary" @click="visibleModal = true">打开对话框</el-button>
</template>
<script setup lang="ts" name="1">
	import {DModal} from 'dc-pro-component';
	import { ref } from 'vue';
	const visibleModal = ref<boolean>(false)
</script>

```

:::

## Attributes

| 参数 | 说明 | 类型   | 可选值  | 默认值  |
| ---- | ---- | ------ | ------ | ------- |
| visible | 是否显示 | boolean | true / false | false |
| title | 标题 | string | - | '提示' |
| fullscreen | 是否全屏 | boolean | true / false | false |
| width | 宽度,默认值为 50% | string / number | - | 30% |
| top |  margin-top | string | - | 15vh |
| draggable |  是否可拖拽 | boolean | true / false | false |
| center |  居中排列 | boolean | true / false | false |
| alignCenter |  水平垂直对齐 | boolean | true / false | false |
| destroyOnClose |  关闭时销毁 | boolean | true / false | true |
| opendelay |  打开延时，单位毫秒 | number | - | 0 |
| closedelay |  关闭延时，单位毫秒 | number | - | 0 |
| closeonclickmodal |  点击 modal 关闭 | boolean | true / false | false |
| closeonpressescape |  按下 ESC 关闭 | boolean | true / false | false |
| beforeClose |  关闭前的回调 | Function | - | - |

## Slots
| 插槽名 | 说明 |
| ---- | ----- |
| - | Modal 自定义的内容 |
| header | 对话框标题的内容 会替换标题部分，但不会移除关闭按钮 |
| footer | Modal 按钮操作区的内容 |


## Events
| 事件名 | 说明 | Type   |
| ---- | ---- | ------ |
| open | Modal 打开的回调 | Function   |
| close | Modal 关闭的回调 | Function   |
