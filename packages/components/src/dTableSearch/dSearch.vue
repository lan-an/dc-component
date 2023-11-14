<!--
 * @Date: 2023-11-14 16:19:52
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-11-14 18:07:00
 * @FilePath: \dc-component\packages\components\src\dTableSearch\dSearch.vue
-->
<template>
  <el-form
    v-bind="{ ...searchFormProps }"
    ref="ruleFormRef"
    :model="searchForm"
  >
    <el-space :style="[showFalg ? { 'margin-bottom': '20.0px' } : '']" wrap>
      <template  v-for="item in searchFormItem" :key="item.prop">

        <el-form-item
          :prop="item.prop??item.key"
          :label="item.label"
          :label-width="item.labelWidth"
        >

        <component
            :is="COMPONENT_ENUM[item.valueType] "
            v-model.trim="searchForm[item.prop||item.key]"
            :placeholder="item?.placeholder"
            v-bind="{...item?.fieldProps}"
          >
          <template v-if="item.valueType==='ElSelect'">
            <component
            :is="ElOption"
            v-for="col in item.fieldProps.option"
            :key="col.value"
            :label="col.label"
            :value="col.value"
          />
          </template>
          <slot v-else></slot>
        </component>
        </el-form-item>
      
      </template>
     
      <div
        :class="[
          'card-header-content',
          showFalg ? 'search-absolute' : 'search-relative',
        ]"
      >
        <el-form-item>
          <el-button :loading="loading" type="primary" @click="handleSearch"
            >查询</el-button
          >
          <el-button @click="handleReset(ruleFormRef)">重置</el-button>
          <el-button color="#468fff" v-if="more" @click="handleMore" plain text>
            {{ showFalg ? '展开' : '收起' }}

            <el-icon class="el-icon--right">
              <component :is="!showFalg ? ArrowUp : ArrowDown" />
            </el-icon>
          </el-button>
        </el-form-item>
      </div>
    </el-space>
  </el-form>
</template>
<script setup lang="ts">
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue';
import {
  ElSpace,
  ElButton,
  ElForm,
  ElIcon,
  ElInput,
  ElFormItem,
  ElSelect,
  ElOption,
  ElDatePicker
} from 'element-plus';
import { ref, toRefs, watch } from 'vue';
import type { FormInstance } from 'element-plus';
const COMPONENT_ENUM={
  'ElSelect':ElSelect,
  'ElInput':ElInput,
  'ElDatePicker':ElDatePicker
}
const showFalg = ref(false);

type SearchType={
  initParam?:any;
  more?:boolean;
  searchFormProps?:object;
  loading?:boolean;
  searchFormItem?:any[]


}
const ruleFormRef = ref<FormInstance>();
const emit = defineEmits(['handleSearch', 'handleReset']);
const prop = defineProps<SearchType>();
const { loading, more, initParam, searchFormItem } = toRefs(prop);
const _param = {};
searchFormItem.value.forEach((item: Record<string, any>) => {
  _param[item.prop??item?.key] = item.defaultValue ?? '';
});
const getParam = () => {
  return searchForm.value;
};

const searchForm = ref(Object.assign(_param, initParam.value));
watch(
  () => searchForm,
  (val) => {
    console.log(val);
  },
);
const handleMore = () => {};
const handleReset = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
  emit('handleReset');
};
const handleSearch = () => {
  emit('handleSearch', searchForm.value);
};
defineExpose({
  getParam,
});
</script>
