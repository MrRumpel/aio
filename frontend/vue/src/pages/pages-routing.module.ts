import { SiderLayoutComponent } from '@/components/layout/SiderLayoutComponent';
import { type RouteRecordRaw } from 'vue-router';
import VueRouting from './vue/vue-routing.module';

const pages: RouteRecordRaw[] = [
  {
    path: '/pages',
    name: 'pages',
    meta: {
      title: '主页',
    },
    component: SiderLayoutComponent,
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '主页',
        },
        component: () => import('./index'),
      },
      ...VueRouting,
    ],
  },
  { path: '/:(.*)*', redirect: 'pages/home' },
];

export default pages;
