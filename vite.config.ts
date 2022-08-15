import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

/**
 * @type {import('vite').UserConfig}
 * @see https://vitejs.dev/config/
 */
const config = {
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'windmill-vue',
    },
    rollupOptions: {
      external: ['vue', 'tailwindcss'],
      output: {
        assetFileNames: (asset) => {
          if (asset.name === 'style.css') {
            return 'windmill-vue.css';
          }
          return asset.name || '';
        },
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
};

export default config;
