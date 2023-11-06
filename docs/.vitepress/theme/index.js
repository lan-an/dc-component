import DefaultTheme from "vitepress/theme";
import * as dc from "dc-pro-component";
import * as arr from '../example'
//全局注册组件
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(dc),
    arr.default.map(item=>{
    app.component(`${item.__name}`,item)
  })
  },
};
