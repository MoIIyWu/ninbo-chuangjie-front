import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      component: () => import('@/views/about.vue'),
    },
    {
      path: '/news',
      component: () => import('@/views/news.vue'),
    },
    {
      path: '/products',
      component: () => import('@/views/products.vue'),
    },
    {
      path: '/application',
      component: () => import('@/views/application.vue'),
    },
    {
      path: '/contact',
      component: () => import('@/views/contact.vue'),
    },
  ],
})
export default router
