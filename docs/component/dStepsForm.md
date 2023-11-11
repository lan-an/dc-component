

# dStepsForm 分步表单

自带了一个进度条的分步表单，和管理进度条的相关 API.


## 基础用法


<d-steps-form-base></d-steps-form-base>
::: details 查看源码

```vue
<template>
  <div>
    <d-steps-form>
      <d-step-form
        title="Step 1"
        :model="model.form1"
        :stepProps="{ description: 'description' }"
        :rules="rules1"
      >
        <el-form-item label="Activity name" prop="name">
          <el-input v-model="model.form1.name" />
        </el-form-item>
      </d-step-form>

      <d-step-form title="Step 2" :model="model.form2" :rules="rules1">
        <el-form-item label="Activity2 name" prop="name">
          <el-input v-model="model.form2.name" />
        </el-form-item>
      </d-step-form>

      <d-step-form title="Step 3" :model="model.form3" :rules="rules1">
        <el-form-item label="Activity3 name" prop="name">
          <el-input v-model="model.form3.name" />
        </el-form-item>
      </d-step-form>
    </d-steps-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { ElInput, ElFormItem } from 'element-plus';
import { DStepsForm, DStepForm } from 'dc-pro-component';

const model = reactive({
  form1: {
    name: 'step1 name',
  },
  form2: {
    name: '',
  },
  form3: {
    name: '',
  },
});
const rules1 = {
  name: [{ required: true }],
};
</script>

```

:::

## 垂直布局

<d-steps-form-vertical></d-steps-form-vertical>
::: details 查看源码

```vue
<template>
  <div>
    <d-steps-form direction="vertical">
      <d-step-form
        title="Step 1"
        :model="model.form1"
        :stepProps="{ description: 'description' }"
        :rules="rules1"
      >
        <el-form-item label="Activity name" prop="name">
          <el-input v-model="model.form1.name" />
        </el-form-item>
      </d-step-form>

      <d-step-form title="Step 2" :model="model.form2" :rules="rules1">
        <el-form-item label="Activity2 name" prop="name">
          <el-input v-model="model.form2.name" />
        </el-form-item>
      </d-step-form>

      <d-step-form title="Step 3" :model="model.form3" :rules="rules1">
        <el-form-item label="Activity3 name" prop="name">
          <el-input v-model="model.form3.name" />
        </el-form-item>
      </d-step-form>
    </d-steps-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { ElInput, ElFormItem } from 'element-plus';
import { DStepsForm, DStepForm } from 'dc-pro-component';

const model = reactive({
  form1: {
    name: 'step1 name',
  },
  form2: {
    name: '',
  },
  form3: {
    name: '',
  },
});
const rules1 = {
  name: [{ required: true }],
};
</script>

```

:::

## 自定义分步表单按钮
<d-steps-form-custom-button></d-steps-form-custom-button>

::: details 查看源码

```vue
<template>
  <div>
    <d-steps-form
      ref="refForm"
      @finish="handleFinish"
      v-model:currentStep="currentStep"
    >
      <d-step-form
        title="Step 1"
        :model="model.form1"
        :stepProps="{ description: 'description' }"
        :rules="rules1"
      >
        <el-form-item label="Activity name" prop="name">
          <el-input v-model="model.form1.name" />
        </el-form-item>
      </d-step-form>

      <d-step-form title="Step 2" :model="model.form2" :rules="rules2">
        <el-form-item label="Activity2 name" prop="name">
          <el-input v-model="model.form2.name" />
        </el-form-item>
      </d-step-form>

      <d-step-form title="Step 3" :model="model.form3" :rules="rules1">
        <el-form-item label="Activity3 name" prop="name">
          <el-input v-model="model.form3.name" />
        </el-form-item>
      </d-step-form>

      <template #submitter>
        <div>
          <el-button
            v-show="currentStep > 0"
            @click="() => refForm?.prevStep()"
            type="info"
            >prev</el-button
          >
          <el-button type="danger" @click="() => refForm?.nextStep()"
            >next</el-button
          >
        </div>
      </template>
    </d-steps-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { ElInput, ElFormItem, ElButton } from 'element-plus';
import { DStepsForm, DStepForm } from 'dc-pro-component';

const model = reactive({
  form1: {
    name: 'Step1 name',
  },
  form2: {
    name: '',
  },
  form3: {
    name: '',
  },
});
const rules1 = {
  name: [{ required: true }],
};

const rules2 = {
  name: [{ required: true, message: 'error' }],
};

const refForm = ref<null | InstanceType<typeof DStepsForm>>(null);

async function handleFinish(values: any, done) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(values);
      done();
    }, 3 * 1000);
  });
}

const currentStep = ref(0);
</script>

```

:::

## StepsForm API
### StepsForm 属性

| 参数         | 说明                                     | 类型   | 可选值                  | 默认值     |
| ------------ | ---------------------------------------- | ------ | ----------------------- | ---------- |
| direction    | 布局方向                                 | enum   | 'horizontal' 'vertical' | horizontal |
| prevBtnProps | 分步表单按钮属性, `el-button` Attributes | object |                         | -          |
| nextBtnProps | 分步表单按钮属性, `el-button` Attributes | object |                         | -          |
| currentStep  | 设置当前激活步骤                         | number |                         | -          |

### StepsForm 事件

| 事件名     | 说明 ｜ 回调参数     |
| ---------- | -------------------- | ------------------- |
| stepFinish | 步骤提交成功触发     | currentStep, values |
| finish     | 最后一步提交成功触发 | values, callback    |

### StepsForm 方法

| 方法名   | 说明         | 参数 |
| -------- | ------------ | ---- |
| prevStep | 跳转至上一步 | -    |
| nextStep | 跳转至下一步 | -    |

### StepsForm 插槽

| 插槽名  | 说明     | 子标签   |
| ------- | -------- | -------- |
| default | 默认插槽 | StepForm |


## StepForm API
### StepForm 属性

| 参数      | 说明                             | 类型   | 可选值 | 默认值 |
| --------- | -------------------------------- | ------ | ------ | ------ |
| title     | 步骤标题                         | string |        | ''     |
| stepProps | 步骤条属性, `el-step` Attributes | object |        | -      |
| ...       | 其他属性参考`el-form` Attributes | object |        |        |

### StepForm 方法

| 方法名 | 说明          | 参数 |
| ------ | ------------- | ---- |
| ...    | 参考`el-form` | -    |

### StepForm 插槽
| 插槽名  | 说明     | 子标签   |
| ------- | -------- | -------- |
| default | 默认插槽 | FormItem |


## 贡献者
