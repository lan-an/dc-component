<template>
  <!-- 登录成功 -->
  <div style="border: 1px solid black; padding: 5px">
    <d-single-sign-on
      api="https://yesno.wtf/api"
      request-method="get"
      request-query="auth_code"
      request-token="force"
      request-payload="params"
      response-token="answer"
      @response-data-token="handleResponseToken"
    ></d-single-sign-on>
    <span v-if="token">获取的标识符是：{{ token }}</span>
  </div>
</template>

<script setup lang="ts" name="SingleSignOn">
import { ref } from 'vue';
import { DSingleSignOn } from 'dc-pro-component';
const token = ref('');

function handleResponseToken(res: string) {
  if (res) {
    token.value = res;
  }
}
</script>

<style lang="scss" scoped></style>
