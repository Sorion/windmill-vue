import * as components from './components';

import './assets/style.css';

import { App } from 'vue';

const windmillVue = {
  install(app: App): void {
    for (const componentName in components) {
      //@ts-expect-error avoid error for basic vue component registeration
      const component = components[componentName];

      app.component(component.name, component);
    }
  },
};

export default windmillVue;
