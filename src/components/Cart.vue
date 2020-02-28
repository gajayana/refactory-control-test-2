<template>
  <div v-if="items.length > 0">
    <!-- start: cart items -->
    <div v-for="(item, key) in uniqueItems" :key="'cart-item' + key" class="bg-white mb-3 p-4 shadow">
      <div class="flex justify-between mb-2">
        <span>{{ item.name }}</span>
        <span class="font-bold">Rp {{ itemPrice(item) | digitGrouping}}</span>
      </div>
      <div class="flex justify-between">
        <button @click="cancel(item)" class="border border-solid border-gray-200 font-bold px-2">Batal</button>
        <div class="flex items-center">
          <button @click="add(item)" class="border border-solid border-gray-200 font-bold px-2">+</button>
          <span class="px-2">{{ quantity( item ) }}</span>
          <button @click="substract(item)" class="border border-solid border-gray-200 font-bold px-2">-</button>
        </div>
      </div>
    </div>
    <!-- end: cart items -->

    <!-- start: total -->
    <div class="flex justify-between mb-3">
      <h3 class="font-bold text-2xl">Total</h3>
      <span class="font-bold text-2xl">Rp {{ totalPrice | digitGrouping }}</span>
    </div>
    <!-- end: total -->

    <!-- start: checkout button -->
    <div>
      <router-link class="bg-indigo-700 block shadow text-white py-2 rounded text-center w-full uppercase" to ="/checkout">Lapor Keluar</router-link>
    </div>
    <!-- end: checkout button -->
  </div>

  <div v-else>
    Troli Kosong
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import digitGrouping from '@/mixins/filters/digitGrouping'
export default {
  mixins: [
    digitGrouping
  ],
  computed: {
    ...mapGetters({
      items: 'carts/items'
    }),
    totalPrice() {
      return this.items.reduce( (a, b) => {
        return a + b.price
      }, 0)
    },
    uniqueItems() {
      return [ ...new Set(this.items) ]
    },
  },
  methods: {
    ...mapMutations({
      addItemToCart: 'carts/add',
      cancelItemInCart: 'carts/remove',
      substractItemFromCart: 'carts/substract',
    }),
    add(item) {
      this.addItemToCart(item)
    },
    cancel(item) {
      this.cancelItemInCart(item)
    },
    quantity(item) {
      return this.items.filter(ob => ob.id === item.id).length
    },
    itemPrice(item) {
      return item.price * this.quantity(item)
    },
    substract(item) {
      this.substractItemFromCart(item)
    }
  }
}
</script>
