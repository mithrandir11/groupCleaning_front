import type { RouterConfig } from '@nuxt/schema'

export default {
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: () => import('~/pages/index.vue')
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('~/pages/auth/login.vue'),
      meta: {layout:false, middleware:'guest'}
    },
    {
      name: 'order',
      path: '/order',
      component: () => import('~/pages/order.vue')
    },
    
  ],
} satisfies RouterConfig
