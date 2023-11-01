/*
 * @Date: 2023-10-31 16:46:45
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-31 17:43:24
 * @FilePath: \dc-component\src\router\index.ts
 */
import {
  createRouter,
  createWebHistory,
} from 'vue-router';

// 2. 定义一些路由：每个路由都需要映射到一个组件。
import DTableSearch from '../view/dTableSearch/index.vue';
import LayoutComponent from '../layout/index.vue';
import Bak from '../view/bak/index.vue';
export const routes: any = [
  {
    path: '/',
    component: LayoutComponent,
    redirect: '/dashboard',

    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',

        meta: { title: '首页', affix: true },
        component: DTableSearch,
      },
      {
        path: 'bak',
        name: 'bak',
        meta: { title: '首页', affix: true },
        component: Bak,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory('dc-component'),
  routes, // `routes: routes` 的缩写
});

export default router;
