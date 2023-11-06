import { SiderLayoutComponent } from '@/components/layout/SiderLayoutComponent';
import { defineAsyncComponent } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { BlankLayoutComponent } from '@/components/layout/BlankLayoutComponent';
import pages from '@/pages/pages-routing.module';

export const _import = (path: string) => defineAsyncComponent(() => import(`../pages/${path}.tsx`));

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: BlankLayoutComponent,
  },
  ...pages,
  {
    path: '/son',
    component: _import('SonOne'),
  },
];

export default routes;
