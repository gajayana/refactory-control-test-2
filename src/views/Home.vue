<template>
  <div class="w-full">
    <header class="shadow p-4 flex justify-between">
      <h1>3M - Murah Meriah Maregi</h1>
      <button @click="signOut">Keluar</button>
    </header>
    <div class="flex w-full">

      <div class="flex flex-col p-4 w-4/6">
        <filters />
        <products />
      </div>

      <div class="bg-gray-400 p-4 w-2/6">
        <cart/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Cart from '@/components/Cart.vue'
import Filters from '@/components/Filters.vue'
import Products from '@/components/Products.vue'
import { mapActions } from 'vuex'
export default {
  name: 'home',
  components: {
    Cart,
    Filters,
    Products,
  },
  methods: {
    ...mapActions({
      fetchGroups: 'groups/fetch',
      fetchProducts: 'products/fetch',
    }),
    signOut() {
      this.$cookies.remove('user')
      this.$router.push('/login')
    }
  },
  created () {
    this.fetchGroups()
    this.fetchProducts()
  }
}
</script>
