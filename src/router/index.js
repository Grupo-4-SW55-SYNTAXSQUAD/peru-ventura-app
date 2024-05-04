import { createRouter, createWebHistory } from 'vue-router';
import Login from '../public/pages/login.vue';
import Activities from '../tourist/pages/activities.vue';
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/activities',
      component: Activities,
    },
  ],
});
