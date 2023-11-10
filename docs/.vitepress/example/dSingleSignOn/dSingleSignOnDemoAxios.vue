<template>
  <div style="border: 1px solid black; padding: 5px; overflow: scroll">
    <d-single-sign-on
      ref="singleSignOnRef"
      api="/api"
      :axios-instance="service"
      request-method="get"
      request-payload="params"
      response-token="answer"
      manual-start
      @response-data-token="handleResponseToken"
    ></d-single-sign-on>

    <el-button @click="handleSingleSignOnStart">开始自定义Axios请求</el-button>
    <div>响应：{{ token }}</div>
  </div>
</template>

<script setup lang="ts" name="SingleSignOn">
import { DSingleSignOn } from 'dc-pro-component';

import { ref } from 'vue';
import axios from 'axios';
import { ElButton } from 'element-plus';

const singleSignOnRef = ref<InstanceType<typeof DSingleSignOn> | null>();
const token = ref('');

// 自定义Axios实例
const service = axios.create({
  baseURL: '/yesno-wtf',
  timeout: 30000,
});

// 自定义Axios请求拦截器
service.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] =
      'Authorization-Token ' + new Date().valueOf();
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// 自定义Axios响应拦截器
service.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data ?? response);
  },
  (error) => {
    return Promise.reject(error);
  },
);

function handleResponseToken(res: string) {
  if (res) {
    token.value = res;
  }
}

function handleSingleSignOnStart() {
  singleSignOnRef.value.start();
}
</script>

<style lang="scss" scoped></style>
