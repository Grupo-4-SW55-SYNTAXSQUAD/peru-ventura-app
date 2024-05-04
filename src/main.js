import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import PrimeVue from 'primevue/config';

import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/md-light-indigo/theme.css';
import Toolbar from 'primevue/toolbar';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router/index';
import './style.css';

createApp(App)
  .component('Toolbar', Toolbar)
  .component('Carousel', Carousel)
  .component('Button', Button)
  .component('Card', Card)
  .component('Avatar', Avatar)
  .use(router)
  .use(PrimeVue, { ripple: true })
  .mount('#app');
