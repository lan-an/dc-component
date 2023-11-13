<template>
  <div style="border: 1px solid black; padding: 5px">
    // #region message-1
    <template>
      <d-single-sign-on>
        <template #not-start>自定义未开始信息</template>
        <template #pending>自定义加载中消息</template>
        <template #success>自定义加载成功消息</template>
        <template #failed>自定义加载失败消息</template>
      </d-single-sign-on>
    </template>
    // #endregion message-1
    <hr/>
    // #region message-2
    <d-single-sign-on hide-message> </d-single-sign-on>
    // #endregion message-2
  </div>
</template>

<script setup lang="ts" name="SingleSignOn">
import { DSingleSignOn } from 'dc-pro-component';
</script>

<style lang="scss" scoped></style>
