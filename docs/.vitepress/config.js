/*
 * @Date: 2023-10-17 17:16:50
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-18 12:36:49
 * @FilePath: \dcqc-component\docs\.vitepress\config.js
 */
export default {
  themeConfig: {
    siteTitle: "dcqcComponent",
    logo: "/logo.svg",
    search: {
      provider: "local",
    },

    nav: [
      { text: "组件", link: "/component/button" },
      { text: "指南", link: "/guide/method" },
      // { text: "gitHub", link: "https://github.com/..." },
    ],
    sidebar: {
      "/component/": [
        {
          text: "组件",
          items: [
            {
              text: "button",
              link: "/component/button",
              activeMatch: "/component/button",
            },
            // {
            //   text: "space",
            //   link: "/component/space",
            //   activeMatch: "/component/space",
            // },
          ],
        },
      ],
      "/guide/": [
        {
          text: "指南",
          items: [
            {
              text: "快速上手",
              link: "/guide/method",
              activeMatch: "/guide/method",
            },
          ],
        },
      ],
    },
  },
};
