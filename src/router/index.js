import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Product',
      name: 'Product',
      component: () => import('../views/Product.vue')
    },
    {
      path: '/Loging',
      name: 'Loging',
      component: () => import('../views/Loging.vue')
    },
    {
      path: '/voucher',
      name: 'voucher',
      component: () => import('../views/voucher.vue')
    },
    {
      path: '/notfound',
      name: 'notfound',
      component: () => import('../views/notfound.vue')
    }
  ]
})

export default router
