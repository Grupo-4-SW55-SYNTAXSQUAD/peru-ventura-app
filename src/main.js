import 'primeicons/primeicons.css';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import Checkbox from 'primevue/checkbox';
import PrimeVue from 'primevue/config';
import DataView from 'primevue/dataview';
import Dropdown from 'primevue/dropdown';
import FloatLabel from 'primevue/floatlabel';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import MultiSelect from 'primevue/multiselect';
import Password from 'primevue/password';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primeflex/primeflex.css';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Toolbar from 'primevue/toolbar';
import Menubar from "primevue/menubar";
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router/index';
import './style.css';

createApp(App)
  .use(PrimeVue, { ripple: true, unstyled: false })
  .use(router)
  .use(ToastService)
  .component('Toolbar', Toolbar)
  .component('Carousel', Carousel)
  .component('Toast', Toast)
  .component('MultiSelect', MultiSelect)
  .component('InputGroupAddon', InputGroupAddon)
  .component('InputGroup', InputGroup)
  .component('Dropdown', Dropdown)
  .component('InputSwitch', InputSwitch)
  .component('InputText', InputText)
  .component('Button', Button)
  .component('Password', Password)
  .component('FloatLabel', FloatLabel)
  .component('Checkbox', Checkbox)
  .component('Card', Card)
  .component('DataView', DataView)
  .component('Avatar', Avatar)
  .component('Menubar', Menubar)
  .mount('#app');
