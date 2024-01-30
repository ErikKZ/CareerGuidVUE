import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'сhoosingCard',
      component: () => import('@/views/СhoosingCardView.vue')
    },
    {
      path: '/adminBoard',
      name: 'AdminBoard',
      component: () => import('@/views/AdminBoardView.vue'),
      children: [
        {
          path: 'consults',
          name: 'Consutations',
          component: () => import('@/views/adminBoard/Consutations.vue')
        },
        {
          path: 'payments',
          name: 'Payments',
          component: () => import('@/views/adminBoard/Payments.vue')
        },
        {
          path: 'settings',
          name: 'Settings',
          component: () => import('../views/adminBoard/Settings.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router