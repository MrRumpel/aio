import { SiderLayoutComponent } from '@/components/layout/SiderLayoutComponent';
import { type RouteRecordRaw } from 'vue-router';
import VueRouting from './vue/vue-routing.module';

const pages: RouteRecordRaw[] = [
  {
    path: '/pages',
    name: 'home',
    meta: {
      title: '主页',
    },
    redirect: 'pages/home',
    component: SiderLayoutComponent,
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '主页',
        },
        component: () => import('./SonOne'),
      },
      ...VueRouting,
    ],
  },
  { path: '/:(.*)*', redirect: 'pages/home' },
];

export default pages;
