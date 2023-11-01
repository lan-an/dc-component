<template>
  <div>{{ message }}</div>
</template>

<script setup lang="ts" name="SingleSignOn">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});

// import useUserStore from '@/store/modules/user';
// import { loginYkz } from '@/api/ubp/system/user.js';
const useUserStore = () => {};
const loginYkz = () => {};

const route = useRoute();
const router = useRouter();

const userStore = useUserStore();

const message = ref('加载中……');

const query = route.query;

if (query.auth_code) {
  handleSingleSignOn({ auth_code: query.auth_code }, '/index');
} else {
  message.value = '加载失败，错误信息：缺少请求标识符';
}

function handleSingleSignOn(token, target) {
  loginYkz(token)
    .then((res) => {
      if (res.token) {
        userStore.loginDirectSetToken(res.token);
      } else {
        return Promise.reject('未返回标识符');
      }
      message.value = '登录成功，正在跳转……';
      router.replace({
        path: target ? target : '/index',
      });
    })
    .catch((error) => {
      message.value = '加载失败，错误信息：' + error;
    });
}
</script>

<style lang="scss" scoped></style>
