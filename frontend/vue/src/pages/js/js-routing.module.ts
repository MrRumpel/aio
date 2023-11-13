import { BlankLayoutComponent } from '@/components/layout/BlankLayoutComponent.js';
import { SiderLayoutComponent } from '@/components/layout/SiderLayoutComponent.js';
import { defineAsyncComponent } from 'vue';
import { type RouteRecordRaw } from 'vue-router';

const JsRouting: RouteRecordRaw[] = [
  {
    path: 'js',
    name: 'jsRouting',
    meta: {
      title: 'JS面试题',
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
      {
        path: 'removeDuplicatesFromArray',
        name: 'removeDuplicatesFromArray',
        meta: {
          title: '数组去重n种方法',
        },
        component: () => import('./removeDuplicatesFromArray'),
      },
      {
        path: 'compareSetAndMap',
        name: 'compareSetAndMap',
        meta: {
          title: 'set和map的区别',
        },
        component: () => import('./compareSetAndMap'),
      },
      {
        path: 'arraySpliceUsage',
        name: 'arraySpliceUsage',
        meta: {
          title: '数组splice方法的使用',
        },
        component: () => import('./arraySpliceUsage'),
      },
      {
        path: 'arrayReduceUsage',
        name: 'arrayReduceUsage',
        meta: {
          title: '数组reduce方法的使用',
        },
        component: () => import('./arrayReduceUsage'),
      },
      {
        path: 'functionMethods',
        name: 'functionMethods',
        meta: {
          title: 'apply, call, bind方法的区别',
        },
        component: () => import('./functionMethods'),
      },
      {
        path: 'arrayMethods',
        name: 'arrayMethods',
        meta: {
          title: 'forEach 和 map 方法的区别',
        },
        component: () => import('./arrayMethods'),
      },
      {
        path: 'asyncAwaitExample',
        name: 'asyncAwaitExample',
        meta: {
          title: 'async/await 的使用',
        },
        component: () => import('./asyncAwaitExample'),
      },
      {
        path: 'promiseExample',
        name: 'promiseExample',
        meta: {
          title: 'Promise 的使用',
        },
        component: () => import('./promiseExample'),
      },
    ],
  },
];

export default JsRouting;
