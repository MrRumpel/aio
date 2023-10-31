import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import WujieVue from 'wujie-vue3';
import {App} from './App';
import routes from './router';
import { createRouter, createWebHistory } from 'vue-router';
import { Button, message } from 'ant-design-vue';

const basename = process.env.NODE_ENV === 'production' ? '/demo-vite/' : '';
const app = createApp(App)
  .use(createRouter({ history: createWebHistory(basename), routes }))
  .use(WujieVue)
  .use(Button);

// 配置全局消息
app.config.globalProperties.$message = message;

app.mount('#app');
