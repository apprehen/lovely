import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: () => import('@/views/Chat.vue')
    },
    {
      path: '/Pic',
      name: 'Pic',
      component: () => import('@/views/Pic.vue')
    },
    {
      path: '/Video',
      name: 'Video',
      component: () => import('@/views/Video.vue')
    },
    {
      path: '/Emoji',
      name: 'Emoji',
      component: () => import('@/views/Emoji.vue')
    }
  ]
})

export default router
