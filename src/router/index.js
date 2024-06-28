import { createRouter, createWebHistory } from 'vue-router';
import Login from '../public/pages/login.vue';
import Register from '../public/pages/register.vue';
import Activities from '../tourist/pages/activities.vue';
import ActivityDetail from '../tourist/pages/activity-detail.vue';
import Contact from '../tourist/pages/contact/contact.vue';
import DestinationsDetatil from '../tourist/pages/destinations-detail.vue';
import Destinations from '../tourist/pages/destinations.vue';
import Home from '../tourist/pages/home.vue';
import Profile from '../tourist/pages/profile.vue';
import Promotion from '../tourist/pages/promotions.vue';
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
      path: '/register',
      component: Register,
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/activity',
      component: Activities,
    },
    {
      path: '/promotion',
      component: Promotion,
    },
    {
      path: '/destinations',
      component: Destinations,
    },
    {
      path: '/contact',
      component: Contact,
    },
    {
      path: '/activity/:id',
      component: ActivityDetail,
    },
    {
      path: '/destinations/:id',
      component: DestinationsDetatil,
    },
    {
      path: '/profile',
      component: Profile,
    },
  ],
});
