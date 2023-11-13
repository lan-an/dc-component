<!--
 * @Date: 2023-10-17 17:35:40
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-11-10 09:51:54
 * @FilePath: \dc-component\docs\.vitepress\example\dDialogForm\dDialogForm.vue
-->

<template>
  <div>
    <d-dialog-form
      :formProp="{
        labelWidth: '120.0px',
        model: 'formLabelAlign',
        style: 'max-width: 460px',
        rules: rules,
      }"
      :form="form"
      v-model:modelValue="show"
      @complete="handleConfirm"
      @handleCancel="handleCancel"
      width="40%"
      ref="ruleFormRef"
    >
      <template #formData="{ form }">
        <el-form-item prop="name" label="名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item prop="flag" label="状态">
          <el-input v-model="form.flag" />
        </el-form-item>

        <el-form-item label="Activity zone" prop="region">
          <el-select v-model="form.region" placeholder="Activity zone">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="Activity count" prop="count">
          <el-select-v2
            v-model="form.count"
            placeholder="Activity count"
            :options="options"
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            确认</el-button
          >
        </el-form-item>
      </template>
    </d-dialog-form>
    <el-button @click="handleClick"> 新建表单 </el-button>
    <el-button @click="handleClick1"> 表单回显</el-button>
  </div>
</template>

<script lang="ts" setup>
import { DDialogForm } from 'dc-pro-component';

import {
  ElButton,
  ElInput,
  ElFormItem,
  ElSelect,
  ElSelectV2,
  ElOption,
} from 'element-plus';
import { ref, reactive } from 'vue';
const show = ref<boolean>(false);
let form = reactive<any>({});
const handleClick = () => {
  show.value = true;
  form = {};
};
const ruleFormRef = ref();
const handleConfirm = (data, callBack) => {
  console.log(data);
  callBack();
};
const handleClick1 = () => {
  show.value = true;
  form = { name: 'name', flag: 'flag' };
};

const handleClick2 = (Ele) => {
  Ele.resetFields?.();
};

const submitForm = async (Ele) => {
  const arg = await Ele.validate();
  console.log(arg);
};

const handleCancel = (Ele) => {
  console.log(Ele);
};
const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}));
const rules = reactive({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  flag: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'blur',
    },
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ],
});
</script>
