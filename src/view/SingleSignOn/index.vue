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
  {{ token }}
</template>

<script setup lang="ts" name="SingleSignOn">
import axios from 'axios';
import { ref } from 'vue';
import { DSingleSignOn } from 'dc-pro-component';
const token = ref('token');

const service = axios.create({
  timeout: 2,
});

function handleResponseToken(res: string) {
  token.value = res;
}
</script>

<style lang="scss" scoped></style>
