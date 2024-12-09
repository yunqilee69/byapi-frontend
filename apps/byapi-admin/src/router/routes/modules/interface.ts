import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'svg:api',
      order: 1000,
      title: '接口',
    },
    name: 'Interface',
    path: '/interface',
    children: [
      {
        name: 'Market',
        path: '/interface/market',
        component: () => import('#/views/interface/market/index.vue'),
        meta: {
          affixTab: true,
          icon: 'svg:api-market',
          title: '市场',
        },
      },
      {
        name: 'MyInterface',
        path: '/interface/my-interface',
        component: () => import('#/views/interface/my-interface/index.vue'),
        meta: {
          icon: 'svg:my-api',
          title: '我的接口',
        },
      },
      {
        name: 'ManageInterface',
        path: '/interface/manage-interface',
        component: () => import('#/views/interface/manage-interface/index.vue'),
        meta: {
          icon: 'svg:manage-api',
          title: '管理接口',
          authority: ['admin'],
        },
      },
    ],
  },
];

export default routes;
