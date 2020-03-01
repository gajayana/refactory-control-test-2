<template>
  <div v-if="uniqueItems">
    <!-- start: cart items -->
    <div v-for="(item, key) in uniqueItems" :key="'cart-item' + key" class="bg-white mb-3 p-4 shadow">
      <div class="flex justify-between mb-2">
        <span>{{ item.name }}</span>
        <span class="font-bold">Rp {{ itemCumulativePrice(item) | digitGrouping}}</span>
      </div>
      <div class="flex justify-between">
        <button @click.prevent="cancel(item)" class="border border-solid border-gray-300 font-bold px-3 py-1">Batal</button>
        <div class="flex items-center">
          <button @click.prevent="add(item)" class="border border-solid border-gray-300 font-bold px-3 py-1">+</button>
          <span class="px-3 py-1">{{ itemCumulativeQuantity( item ) }}</span>
          <button @click.prevent="substract(item)" class="border border-solid border-gray-300 font-bold px-3 py-1">-</button>
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
      itemCumulativeQuantity: 'carts/itemCumulativeQuantity',
      itemCumulativePrice: 'carts/itemCumulativePrice',
      totalPrice: 'carts/totalPrice',
      uniqueItems: 'carts/unique',
    }),
  },
  methods: {
    ...mapMutations({
      add: 'carts/add',
      cancel: 'carts/remove',
      substract: 'carts/substract',
    }),
  }
}
</script>
