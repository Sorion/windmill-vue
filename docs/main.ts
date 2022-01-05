import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import { createPinia } from 'pinia';

import WindmillVue from '../src/';
import './assets/index.css';

import AccentSpan from './components/AccentSpan.vue';
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import CodeExample from './components/CodeExample.vue';
import CodeBlock from './components/CodeBlock.vue';
import Example from './components/Example.vue';
import Footer from './components/Footer.vue';

createApp(App)
  .use(WindmillVue)
  .use(router)
  .use(createPinia())
  .component('AccentSpan', AccentSpan)
  .component('Navbar', Navbar)
  .component('Sidebar', Sidebar)
  .component('Footer', Footer)
  .component('CodeBlock', CodeBlock)
  .component('CodeExample', CodeExample)
  .component('Example', Example)
  .mount('#app');
