import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';

function route(path: string, component: string) {
  const splitName = component.split('/');
  return {
    path,
    name: path,
    component: () => {
      if (splitName.length === 1) {
        return import(`../views/components/${splitName[0]}.vue`);
      }
      if (splitName.length === 2) {
        return import(`../views/components/${splitName[0]}/${splitName[1]}.vue`);
      }
    },
  };
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/',
    name: 'documentation',
    component: () => import('../views/Documentation.vue'),
    children: [
      route('documentation/get-started', 'Description'),
      route('documentation/alert', 'alert/AlertDocumentation'),
      route('documentation/avatar', 'avatar/AvatarDocumentation'),
      route('documentation/backdrop', 'backdrop/BackdropDocumentation'),
      route('documentation/badge', 'badge/BadgeDocumentation'),
      route('documentation/button', 'button/ButtonDocumentation'),
      route('documentation/card', 'card/CardDocumentation'),
      route('documentation/dropdown', 'dropdown/DropdownDocumentation'),
      route('documentation/helper-text', 'helper-text/HelperTextDocumentation'),
      route('documentation/input', 'input/InputDocumentation'),
      route('documentation/label', 'label/LabelDocumentation'),
      route('documentation/modal', 'modal/ModalDocumentation'),
      route('documentation/pagination', 'pagination/PaginationDocumentation'),
      route('documentation/select', 'select/SelectDocumentation'),
      route('documentation/table', 'table/TableDocumentation'),
      route('documentation/textarea', 'textarea/TextareaDocumentation'),
      route('documentation/w-app', 'windmill/WindmillDocumentation'),
    ],
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] },
}).href; // '/not/found'

export default router;
