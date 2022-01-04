# Windmill Vue UI

The component library for fast and accessible development of gorgeous interfaces.

Install

```sh
npm i @sorion/windmill-vue
```

You can register all components globally in your vue app.

```js
// main.js

import { createApp } from 'vue';
import App from './App.vue';

import ui from '@sorion/windmill-vue';

createApp(App).use(ui).mount('#app');
```

Use components inside your project

```js
<template>
  <UIButton>Hi there!</UIButton>
</template>
```

All component are prefixed with `UI`, meaning the button component will be named `UIButton`, the label `UILabel` and so on...
