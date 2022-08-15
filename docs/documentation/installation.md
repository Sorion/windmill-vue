# Installation

## npm

Install windmill-vue with npm

```sh
npm install @sorion/windmill-vue --save
```

## Import

Add the following code in your `main.js`or `main.ts` vue file.

```ts
import { createApp } from 'vue';
import App from './App.vue';

import windmillVue from '@sorion/windmill-vue';
import '@sorion/windmill-vue/dist/windmill-vue.css';

createApp(App).use(windmillVue).mount('#app')
```

All Windmill Vue components are ready to use!
