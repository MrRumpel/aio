import { BlankLayoutComponent } from '@/components/layout/BlankLayoutComponent';
import { SiderLayoutComponent } from '@/components/layout/SiderLayoutComponent';
import { type RouteRecordRaw } from 'vue-router';

const pages: RouteRecordRaw[] = [
  {
    path: '/pages',
    name: 'pages',
    meta: {
      title: '主页',
    },
    component: BlankLayoutComponent,
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '主页',
        },
        component: () => import('./index'),
      },
    ],
  },
  { path: '/:(.*)*', redirect: 'pages/home' },
];

export default pages;
