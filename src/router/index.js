import { createRouter, createWebHistory } from 'vue-router';
import Login from '../public/pages/login.vue';
import Activities from '../tourist/pages/activities.vue';
import Register from "../public/pages/register.vue";
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
      path:'/register',
      component: Register,
    },
    {
      path: '/activities',
      component: Activities,
    },
  ],
});
