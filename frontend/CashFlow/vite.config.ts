import { fileURLToPath, URL } from 'node:url';

import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => ({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    'process.env': {
      MONGODB_URI: loadEnv(mode, process.cwd()).VITE_APP_MONGODB_URI,
    },
  },
});
