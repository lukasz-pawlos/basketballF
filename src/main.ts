import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '../src/icons/fontAwsome'
import router from './router'
import './assets/globalStyle.css';

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
