<template>
  <div class="d-tag-container">
    <label class="d-tag-label">{{ tageTitle }}</label>
    <template v-for="tag in tagsList">
      <el-tag
        class="d-tag-body"
        v-if="tag.content"
        >{{ tag.title + ' : ' + tag.content }}</el-tag>
    </template>
  </div>
</template>

<script setup lang="ts" name="DTags">
import { ElTag } from 'element-plus';
defineOptions({
  name: 'DTags',
});
const props = withDefaults(
  defineProps<{
    tagsList: any[];
    tageTitle?: string;
  }>(),
  {
    tageTitle: '标签',
  },
);

</script>

<style scoped lang="scss">
.d-tag-container {
  display: flex;
  height: 36px;
  align-items: center;
  .d-tag-label {
    display: block;
    font-size: 14px;
    color: #409eff;
    margin: 2px 20px 2px 2px;
    &:hover {
      color: #a0cfff;
    }
  }
}
.d-tag-body{
  margin: 0 8px;
}
</style>
