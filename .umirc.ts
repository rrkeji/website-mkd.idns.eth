import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base: './',
  publicPath: './',
  outputPath: './dist',
  hash: true,
  history: {
    type: 'hash',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        {
          path: './',
          redirect: './home',
        },
        {
          path: './home',
          component: '@/Home/index',
        },
        {
          path: './guide',
          component: '@/pages/guide/index',
        },
        {
          path: './console',
          component: '@/pages/console/index',
          routes: [
            {
              path: './',
              redirect: './login',
            },
            {
              path: './login',
              component: '@/micro-keys/login/login',
            },
            {
              path: './kv',
              component: '@/micro-keys/kv/index',
            },
            {
              path: './application',
              component: '@/micro-keys/application/index',
            },
          ],
        },
        {
          path: './about',
          component: '@/pages/about/index',
        },
      ],
    },
  ],
  fastRefresh: {},
  proxy: {
    '/api/': {
      target: 'https://mkd.idns.link/',
      // pathRewrite: { '^/api': '' },
      changeOrigin: true,
      secure: true,
    },
  },
});
