import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/middlewares/auth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        middleware: [
          auth
        ]
      },
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      meta: {
        middleware: [
          auth
        ]
      },
      component: () => import(/* webpackChunkName: "checkout" */ './views/Checkout.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    }
  ]
})
