import DefaultTheme from "vitepress/theme";
import * as dc from "dc-pro-component";

//全局注册组件
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(dc);
  },
};
