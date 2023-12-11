<template>
    <el-button v-bind="$attrs" @click="handleClick" :disabled="disabled || time > 0">
        <slot>{{ time>0? `${time}s 后重发`: props.text }}</slot>
  </el-button>
</template>
<script setup lang="ts">
import { ElButton} from 'element-plus';
import { computed, watch, ref } from 'vue'
const props = defineProps({
  second: {
    type: Number,
    default: 60,
  },
  text:{
    type: String,
    default: '获取验证码',
  }
})
const time = ref(0)
const disabled = ref(false)
const emits = defineEmits(['click'])
const handleClick = () => {
  emits('click')
  start()
}
// 重置倒计时0
const reset = () => {
  time.value = 0
}
const start = () => {
  time.value = props.second
  disabled.value = true
  timer()
}
const timer = () => {
  if (time.value > 0) {
    time.value--
    setTimeout(timer, 1000)
  } else {
    disabled.value = false
  }
}
// 暴露方法出去
defineExpose({ reset })
</script>