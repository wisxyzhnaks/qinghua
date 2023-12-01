import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index.vue'),
      meta:{
        name:''
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue'),
      meta:{
        name:''
      }
    },
    {
      path: '/banner',
      name: 'banner',
      component: () => import('../views/banner.vue'),
      meta:{
        name:'轮播图'
      }
    },
  ]
})

export default router
