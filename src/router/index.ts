
/*
 * @Date: 2023-10-31 16:46:45
 * @Auth: 463997479@qq.com
 * @LastEditors: 873768511@qq.com
 * @LastEditTime: 2023-11-09 09:12:39
 * @FilePath: \dc-component\src\router\index.ts
 */
import { createRouter, createWebHistory } from 'vue-router';

// 2. 定义一些路由：每个路由都需要映射到一个组件。
import DTableSearch from '../view/dTableSearch/index.vue';
import LayoutComponent from '../layout/index.vue';
import Bak from '../view/bak/index.vue';
import dSingleSignOn from '../view/dSingleSignOn/index.vue';
import FileUpload from "../view/dFileUpload/index.vue";
import DCropper from '../view/dCropper/index.vue';
import dRelationGraph from '../view/dRelationGraph/index.vue';
import OrganizationTree from '../view/dOrganizationTree/index.vue';

export const routes: any = [

  {
    path: '/',
    component: LayoutComponent,
    redirect: '/dTableSearch',


    children: [
      {
        path: 'dTableSearch',
        name: 'DTableSearch',

        meta: { title: 'DTableSearch' },
        component: DTableSearch,
      },
      {
        path: 'bak',
        name: 'bak',
        meta: { title: 'bak' },
        component: Bak,
      },
      {
        path: 'dSingleSignOn',
        name: 'dSingleSignOn',
        meta: { title: '首页' },
        component: dSingleSignOn,
      },
      {
        path: 'DCropper',
        name: 'DCropper',
        meta: { title: '首页' },
        component: DCropper,
      },
      {
        path: 'dRelationGraph',
        name: 'dRelationGraph',
        meta: { title: '首页' },
        component: dRelationGraph,
      },
      {
        path: 'FileUpload',
        name: 'FileUpload',
        meta: { title: '上传文件', affix: true },
        component: FileUpload,
      },
      {
        path:'OrganizationTree',
        name:'OrganizationTree',
        meta:{title:'组织树'},
        component:OrganizationTree
      }
    ],

  },
];
const router = createRouter({
  history: createWebHistory('dc-component'),
  routes, // `routes: routes` 的缩写
});

export default router;
