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
      path: '/school',
      name: 'school',
      component: () => import('../views/schoolView.vue')
    },
    {
      path: '/faculty',
      name: 'faculty',
      component: () => import('../views/facultyView.vue'),
      children:[
        {
          path: '/arborescence',
          name: 'arborescence',
          component: () => import('../components/arborescence.vue')
        },
        {
          path: '/wordsort',
          name: 'wordsort',
          component: () => import('../components/wordsort.vue')
        }
      ]
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/educationView.vue')
    },

    {
      path: '/enrollment',
      name: 'enrollment',
      component: () => import('../views/enrollmentView.vue')
    },

  ]
})

export default router
