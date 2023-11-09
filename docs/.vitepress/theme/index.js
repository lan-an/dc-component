import DefaultTheme from 'vitepress/theme';
import * as dc from 'dc-pro-component';
import * as examples from '../example';
import { createRouter, createWebHistory } from 'vue-router';

//全局注册组件
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(dc);
    examples.default.map((item) => {
      item.forEach((each) => {
        app.component(`${each.__name}`, each);
      });
    });
    app.use(
      createRouter({
        history: createWebHistory(),
        routes: [],
      }),
    );
    // app.mixin({
    //   mounted() {

    //   },
    // });
  },
};
