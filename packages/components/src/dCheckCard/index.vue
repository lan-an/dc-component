<template>
  <label
    class="d-card-container"
    :class="checkbox ? 'show-after' : ''"
    :style="style"
  >
    <div class="d-card-body">
      <div class="d-card-header">{{ title }}</div>
      <div class="d-card-content">{{ content }}</div>
    </div>
    <input
      class="d-card-checkbox"
      type="checkbox"
      :checked="checkbox"
      @change="changeChecked"
    />
  </label>
</template>

<script setup lang="ts" name="DCheckCard">
import { ref } from 'vue';
defineOptions({
  name: 'DCheckCard',
});
type Props = {
  checked: boolean;
  style?: object;
  content?: string;
  title?: string;
  gap?: number;
};

const emits = defineEmits(['changeCheck']);
const props = withDefaults(defineProps<Props>(), {
  style: {
    width: '300px',
    minHeight: '120px'
  },
  title: '卡片标题',
  content: '卡片内容......',
  gap: 2
});

const cardRef = ref(null);
const checkbox = ref(props.checked);
const clamp = ref(props.gap)
const changeChecked = () => {
  checkbox.value = !checkbox.value;
  emits('changeCheck', {
    title: props.title,
    checked: checkbox.value,
    content: props.content,
  });
};

</script>

<style scoped lang="scss">
.d-card-container {
  display: flex;
  padding-inline: 12px;
  padding-block: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-sizing: border-box;
  position: relative;
  :hover {
    border-color: #1677ff;
  }
  ::after {
    content: '';
    position: absolute;
    inset-block-start: 2px;
    inset-inline-end: 2px;
    width: 0;
    height: 0;
    display: none;
  }
}
.d-card-container.show-after {
  border: 1px solid #1677ff;
  background-color: #d2e5ff;
  ::after {
    display: block;
    border: 10px solid #1677ff;
    background-color: #d2e5ff;
    border-color: #1677ff;
    border-block-end: 10px solid transparent;
    border-inline-start: 10px solid transparent;
    border-start-end-radius: 6px;
  }
}
.d-card-body {
  width: 100%;
  height: 100%;
}
.d-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-end: 4px;
  color: #333;
  font-weight: 500;
  font-size: 16px;
  line-height: 2;
}
.d-card-content {
  color: #666;
  font-weight: 400;
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: v-bind(clamp); /* 默认显示2行 */
  overflow: hidden;
}
.d-card-checkbox {
  display: none;
}
</style>