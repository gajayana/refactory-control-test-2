import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/modules/auth'
import carts from '@/store/modules/carts'
import groups from '@/store/modules/groups'
import products from '@/store/modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    carts,
    groups,
    products,
  },
})
