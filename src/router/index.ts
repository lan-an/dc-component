import { createRouter, createWebHashHistory } from 'vue-router';
import { RouteRecord } from 'vue-router/types';
import { children } from '../common.ts'
console.log('children', children)
import LayoutComponent from '../layout/index.vue';
export const routes: RouteRecord = [
  {
    path: '/',
    component: LayoutComponent,
    redirect: '/dTableSearch',
    children
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
