import { component } from './utils/component';
import path from 'path';
import { mdPlugin } from './config/plugins';

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
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, '../../packages/components/src'),
        '@hooks': path.resolve(__dirname, '../../packages/components/hooks'),
        '@constants': path.resolve(
          __dirname,
          '../../packages/components/constants',
        ),
        '@style': path.resolve(__dirname, '../../packages/components/style'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@style/base" as *;',
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
      { text: '组件', link: '/component/dTableSearch' },
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
    config: (md) => mdPlugin(md),
  },
};
