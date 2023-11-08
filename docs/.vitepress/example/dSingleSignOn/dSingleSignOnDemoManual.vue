<template>
  <div style="border: 1px solid black; padding: 5px; overflow: scroll">
    <d-single-sign-on
      ref="singleSignOnRef"
      api="https://yesno.wtf/api"
      request-method="get"
      request-payload="params"
      manual-start
      manual-handle
      @response-promise="handleResponsePromise"
    ></d-single-sign-on>

    <el-button @click="handleSingleSignOnStart"
      >手动开始和手动处理请求</el-button
    >
    <div>响应：{{ responseString }}</div>
  </div>
</template>

<script setup lang="ts" name="SingleSignOn">
import { ref } from 'vue';
import { DSingleSignOn } from 'dc-pro-component';
import { ElButton } from 'element-plus';

const singleSignOnRef = ref<InstanceType<typeof DSingleSignOn> | null>();
const responseString = ref('');

function handleSingleSignOnStart() {
  singleSignOnRef.value.start();
}

function handleResponsePromise(response) {
  response
    .then((res) => {
      responseString.value = String(JSON.stringify(res));
    })
    .catch((error) => {
      responseString.value = String(JSON.stringify(error));
    });
}
</script>

<style lang="scss" scoped></style>
