import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '../src/icons/fontAwsome'

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
