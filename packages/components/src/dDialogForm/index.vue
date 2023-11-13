<!--
 * @Date: 2023-11-09 10:26:28
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-11-10 18:20:26
 * @FilePath: \dc-component\packages\components\src\dDialogForm\index.vue
-->

<template>
  <el-dialog
    v-model:modelValue="modelValue"
    v-bind="{ ...$attrs }"
    :title="title"
    @close="handleBeforeClose(ruleFormRef)"
  >
    <el-form ref="ruleFormRef" v-bind="{ ...formProp }" :model="formData">
      <template #default>
        <slot :form="formData" name="formData"></slot>
      </template>
    </el-form>

    <template v-if="showFooter" #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel(ruleFormRef)">{{
          cancelText
        }}</el-button>
        <slot name="submitter"></slot>
        <el-button type="primary" @click="handleConfirm(ruleFormRef)">
          {{ confirmText }}
        </el-button>
      </span>
    </template>
    <template #header>
      <slot name="header"> </slot>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref, watch, toRefs } from 'vue';
import { ElButton, ElForm, ElDialog } from 'element-plus';
import type { FormProp,DialogFormEmit } from '@/dDialogForm/dDialogForm';
import type { FormInstance } from 'element-plus';
defineOptions({
  name: 'DDialogForm',
});

const formData = ref<object>({});
const emits = defineEmits<DialogFormEmit>();

const ruleFormRef = ref<FormInstance>(null);
const props = withDefaults(
  defineProps<FormProp>(),
  {
    cancelText: '取消',
    confirmText: '确认',
    modelValue: false,
    rules: null,
    title: '新建表单',
    showFooter: true,
    form:{}
  },
);

const { modelValue, form } = toRefs(props);
watch(
  () => form,
  (newValue:any) => {
    if (newValue) {
      formData.value = newValue.value;
    } else {
      formData.value = {};
    }
  },
  { immediate: true, deep: true },
);

/**
 *
 * @param formEl 取消重置表单
 */

const handleCancel = (formEl: FormInstance | undefined) => {
  emits('update:modelValue', false);
  emits('handleCancel', formEl);
};
/**
 *
 * @param formEl 确认重置表单并返回表单内容
 */
const handleConfirm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      emits(
        'complete',
        formData,
        () => {
          emits('update:modelValue', false);
          formEl.resetFields();
        },
        formEl,
      );
    } else {
      console.log('error submit!', fields);
    }
  });
};
/**
 * 重置表单信息
 */
const resetFields = () => {
  ruleFormRef.value.resetFields();
};
/**
 *
 * @param formEl 弹窗关闭回调
 */
const handleBeforeClose = (formEl: FormInstance | undefined) => {
  emits('update:modelValue', false);
};
/**
 * 表单验证
 */
const validate = async () => {
  const state = await ruleFormRef.value.validate((valid) => {
   return valid
  });
  if (state) {
    return formData;
  } else {
    return false;
  }
};
defineExpose({
  resetFields,
  validate,
});
</script>

<style></style>
