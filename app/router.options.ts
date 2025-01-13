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
      name: 'services',
      path: '/services',
      component: () => import('~/pages/services.vue')
    },
    {
      name: 'order',
      path: '/services/:service/order',
      component: () => import('~/pages/order.vue')
    },
    {
      name: 'blog',
      path: '/blog',
      component: () => import('~/pages/blog/index.vue')
    },
    {
      name: 'showArticle',
      path: '/blog/:id/:slug',
      component: () => import('~/pages/blog/[id][slug].vue')
    },
    
  ],
} satisfies RouterConfig
