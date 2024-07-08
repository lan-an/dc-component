<!--
 * @Date: 2023-11-15 15:45:38
 * @Author: liu-hongrui
 * @LastEditors: liu-hongrui
 * @LastEditTime: 2023-11-21 15:58:18
 * @FilePath: \dc-component\packages\components\src\dTags\index.vue
-->
<template>
  <div class="d-tag-container">
    <label class="d-tag-label">{{ tageTitle }} :</label>
    <template v-for="tag in tagsList">
      <el-tag
        class="d-tag-body"
        v-if="tag.content"
        :closable="closable"
        @close="handleClose(tag)"
        >{{ tag.title + ' : ' + tag.content }}</el-tag>
    </template>
  </div>
</template>

<script setup lang="ts" name="DTags">
import { ref } from 'vue'
import $bus from '../../../utils/eventBus'
import type {CheckObj} from '../dCheckFilter/index.vue'
import { ElTag } from 'element-plus';
defineOptions({
  name: 'DTags',
});
const props = withDefaults(
  defineProps<{
    tagsList: any[];
    tageTitle?: string;
    closable?: boolean;
  }>(),
  {
    tageTitle: '标签',
    closable: false,
  },
);

const handleClose = (tag) => {
  $bus.emit('closeTags',tag)
}
</script>

<style scoped lang="scss">
.d-tag-container {
  display: flex;
  height: 36px;
  align-items: center;
  .d-tag-label {
    min-width: 80px;
    display: block;
    font-size: 14px;
    font-weight: 700;
    color: #3c3c43;
  }
}
.d-tag-body{
  margin-right: 8px;
  cursor: pointer;
}
</style>
