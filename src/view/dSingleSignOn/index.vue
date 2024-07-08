<template>
  <!-- 登录成功 -->
  <d-single-sign-on
    api="https://yesno.wtf/api"
    query="auth_code"
    request-method="get"
    request-payload="params"
    response-token="answer"
    @response-data-token="handleResponseToken"
  ></d-single-sign-on>
  <hr />
  <!-- 登录成功 -->
  <d-single-sign-on
    api="https://yesno.wtf/api"
    query="auth_code"
    request-method="get"
    request-token="force"
    request-payload="params"
    response-token="answer"
    @response-data-token="handleResponseToken"
  ></d-single-sign-on>
  <span>标识符：{{ token }}</span>
  <hr />
  <!-- 登录失败 -->
  <d-single-sign-on
    api="https://yesno.wtf/api"
    query="auth_code"
    request-method="post"
    @response-data-token="handleResponseToken"
  ></d-single-sign-on>
  <hr />
  <!-- 使用自定义AxiosInstance -->
  <d-single-sign-on
    api="https://localhost"
    query="auth_code"
    :axios-instance="service"
    @response-data-token="handleResponseToken"
  ></d-single-sign-on>
  <hr />
  <!-- 手动开始和手动处理请求 -->
  <d-single-sign-on
    ref="singleSignOnRef"
    query="auth_code"
    api="https://yesno.wtf/api"
    request-method="get"
    request-payload="params"
    manual-start
    manual-handle
    @response-promise="handleResponsePromise"
  ></d-single-sign-on>

  <el-button @click="handleSingleSignOnStart">手动开始和手动处理请求</el-button>
  <span>响应：{{ promiseString }}</span>
  <hr />
  <!-- 手动创建axios配置 -->
  <d-single-sign-on
    :request-axios-config="customAxiosRequestConfig"
    response-token="answer"
  ></d-single-sign-on>
  <hr />
  <!-- 多个参数 -->
  <d-single-sign-on
    api="https://yesno.wtf/api"
    :query="['auth_code', 'force']"
    request-method="get"
    request-payload="params"
    response-token="answer"
    @response-data-token="handleResponseToken"
  ></d-single-sign-on>
  <d-single-sign-on
    api="https://yesno.wtf/api"
    :query="['auth_code', 'force']"
    :request-token="['abc', 'force']"
    request-method="get"
    request-payload="params"
    response-token="answer"
    @response-data-token="handleResponseToken"
  ></d-single-sign-on>
  <hr />
</template>

<script setup lang="ts" name="SingleSignOn">
import axios, { AxiosRequestConfig } from 'axios';
import { ElButton } from 'element-plus';
import { ref } from 'vue';
import { DSingleSignOn } from 'dc-pro-component';

const token = ref('');

const singleSignOnRef = ref<InstanceType<typeof DSingleSignOn> | null>();
const promiseString = ref('');
const customAxiosRequestConfig: AxiosRequestConfig = {
  url: 'https://yesno.wtf/api',
  method: 'get',
  params: {
    force: 'maybe',
  },
  timeout: 30000,
};

const service = axios.create({
  timeout: 1,
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
  response
    .then((res) => {
      promiseString.value = String(JSON.stringify(res));
    })
    .catch((error) => {
      promiseString.value = String(JSON.stringify(error));
    });
}
</script>

<style lang="scss" scoped></style>
