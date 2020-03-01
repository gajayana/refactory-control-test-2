<template>
  <div class="bg-gray-100 flex items-center justify-center h-screen w-full">
    <div class="flex flex-col w-full max-w-sm">
      <div class="mb-4 shadow-lg p-4">
        <h1 class="text-2xl text-center">Kasbon</h1>
        <div v-if="uniqueItems" class="flex flex-col">
          <div v-for="(item, key) in uniqueItems" :key="key" class="flex flex-col mb-4">
            <h3 class="font-bold">{{ item.name }}</h3>
            <div class="flex justify-between">
              <span>{{ itemCumulativeQuantity(item) }} x Rp {{ item.price | digitGrouping }}</span>
              <span>Rp {{ itemCumulativePrice(item) | digitGrouping }}</span>
            </div>
          </div>
          <div class="border-t border-solid border-gray-400 flex justify-between">
            <span class="font-bold">Total</span>
            <span class="font-bold">Rp {{ totalPrice | digitGrouping }}</span>
          </div>
          <div class="flex justify-center">
            <button @click.prevent="print" class="bg-indigo-700 block shadow text-white px-4 py-2 rounded">Cetak Kasbon</button>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <button @click.prevent="$router.push('/')" class="font-bold text-gray-500">Batal</button>
      </div>
    </div>
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
      reset: 'carts/reset'
    }),
    print() {
      this.reset()
      this.$router.push('/')
    },
  }
}
</script>
