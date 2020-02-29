import Vue from 'vue'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './assets/tailwind.css'

Vue.config.productionTip = false
Vue.use(VueCookies)

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) return next()

  const middleware = to.meta.middleware

  const context = {
    to,
    from,
    next,
    store,
  }
  return middleware[0]({
    ...context
  })

})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
