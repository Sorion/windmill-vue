# Windmill Vue UI

The component library for fast and accessible development of gorgeous interfaces.

*This is still a work in progress!*

## Install

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

## Local command

### Building locally

To manually build the lib for both ES6 module and UMD module

```sh
npm run build
```


### Running documentation locally

1. Start the development server

```sh
npm run docs:dev
```

2. Visit Visit the development environment running at http://localhost:3000.


### Building documentation locally 

```sh
npm run docs:build
```
