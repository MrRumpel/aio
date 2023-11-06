import { BlankLayoutComponent } from '@/components/layout/BlankLayoutComponent.js';
import { SiderLayoutComponent } from '@/components/layout/SiderLayoutComponent.js';
import { defineAsyncComponent } from 'vue';
import { type RouteRecordRaw } from 'vue-router';

const JsRouting: RouteRecordRaw[] = [
  {
    path: 'js',
    name: 'jsRouting',
    meta: {
      title: 'js面试题',
    },
    component: BlankLayoutComponent,
    children: [
      {
        path: 'compareConstVarLet',
        name: 'compareConstVarLet',
        meta: {
          title: '对比 Const Var Let',
        },
        component: () => import('./compareConstVarLet'),
      },
    ],
  },
];

export default JsRouting;
