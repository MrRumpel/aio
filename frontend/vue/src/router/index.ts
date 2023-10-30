import HomeView from '../views/HomeView.vue';
import { defineAsyncComponent } from 'vue';

const _import = (name: string) => defineAsyncComponent(() => import(`../views/${name}.vue`));

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: HomeView,
  },
  {
    path: '/son',
    component: _import('SonOne'),
  },
];

export default routes;
