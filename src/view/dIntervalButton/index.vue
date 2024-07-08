<template>
    <d-interval-button type="primary" ref="timerbtn" :second="second" @click="sendCode" text="获取验证码" />
</template>
<script lang="ts" setup>
import { DIntervalButton } from 'dc-pro-component';
import { ref } from 'vue'
const timerbtn = ref(null)
const second = ref(30)
const sendCode = () => {
}
</script>
