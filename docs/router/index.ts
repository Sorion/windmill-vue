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
    children: [route('documentation', 'Description'), route('documentation/button', 'button/Button')],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
