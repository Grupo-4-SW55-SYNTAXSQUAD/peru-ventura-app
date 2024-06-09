import { createRouter, createWebHistory } from 'vue-router';
import Login from '../public/pages/login.vue';
import Register from '../public/pages/register.vue';
import Activities from '../tourist/pages/activities.vue';
import ActivityDetail from '../tourist/pages/activity-detail.vue';
import Contact from '../tourist/pages/contact/contact.vue';
import Destinations from '../tourist/pages/destinations.vue';
import Home from '../tourist/pages/home.vue';
import Profile from '../tourist/pages/profile.vue';
import Promotion from '../tourist/pages/promotions/promotion.vue';
import HomeOwner from "../owner/pages/home-owner.vue";
import DestinationOwner from "../owner/pages/destination-owner.vue";
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
      path: '/activities',
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
      path: '/:id',
      component: ActivityDetail,
    },
    {
      path: '/profile',
      component: Profile,
    },
    {
      path:'/home-owner',
      component: HomeOwner,
    },
    {
      path: '/destination-owner',
      component: DestinationOwner,
    }
  ],
});
