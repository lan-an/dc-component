<template>
  <div class="content">
    <div class="content-left">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        style="height: 100%"
      >
        <el-menu-item
          v-for="(item, index) in routerArr"
          @click="handleClick(item.name)"
          :index="++index"
          :key="index"
        >
          <el-icon><icon-menu /></el-icon>
          <template #title>{{ item.name }}</template>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { Menu as IconMenu } from '@element-plus/icons-vue';
import { ElIcon, ElMenu, ElMenuItem } from 'element-plus';
const route = useRouter();
defineOptions({
  name: 'LayoutComponent',
});
import { children } from '../common.ts'
console.log('children', children)
let routerArr = reactive([]);
routerArr = children
const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClick = arg => {
  route.push(arg);
};
</script>

<style scoped>
.content {
  display: flex;
  width: 100%;
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.content-left {
  width: 250px;
  height: 100%;
}
.content-right {
  flex: auto;
  padding: 20px;
  box-sizing: border-box;
}
</style>
