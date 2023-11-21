<!--
 * @Date: 2023-11-15 14:35:14
 * @Author: liu-hongrui
 * @LastEditors: liu-hongrui
 * @LastEditTime: 2023-11-21 15:46:39
 * @FilePath: \dc-component\packages\components\src\dCheckFilter\index.vue
-->
<template>
  <div class="d-checkBox-container">
    <div class="d-check-header">
      <span
        class="d-check-title"
        :class="border ? 'd-border' : ''"
        :style="{ width: labelWidht + 'px' }"
        >{{ title }} :</span
      >
    </div>
    <div class="d-check-body">
      <el-button
        class="d-check-all-btn"
        :link="border ? false : true"
        type="primary"
        @click="checkAll"
        >全部</el-button
      >
      <el-checkbox-group v-model="checkListData" @change="checkChange">
        <el-checkbox
          :border="border ? true : false"
          :label="item"
          v-for="(item, index) in checkList"
          :key="index"
          >{{ item.label }}</el-checkbox
        >
      </el-checkbox-group>
    </div>
  </div>
</template>

<script setup lang="ts" name="DCheckFilter">
import { onMounted, ref } from 'vue';
import $bus from '../../../utils/eventBus'
import { ElButton, ElCheckboxGroup, ElCheckbox } from 'element-plus';
sessionStorage.setItem('tagsList', JSON.stringify([]));
defineOptions({
  name: 'DCheckFilter',
});
type Check = {
  label: string;
  value: string | number;
};
export type CheckObj = {
  labels: any[];
  values: any[];
  title: string;
  content: string;
};
const props = withDefaults(
  defineProps<{
    checkList: any[];
    title: string;
    border?: boolean;
    labelWidht?: number;
  }>(),
  {
    border: false,
    labelWidht: 80,
  },
);
const emits = defineEmits(['sendCheck']);
const checkListData = ref([]);
const checkChange = (check: any[]) => {
  let labels = [];
  let values = [];
  labels = check.map((item) => {
    return item.label;
  });
  values = check.map((item) => {
    return item.value;
  });
  const tagsList = sessionData({
    labels,
    values,
    title: props.title,
    content: labels.join('/'),
  });
  emits(
    'sendCheck',
    { labels, values, title: props.title, content: labels.join('/') },
    tagsList,
  );
};

const checkAll = () => {
  let labels = [];
  let values = [];
  if (checkListData.value.length !== props.checkList.length) {
    labels = props.checkList.map((item: Check) => {
      return item.label;
    });
    values = props.checkList.map((item: Check) => {
      return item.value;
    });
    checkListData.value = props.checkList;
    const tagsList = sessionData({
      labels,
      values,
      title: props.title,
      content: labels.join('/'),
    });
    emits(
      'sendCheck',
      { labels, values, title: props.title, content: labels.join('/') },
      tagsList,
    );
  } else {
    checkListData.value = [];
    const tagsList = sessionData({
      labels: [],
      values: [],
      title: props.title,
      content: labels.join('/'),
    });
    emits(
      'sendCheck',
      { labels: [], values: [], title: props.title, content: labels.join('/') },
      tagsList,
    );
  }
};

const sessionData = (obj: CheckObj) => {
  const tagsList: any[] = JSON.parse(sessionStorage.getItem('tagsList'));
  const result = tagsList.find((item) => item.title == obj.title);
  if (!result) {
    tagsList.push(obj);
  } else {
    const index = tagsList.findIndex((item) => item.title == obj.title);
    if (obj.labels.length == 0 || obj.values.length == 0) {
      tagsList.splice(index, 1);
    } else {
      tagsList.splice(index, 1, obj);
    }
  }
  sessionStorage.setItem('tagsList', JSON.stringify(tagsList));
  return tagsList;
};

const changeUpdata = (title) => {
  if(title === props.title){
    let labels = [];
    let values = [];
    checkListData.value = [];
    const tagsList = sessionData({
      labels: [],
      values: [],
      title: props.title,
      content: labels.join('/'),
    });
    emits(
      'sendCheck',
      { labels: [], values: [], title: props.title, content: labels.join('/') },
      tagsList,
    );
  }
}
onMounted(() => {
  $bus.on('closeTags',(tag) => {
    const {title} = tag
    changeUpdata(title)
  })
})
</script>

<style scoped lang="scss">
.d-checkBox-container {
  display: flex;
  padding: 5px 0;
  .d-check-header,
  .d-check-body {
    display: flex;
  }
  .d-check-title {
    font-size: 14px;
    font-weight: 700;
    height: 36px;
    line-height: 36px;
  }
  .d-border {
    font-size: 14px;
    color: #fff;
    background-color: #409eff;
    border-radius: 4px;
    padding: 0 15px;
  }
  .d-check-all-btn {
    margin-right: 20px;
    height: 36px;
  }
}
</style>
