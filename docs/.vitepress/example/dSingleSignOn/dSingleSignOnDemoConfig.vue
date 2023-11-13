<template>
  <div style="border: 1px solid black; padding: 5px; overflow: scroll">
    <d-single-sign-on
      ref="singleSignOnRef"
      :request-axios-config="customAxiosRequestConfig"
      manual-start
      manual-handle
    ></d-single-sign-on>

    <el-button @click="handleSingleSignOnStart">开始自定义请求</el-button>
    <div>响应：{{ token }}</div>
  </div>
</template>

<script setup lang="ts" name="SingleSignOn">
import { DSingleSignOn } from 'dc-pro-component';

import { ref } from 'vue';
import { AxiosRequestConfig } from 'axios';
import { ElButton } from 'element-plus';

const singleSignOnRef = ref<InstanceType<typeof DSingleSignOn> | null>();
const token = ref('');

// 自定义Axios请求配置
const customAxiosRequestConfig: AxiosRequestConfig = {
  url: 'https://yesno.wtf/api',
  method: 'get',
  params: {
    force: 'maybe',
  },
  timeout: 30000,
};

// 使用start的响应进行处理
function handleSingleSignOnStart() {
  singleSignOnRef.value
    .start()
    .then((response) => {
      token.value = response.data?.answer;
    })
    .catch((error) => {
      token.value = String(JSON.stringify(error));
    });
}
</script>

<style lang="scss" scoped></style>
