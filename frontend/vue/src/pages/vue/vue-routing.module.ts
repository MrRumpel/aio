import { BlankLayoutComponent } from '@/components/layout/BlankLayoutComponent';
import { SiderLayoutComponent } from '@/components/layout/SiderLayoutComponent';
import { defineAsyncComponent } from 'vue';
import { type RouteRecordRaw } from 'vue-router';

const VueRouting: RouteRecordRaw[] = [
  {
    path: 'vue',
    name: 'vueRouting',
    meta: {
      title: 'VUE面试题',
    },
    component: BlankLayoutComponent,
    children: [
      {
        path: 'test-code',
        name: 'test-code',
        meta: {
          title: '测试代码',
        },
        component: () => import('./testCode'),
      },
      {
        path: 'reactivity-core',
        name: 'reactivity-core',
        meta: {
          title: '响应式核心',
        },
        component: () => import('./md'),
      },
      {
        path: 'reactiveRefTypeCheck',
        name: 'reactiveRefTypeCheck',
        meta: {
          title: 'reactive和ref原理检测数据类型的方法',
        },
        component: () => import('./reactiveRefTypeCheck'),
      },
    ],
  },
];

export default VueRouting;
