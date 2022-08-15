import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import LivePreview from './components/LivePreview.vue'

import windmill from '../../../src/index';
import './styles/index.css';

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(windmill);
    app.component('LivePreview', LivePreview);
  }
}

export default theme;