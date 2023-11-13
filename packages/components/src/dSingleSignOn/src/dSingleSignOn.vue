<template>
  <div>
    <div v-show="!props.hideMessage && !props.manualHandle">
      <slot v-if="status === 'not-start'" name="not-start">
        <span>等待加载</span>
      </slot>
      <slot v-if="status === 'pending'" name="pending">
        <span>加载中……</span>
      </slot>
      <slot v-if="status === 'success'" name="success">
        <span>登录成功，已返回标识符</span>
      </slot>
      <slot v-if="status === 'failed'" name="failed">
        <span>登录失败，错误信息：<br />{{ message }}</span>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts" name="DSingleSignOn">
import { onMounted, ref } from 'vue';
import { LocationQuery, useRoute } from 'vue-router';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { singleSignOnPropsDefaults } from './dSingleSignOnPropsDefault.js';

import type {
  singleSignOnPropsInterface,
  singleSignOnEmitsType,
  statusTypes,
} from '@/dSingleSignOn/src/dSingleSignOn';

const props = withDefaults(
  defineProps<singleSignOnPropsInterface>(),
  singleSignOnPropsDefaults,
);
const emit = defineEmits<singleSignOnEmitsType>();

const route = useRoute();

/** @description 消息 */
const message = ref('');

/** @description 请求状态 */
const status = ref<(typeof statusTypes)[number]>('not-start');

onMounted(() => {
  status.value = 'not-start';
  if (!props.manualStart) {
    handleSingleSignOn();
  }
});

/** @description 开始单点登录请求 */
function start() {
  return handleSingleSignOn();
}

function handleSingleSignOn() {
  status.value = 'pending';

  const query = route.query;
  if (query[props.query] || props.requestAxiosConfig) {
    return handleSingleSignOnProcess(query);
  } else {
    status.value = 'failed';
    message.value = '缺少请求标识符';
    emit('response-promise', Promise.reject('query-token-not-found'));
    return Promise.reject('query-token-not-found');
  }
}

function handleSingleSignOnProcess(query: LocationQuery) {
  status.value = 'pending';

  const requestConfig: AxiosRequestConfig = props.requestAxiosConfig ?? {
    url: props.api,
    method: props.requestMethod,
  };

  if (!props.requestAxiosConfig) {
    const requestToken: Record<string, string> = {};
    requestToken[props.requestToken] = String(query[props.query]);
    requestConfig[props.requestPayload] = requestToken;
  }

  const request = props.axiosInstance
    ? props.axiosInstance.request(requestConfig)
    : axios.request({ ...{ timeout: 10000 }, ...requestConfig });

  if (!props.manualHandle) {
    return request
      .then(
        (
          res:
            | AxiosResponse<Record<string, string>, Record<string, string>>
            | Record<string, string>,
        ) => {
          if (res?.data?.[props.responseToken]) {
            emit('response-data-token', res.data[props.responseToken]);
          } else if (res?.[props.responseToken]) {
            emit('response-data-token', res[props.responseToken] as string);
          } else {
            return Promise.reject('未返回标识符');
          }
          status.value = 'success';
        },
      )
      .catch((error) => {
        status.value = 'failed';
        message.value = error;
        emit('response-data-token', undefined);
      });
  } else {
    emit('response-promise', request);
    return request;
  }
}

defineExpose({
  /** @description 消息 */
  message,
  /** @description 请求状态 */
  status,
  /** @description 开始单点登录请求 */
  start,
});
</script>

<style lang="scss" scoped></style>
