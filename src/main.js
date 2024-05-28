import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import Checkbox from 'primevue/checkbox';
import PrimeVue from 'primevue/config';
import DataView from 'primevue/dataview';
import Dropdown from 'primevue/dropdown';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/md-light-indigo/theme.css';
import Toolbar from 'primevue/toolbar';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router/index';
import './style.css';
import Toast from 'primevue/toast';
createApp(App)
  .component('Toolbar', Toolbar)
  .component('Carousel', Carousel)
  .component('Dropdown', Dropdown)
  .component('InputSwitch', InputSwitch)
  .component('InputText', InputText)
  .component('Button', Button)
  .component('Checkbox', Checkbox)
  .component('Card', Card)
  .component('DataView', DataView)
  .component('Avatar', Avatar)
    .component('Toast', Toast)
  .use(router)
  .use(PrimeVue, { ripple: true })
  .mount('#app');
