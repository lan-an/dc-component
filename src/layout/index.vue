<template>
  <div class="content">
    <div class="content-left">
      <el-menu
        class="el-menu-vertical-demo"
        default-active="1"
        router
        style="height: 100%"
        :collapse="isCollapse"
        @close="handleClose"
        @open="handleOpen"
      >
        <el-menu-item
          v-for="(item, index) in componentRoutesList"
          :key="index"
          :index="item.path"
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
import { routes } from '../router/index';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { Menu as IconMenu } from '@element-plus/icons-vue';
import { ElIcon, ElMenu, ElMenuItem } from 'element-plus';
const route = useRouter();

defineOptions({
  name: 'LayoutComponent',
});

const componentRoutesList = routes[0].children;

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
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
  width: calc(100% - 300px);

  padding: 20px;
  box-sizing: border-box;
}
</style>
