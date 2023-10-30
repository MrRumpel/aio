import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import WujieVue from 'wujie-vue3';
import App from './App.vue';
import routes from './router';
import { createRouter, createWebHistory } from 'vue-router';

const basename = process.env.NODE_ENV === 'production' ? '/demo-vite/' : '';
declare global {
  interface Window {
    // 是否存在无界
    __POWERED_BY_WUJIE__?: boolean;
    // 子应用mount函数
    __WUJIE_MOUNT: () => void;
    // 子应用unmount函数
    __WUJIE_UNMOUNT: () => void;
    // 子应用无界实例
    __WUJIE: { mount: () => void };
  }
}

if (window.__POWERED_BY_WUJIE__) {
  let instance: any;
  window.__WUJIE_MOUNT = () => {
    const router = createRouter({ history: createWebHistory(basename), routes });
    instance = createApp(App).use(router).use(WujieVue);
    instance.mount('#app');
  };
  window.__WUJIE_UNMOUNT = () => {
    instance.unmount();
  };
  // module脚本异步加载，应用主动调用生命周期
  window.__WUJIE.mount();
} else {
  createApp(App)
    .use(createRouter({ history: createWebHistory(basename), routes }))
    .use(WujieVue)
    .mount('#app');
}
