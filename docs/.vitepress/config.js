/*
 * @Date: 2023-10-17 17:16:50
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-18 17:14:47
 * @FilePath: \dc-component\docs\.vitepress\config.js
 */
export default {
  //部署自己服务器去掉/
  base: "/dc-component",
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
            {
              text: "space",
              link: "/component/space",
              activeMatch: "/component/space",
            },
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
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Evan You",
    },
    editLink: {
      pattern: ({ filePath }) => {
        return `https://github.com/lan-an/dc-component/docs/${filePath}`;
      },
    },
  },
  markdown: {
    lineNumbers: true,
  },
};
