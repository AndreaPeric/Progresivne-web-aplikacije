import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/bootstrap4-light-purple/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const app = createApp(App);

app.component('InputText', InputText);
app.component('Button', Button);
app.use(PrimeVue);
app.mount('#app')
