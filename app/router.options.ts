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

    {
      name: 'profile',
      path: '/profile',
      component: () => import('~/pages/profile/index.vue'),
      meta: {layout: 'profile', middleware: 'auth'}
    },
    {
      name: 'profile.services',
      path: '/profile/services',
      component: () => import('~/pages/profile/services/index.vue'),
      meta: {layout: 'profile', middleware: 'auth'}
    },
    {
      name: 'profile.services.details',
      path: '/profile/services/:id/details',
      component: () => import('~/pages/profile/services/[id].vue'),
      meta: {layout: 'profile', middleware: 'auth'}
    },
    {
      name: 'profile.addresses',
      path: '/profile/addresses',
      component: () => import('~/pages/profile/address.vue'),
      meta: {layout: 'profile', middleware: 'auth'}
    },
    {
      name: 'profile.notifications',
      path: '/profile/notifications',
      component: () => import('~/pages/profile/notifications.vue'),
      meta: {layout: 'profile', middleware: 'auth'}
    },
    {
      path: '/menu/:slug+',
      name: 'menu',
      component: () => import('~/pages/menu/[...slug].vue'),
    },
    {
      path: '/hire',
      name: 'hire',
      component: () => import('~/pages/hire.vue'),
    },
    
  ],
} satisfies RouterConfig
