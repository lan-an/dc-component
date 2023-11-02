<template>
  <div>
    <div v-show="!props.hideMessage">
      <slot v-if="status === 'pending'" name="pending">
        <span>加载中……</span>
      </slot>
      <slot v-if="status === 'success'" name="success">
        <span>登录成功，已返回标识符</span>
      </slot>
      <slot v-if="status === 'failed'" name="failed">
        <span>登录失败，错误信息：{{ message }}</span>
      </slot>
    </div>
  </div>
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
const query = route.query;

const message = ref('');

type statusType = 'pending' | 'success' | 'failed';
const status = ref<statusType>('pending');

defineExpose({ message });

onMounted(() => {
  if (query[props.query]) {
    handleSingleSignOn();
  } else {
    status.value = 'failed';
    message.value = '缺少请求标识符';
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
    request = axios.request({ ...requestConfig, ...{ timeout: 10000 } });
  }
  emit('response-promise', request);
  status.value = 'pending';

  if (!props.axiosManualHandling) {
    request
      .then((res: any) => {
        if (res.data[props.responseToken]) {
          emit('response-data-token', res.data[props.responseToken]);
        } else if (res[props.responseToken]) {
          emit('response-data-token', res[props.responseToken]);
        } else {
          return Promise.reject('未返回标识符');
        }
        status.value = 'success';
      })
      .catch((error) => {
        status.value = 'failed';
        message.value = error;
      })
      .finally(() => {});
  }
}
</script>

<style lang="scss" scoped></style>
