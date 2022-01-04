import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'windmill-vue'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        assetFileNames: (asset) => {
          if (asset.name === 'style.css') {
            return 'windmill-vue.css';
          }
          return asset.name || '';
        },
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
