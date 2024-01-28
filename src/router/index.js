import { createRouter, createWebHistory } from 'vue-router'
// import СhoosingCardView from '../views/СhoosingCardView.vue'
// import AdminBoardView from '@/views/AdminBoardView.vue'
// import Consutations from '@/views/adminBoard/Consutations.vue'
// import Settings from '@/views/adminBoard/Settings.vue'
// import Payments from '@/views/adminBoard/Payments.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Consutations',
      component: () => import('@/views/adminBoard/Consutations.vue')
    },
    {
      path: '/cards',
      name: 'сhoosingCard',
      component: () => import('@/views/СhoosingCardView.vue')
      // component: СhoosingCardView
    },
    {
      path: '/adminBoard/payments',
      name: 'Payments',
      component: () => import('@/views/adminBoard/Payments.vue')
    },
    // {
    //   path: '/adminBoard/settings',
    //   name: 'settings',
    //   component: Settings
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
