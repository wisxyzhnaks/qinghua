import { createRouter, createWebHistory } from 'vue-router'
import indexView from '../views/indexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: indexView
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('../views/newView.vue')
    },
    {
      path: '/school',
      name: 'school',
      component: () => import('../views/schoolView.vue')
    },
    {
      path: '/faculty',
      name: 'faculty',
      component: () => import('../views/facultyView.vue')
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/educationView.vue')
    },
    {
      path: '/research',
      name: 'research',
      component: () => import('../views/researchView.vue')
    },
    {
      path: '/enrollment',
      name: 'enrollment',
      component: () => import('../views/enrollmentView.vue')
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: () => import('../views/exchangeView.vue')
    },
    {
      path: '/enter',
      name: 'enter',
      component: () => import('../views/enterView.vue')
    }
  ]
})

export default router
