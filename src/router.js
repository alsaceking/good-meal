import Vue from 'vue'
import Router from 'vue-router'
import Order from '@/views/Order.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/order'
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/pay',
      name: 'pay',
      component: () => import('@/views/Pay.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('@/views/Message.vue')
    },
    {
      path: '/user',
      name: 'user',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/User.vue')
    }
  ]
})
