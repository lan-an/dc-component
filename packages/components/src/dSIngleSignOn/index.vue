<template>
  <div>{{ message }}</div>
</template>

<script setup lang="ts" name="DSingleSignOn">
import { ref, withDefaults } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import {
  singleSignOnPropsInterface,
  singleSignOnPropsDefaults,
  singleSignOnEmits,
} from './singleSignOn';

const props = withDefaults(
  defineProps<singleSignOnPropsInterface>(),
  singleSignOnPropsDefaults,
);
defineEmits(singleSignOnEmits);

const route = useRoute();
const router = useRouter();

const message = ref('加载中……');

const query = route.query;

if (query[props.query]) {
  const token = {};
  token[props.token] = query[props.query];
  handleSingleSignOn(token, props.target);
} else {
  message.value = '加载失败，错误信息：缺少请求标识符';
}

function handleSingleSignOn(token, target) {
  // loginYkz(token)
  //   .then((res) => {
  //     if (res.token) {
  //       userStore.loginDirectSetToken(res.token);
  //     } else {
  //       return Promise.reject('未返回标识符');
  //     }
  //     message.value = '登录成功，正在跳转……';
  //     router.replace({
  //       path: target ? target : '/index',
  //     });
  //   })
  //   .catch((error) => {
  //     message.value = '加载失败，错误信息：' + error;
  //   });
}
</script>

<style lang="scss" scoped></style>
