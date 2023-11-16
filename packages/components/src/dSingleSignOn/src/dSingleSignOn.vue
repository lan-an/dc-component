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
import { useRoute } from 'vue-router';
import axios, { AxiosRequestConfig } from 'axios';

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

async function handleSingleSignOn() {
  try {
    status.value = 'pending';
    singleSignOnCheckQuery();
    const axiosConfig = singleSignOnGenerateConfig();
    const axiosRequestInstance = singleSignOnGenerateRequest(axiosConfig);
    const axiosResponse = await singleSignOnProcess(axiosRequestInstance);
    return axiosResponse;
  } catch (error) {
    return handleSingleSignOnError(error);
  }
}

function singleSignOnCheckQuery() {
  if (!props.requestAxiosConfig) {
    if (!props.api) {
      throw new Error('API not found');
    }
    if (typeof props.query === 'string' && !route.query[props.query]) {
      throw new Error('Query not found');
    }
  }
}

function singleSignOnGenerateConfig() {
  if (props.requestAxiosConfig) {
    return props.requestAxiosConfig;
  } else {
    const requestQuery =
      typeof props.query === 'string' ? [props.query] : props.query;
    const requestTokenTemp = props.requestToken ?? requestQuery;
    const requestToken =
      typeof requestTokenTemp === 'string'
        ? [requestTokenTemp]
        : requestTokenTemp;
    if (requestQuery.length !== requestToken.length) {
      throw new Error('Request query and token length not match');
    }

    const requestPayloadObject = {};
    requestQuery.forEach((each, index) => {
      if (!route.query[each]) {
        throw new Error(`Query "${each}" not found`);
      }
      requestPayloadObject[requestToken[index]] = route.query[each];
    });

    return {
      url: props.api,
      method: props.requestMethod,
      [props.requestPayload]: requestPayloadObject,
    };
  }
}

function singleSignOnGenerateRequest(requestConfig: AxiosRequestConfig) {
  const request = props.axiosInstance
    ? props.axiosInstance.request(requestConfig)
    : axios.request({ ...{ timeout: 10000 }, ...requestConfig });
  return request;
}

async function singleSignOnProcess(request: Promise<any>) {
  if (!props.manualHandle) {
    return request
      .then((res) => {
        if (res?.data?.[props.responseToken]) {
          status.value = 'success';
          emit('response-data-token', res.data[props.responseToken]);
          return res.data[props.responseToken];
        } else if (res?.[props.responseToken]) {
          status.value = 'success';
          emit('response-data-token', res[props.responseToken] as string);
          return res[props.responseToken];
        } else {
          return Promise.reject('Response token not found');
        }
      })
      .catch((error) => {
        emit('response-data-token', undefined);
        if (error instanceof Error) {
          throw error;
        } else {
          throw new Error(error);
        }
      });
  } else {
    emit('response-promise', request);
    return request;
  }
}

function handleSingleSignOnError(error: Error) {
  if (error.name === 'Error') {
    error.name = '[SingleSignOn Error]';
  }
  status.value = 'failed';
  message.value = String(error);
  emit('response-promise', Promise.reject(error));
  emit('response-data-token', undefined);
  return Promise.reject(error);
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
