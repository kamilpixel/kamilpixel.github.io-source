import { createRouter, createWebHistory } from 'vue-router'
const PortfolioView = () => import('@/views/PortfolioView.vue')
const AboutView = () => import('@/views/AboutView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PortfolioView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/example',
      name: 'example',
      component: () => import('../views/HomeView.vue'),
    },

  ],
})

export default router
