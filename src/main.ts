import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '../src/icons/fontAwsome'
import router from './router'
import './assets/globalStyle.css';
import VueSplide from '@splidejs/vue-splide';

createApp(App)
.use(router)
.use( VueSplide )
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
