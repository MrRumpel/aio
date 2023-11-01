import { SiderLayoutComponent } from '@/components/layout/SiderLayoutComponent';
import { defineAsyncComponent } from 'vue';
import { type RouteRecordRaw } from 'vue-router';

const pages: RouteRecordRaw[] = [
  {
    path: '/pages',
    name: 'home',
    meta: {
      title: '主页',
    },
    redirect: 'pages/dashboard',
    component: SiderLayoutComponent,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        meta: {
          title: '主页',
        },
        component: () => import('./SonOne'),
      },
    ],
  },
  // { path: '/:(.*)*', redirect: 'pages/dashboard' },
];

export default pages;
