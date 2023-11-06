import { SiderLayoutComponent } from '@/components/layout/SiderLayoutComponent';
import { type RouteRecordRaw } from 'vue-router';
import VueRouting from './vue/vue-routing.module';
import JsRouting from './js/js-routing.module';
import CssRouting from './css/css-routing.module';

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
      ...JsRouting,
      ...CssRouting,
    ],
  },
  { path: '/:(.*)*', redirect: 'pages/home' },
];

export default pages;
