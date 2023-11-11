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
