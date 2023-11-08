<template>
  <el-form
    label-position="right"
    label-width="100px"
    :model="formState"
    style="max-width: 460px"
  >
    <el-form-item label="Cron值：">
      <d-input-cron 
        v-model:value="formState.cron" 
        @cronChange="change" 
        :config="{
          maxHeight: '345px',
          startYear: 2023
        }"
      />
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
  import { ElForm,ElFormItem  } from 'element-plus'
  import { reactive } from 'vue';
  const formState = reactive<{cron: string}>({
      // 初始值
      cron: '0,1 4-3 * * * ? *'
  })
  // 值改变
  const change = val => {
    console.log('cron change: ',formState.cron);
  }
</script>
