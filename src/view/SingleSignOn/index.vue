<template>
  <d-single-sign-on
    api="http://dcqc-ubp-web-test.dcqc.com/api/ykzAuthCodeLogin"
    request-token="auth_code"
    request-payload="params"
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
