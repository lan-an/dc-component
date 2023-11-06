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
</template>

<script setup lang="ts" name="SingleSignOn">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { DSingleSignOn } from 'dc-pro-component';

import { useRoute } from 'vue-router';
const token = ref('token');

const service = axios.create({
  timeout: 2,
});

function handleResponseToken(res: string) {
  token.value = res;
}

onMounted(() => {
  console.log(useRoute());
})
</script>

<style lang="scss" scoped></style>
