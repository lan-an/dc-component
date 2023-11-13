<template>
  <div>
    <d-steps-form direction="vertical" ref="refForm">
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
    name: 'init',
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

const refForm = ref<InstanceType<typeof DStepsForm>>(null);
</script>
