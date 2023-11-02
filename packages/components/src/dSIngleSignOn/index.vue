<template>
  <div>{{ message }}</div>
</template>

<script setup lang="ts" name="DSingleSignOn">
import { onMounted, ref, withDefaults } from 'vue';
import { useRoute } from 'vue-router';

import {
  singleSignOnPropsInterface,
  singleSignOnPropsDefaults,
  singleSignOnEmitsType,
} from './singleSignOn';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const props = withDefaults(
  defineProps<singleSignOnPropsInterface>(),
  singleSignOnPropsDefaults,
);
const emit = defineEmits<singleSignOnEmitsType>();

const route = useRoute();

const message = ref('加载中……');

const query = route.query;

defineExpose({ message });

onMounted(() => {
  if (query[props.query]) {
    handleSingleSignOn();
  } else {
    message.value = '加载失败，错误信息：缺少请求标识符';
  }
});

function handleSingleSignOn() {
  const requestToken: Record<string, string> = {};
  requestToken[props.requestToken] = String(query[props.query]);

  const requestConfig: AxiosRequestConfig = {
    url: props.api,
    method: props.requestMethod,
  };
  requestConfig[props.requestPayload] = requestToken;

  let request: Promise<AxiosResponse<any, any>>;
  if (props.axiosInstance) {
    request = props.axiosInstance.request(requestConfig);
  } else {
    request = axios.request(requestConfig);
  }
  emit('response-promise', request);
  request
    .then((res: any) => {
      if (res.data[props.responseToken]) {
        emit('response-data-token', res.data[props.responseToken]);
      } else if (res[props.responseToken]) {
        emit('response-data-token', res[props.responseToken]);
      } else {
        return Promise.reject('未返回标识符');
      }
      message.value = '登录成功，已返回标识符';
    })
    .catch((error) => {
      message.value = '加载失败，错误信息：' + error;
    })
    .finally(() => {});
}
</script>

<style lang="scss" scoped></style>
