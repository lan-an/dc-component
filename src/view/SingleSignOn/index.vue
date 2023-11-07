<template>
  <!-- 登录成功 -->
  <d-single-sign-on
    api="https://yesno.wtf/api"
    request-method="get"
    request-query="auth_code"
    request-token="force"
    request-payload="params"
    response-token="answer"
    @response-data-token="handleResponseToken"
  ></d-single-sign-on>
  {{ token }}

  <!-- 登录失败 -->
  <d-single-sign-on
    api="https://yesno.wtf/api"
    request-method="post"
    request-query="auth_code"
    request-token="force"
    request-payload="data"
    response-token="answer"
    @response-data-token="handleResponseToken"
  ></d-single-sign-on>
  <!-- 使用自定义AxiosInstance -->
  <d-single-sign-on
    api="https://localhost"
    request-method="post"
    request-query="auth_code"
    request-token="force"
    request-payload="data"
    response-token="answer"
    :axios-instance="service"
    @response-data-token="handleResponseToken"
  ></d-single-sign-on>

  <!-- 手动开始和手动处理请求 -->
  <d-single-sign-on
    ref="singleSignOnRef"
    api="https://yesno.wtf/api"
    request-method="get"
    request-payload="params"
    manual-start
    manual-handling
    @response-promise="handleResponsePromise"
  ></d-single-sign-on>

  <el-button @click="handleSingleSignOnStart">手动开始和手动处理请求</el-button>
  {{ promiseString }}
</template>

<script setup lang="ts" name="SingleSignOn">
import axios from 'axios';
import { ElButton } from 'element-plus';
import { ref } from 'vue';
import { DSingleSignOn } from 'dc-pro-component';
const token = ref('token');

const singleSignOnRef = ref<InstanceType<typeof DSingleSignOn> | null>();
const promiseString = ref('');

const service = axios.create({
  timeout: 2,
});

function handleResponseToken(res: string) {
  if (res) {
    token.value = res;
  }
}
function handleSingleSignOnStart() {
  singleSignOnRef.value.start();
}

function handleResponsePromise(response) {
  response.then((res) => {
    promiseString.value = String(JSON.stringify(res));
  });
}
</script>

<style lang="scss" scoped></style>
