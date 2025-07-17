import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      { path: '', redirect: 'work' },
      {
        path: 'work',
        name: 'Work',
        component: () => import('@/pages/Work.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/pages/About.vue')
      },
      {
        path: 'services',
        name: 'Services',
        component: () => import('@/pages/Services.vue')
      },
      {
        path: 'ideas',
        name: 'Ideas',
        component: () => import('@/pages/Ideas/Ideas.vue')
      },
      {
        path: 'careers',
        name: 'Careers',
        component: () => import('@/pages/Careers.vue')
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/pages/Contact.vue')
      }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/pages/NotFound.vue') }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
