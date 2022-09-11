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
          path: './about',
          component: '@/pages/about/index',
        },
      ],
    },
  ],
  fastRefresh: {},
});
