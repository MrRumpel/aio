import { BlankLayoutComponent } from '@/components/layout/BlankLayoutComponent.js';
import { SiderLayoutComponent } from '@/components/layout/SiderLayoutComponent.js';
import { defineAsyncComponent } from 'vue';
import { type RouteRecordRaw } from 'vue-router';

const CssRouting: RouteRecordRaw[] = [
  {
    path: 'css',
    name: 'cssRouting',
    meta: {
      title: 'CSS面试题',
    },
    component: BlankLayoutComponent,
    children: [
      {
        path: 'compareVwAndPercent',
        name: 'compareVwAndPercent',
        meta: {
          title: '对比 Vw 和 百分比',
        },
        component: () => import('./compareVwAndPercent'),
      },
      {
        path: 'flexLayoutExample',
        name: 'flexLayoutExample',
        meta: {
          title: 'Flex 布局示例',
        },
        component: () => import('./flexLayoutExample'),
      },
    ],
  },
];

export default CssRouting;
