import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Antd, { message } from 'ant-design-vue';
import { App } from './App';
import routes from './router';
import { createRouter, createWebHistory } from 'vue-router';
import 'ant-design-vue/dist/reset.css';

const basename = process.env.NODE_ENV === 'production' ? '/demo-vite/' : '';
const app = createApp(App)
  .use(createRouter({ history: createWebHistory(basename), routes }))
  .use(Antd);

// 配置全局消息
app.config.globalProperties.$message = message;

app.mount('#app');
