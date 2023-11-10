import { component } from './utils/component';
export default {
  base: '/dc-component',
  vite: {
    server: {
      port: 5174,
      host: true,
      open: false,
      proxy: {
        '/yesno-wtf': {
          target: 'https://yesno.wtf',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/yesno-wtf/, ''),
        },
      },
    },
    preview: {
      port: 4174,
      host: true,
      open: false,
      proxy: {
        '/yesno-wtf': {
          target: 'https://yesno.wtf',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/yesno-wtf/, ''),
        },
      },
    },
  },
  themeConfig: {
    siteTitle: 'dcqcComponent',
    logo: '/logo.svg',
    search: {
      provider: 'local',
    },
    nav: [
      { text: '组件', link: '/component/button' },
      { text: '指南', link: '/guide/method' },
      { text: '技术分享', link: '/shareSkill/index' },

      { text: 'hooks', link: '/hooks/useLockDom' },

      { text: 'gitHub', link: 'https://github.com/lan-an/dc-component' },
    ],
    sidebar: {
      '/component/': [
        {
          text: '组件',
          items: component,
        },
      ],
      '/guide/': [
        {
          text: '指南',
          items: [
            {
              text: '快速上手',
              link: '/guide/method',
              activeMatch: '/guide/method',
            },
          ],
        },
      ],
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Evan You',
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
