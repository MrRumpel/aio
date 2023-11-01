import { BlankLayoutComponent } from '@/components/layout/BlankLayoutComponent';
import { SiderLayoutComponent } from '@/components/layout/SiderLayoutComponent';
import { defineAsyncComponent } from 'vue';
import { type RouteRecordRaw } from 'vue-router';

const VueRouting: RouteRecordRaw[] = [
  {
    path: 'vue',
    name: 'vueRouting',
    meta: {
      title: 'vue面试题',
    },
    component: BlankLayoutComponent,
    children: [
      {
        path: 'reactivity-fundamentals',
        name: 'reactivity-fundamentals',
        meta: {
          title: '响应式基础',
        },
        component: () => import('./reactivity-fundamentals'),
      },
    ],
  },
];

export default VueRouting;
