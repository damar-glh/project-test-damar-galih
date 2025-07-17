import { createApp } from 'vue'
import './styles/tailwind.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from './router'

createApp(App).use(createPinia()).use(router).mount('#app')
