import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/HelloWorld.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
