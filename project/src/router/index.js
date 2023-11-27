import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import indexView from '../views/indexView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: indexView,
      meta:{
        index:-1
      }
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('../views/newView.vue'),
      meta:{
        index:0
      }
    },
    {
      path: '/school',
      name: 'school',
      component: () => import('../views/schoolView.vue'),
      meta:{
        index:1
      }
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
      ],
      meta:{
        index:2
      }
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/educationView.vue'),
      meta:{
        index:3
      }
    },
    {
      path: '/research',
      name: 'research',
      component: () => import('../views/researchView.vue'),
      meta:{
        index:4
      }
    },
    {
      path: '/enrollment',
      name: 'enrollment',
      component: () => import('../views/enrollmentView.vue'),
      meta:{
        index:5
      }
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: () => import('../views/exchangeView.vue'),
      meta:{
        index:6
      }
    },
    {
      path: '/enter',
      name: 'enter',
      component: () => import('../views/enterView.vue'),
      meta:{
        index:7
      }
    }
  ]
})

export default router
