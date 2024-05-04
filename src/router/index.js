import { createRouter, createWebHistory } from 'vue-router';
import Login from '../public/pages/login.vue';
import Activities from '../tourist/pages/activities.vue';
import Home from '../tourist/pages/home.vue';
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
      path: '/home',
      component: Home,
    },
    {
      path: '/activities',
      component: Activities,
    },
  ],
});
