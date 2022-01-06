import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

function route(path: string, component: string) {
  return {
    path,
    name: path,
    component: () => import(`../views/components/${component}.vue`),
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
      route('documentation', 'Description'),
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
