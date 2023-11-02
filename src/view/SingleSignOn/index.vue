<template>
  <d-single-sign-on
    api="http://dcqc-ubp-web-test.dcqc.com/api/ykzAuthCodeLogin"
    request-token="auth_code"
    request-payload="params"
    response-token="code"
    @response-data-token="handleResponseToken"
  ></d-single-sign-on>
  <d-single-sign-on
    api="https://yesno.wtf/api"
    request-method="get"
    request-query="auth_code"
    request-token="force"
    request-payload="params"
    response-token="answer"
    @response-data-token="handleResponseToken"
  ></d-single-sign-on>
  <d-single-sign-on
    api="https://yesno.wtf/api"
    request-method="post"
    request-query="auth_code"
    request-token="force"
    request-payload="data"
    response-token="answer"
    @response-data-token="handleResponseToken"
  ></d-single-sign-on>
  {{ token }}
</template>

<script setup lang="ts" name="SingleSignOn">
import { ref } from 'vue';
import { DSingleSignOn } from 'dc-pro-component';
const token = ref('token');

function handleResponseToken(res) {
  token.value = res;
}
</script>

<style lang="scss" scoped></style>
