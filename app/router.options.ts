import type { RouterConfig } from '@nuxt/schema'

export default {
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: () => import('~/pages/index.vue')
    },
    {
      name: 'order',
      path: '/order',
      component: () => import('~/pages/order.vue')
    },
    
  ],
} satisfies RouterConfig
