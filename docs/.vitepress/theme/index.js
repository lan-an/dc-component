import DefaultTheme from "vitepress/theme";
import * as dcqc from "dcqc";
//全局注册组件
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(dcqc);
  },
};
