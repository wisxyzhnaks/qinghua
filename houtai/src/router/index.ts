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
    {
      path: '/medium',
      name: 'medium',
      component: () => import('../views/medium.vue'),
      meta:{
        name:'媒体清华'
      }
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('../views/new.vue'),
      meta:{
        name:'头条新闻'
      }
    },
    {
      path: '/subject',
      name: 'subject',
      component: () => import('../views/subject.vue'),
      meta:{
        name:'专题推荐'
      }
    },
    {
      path: '/school',
      name: 'school',
      component: () => import('../views/school.vue'),
      meta:{
        name:'校园看点'
      }
    },
    {
      path: '/enter',
      name: 'enter',
      component: () => import('../views/enter.vue'),
      meta:{
        name:'入读清华'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let token = window.sessionStorage.getItem('token')
  console.log(to,from);
  if (to.fullPath != '/login' && !token ) {
    next('/login')
  }else{
    next()
  }

});

export default router
