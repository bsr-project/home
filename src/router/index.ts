import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      redirect: '/index',
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('@/views/Home.vue')
        },
        {
          path: 'join',
          name: 'join',
          component: () => import('@/views/Join.vue')
        }
      ]
    }
  ]
})

export default router
