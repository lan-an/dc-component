<!--
 * @Date: 2023-10-18 13:01:07
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-11-10 10:01:29
 * @FilePath: \dc-component\docs\component\dDialogForm.md
-->

# dDialogForm 弹窗组件

弹窗组件组件便捷式开发

## 基础用法

新建表单定义表单的绑定`form={}`如果表单需要回显`form={key:value}`

::: tip
在组件底部显示可以通过`showFooter`参数来使用`form`表单底部信息通过`el-form-item`来实现，`dialog`底部信息可以通过插槽的方式
:::

  <dDialogForm class="vp-raw"></dDialogForm>



::: details 查看源码

```vue


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
      <template #submitter>
        <el-button @click="handleClick2(ruleFormRef)"> 重置 </el-button>
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

  
```

:::

## 表单重置

可以通过`ref`调用组件内部`resetFields`实现表单列表重置

::: tip
在组件complete方法调用之后组件默认调用`resetFields`重置表单信息，`complete`回调函数中返回表单信息
:::

<dDialogFormRset class="vp-raw"></dDialogFormRset>

::: details 查看源码

```vue


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

  
```

:::
## Attributes

| 参数          | 说明 | 类型   | 可选值                                           | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------ | ------- |
| showFooter | 是否展示底部 | boolean | true| true |

