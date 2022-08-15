import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import windmill from '../../../src/index';
import './styles/index.css';

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(windmill);
  }
}

export default theme;