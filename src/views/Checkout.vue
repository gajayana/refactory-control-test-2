<template>
  <div class="bg-gray-100 flex items-center justify-center h-screen w-full">
    <div class="flex flex-col w-full max-w-sm">
      <div class="mb-4 shadow-lg p-4">
        <h1 class="text-2xl text-center">Kasbon</h1>
        <div class="flex flex-col">
          <div v-for="(item, key) in uniqueItems" :key="key">

          </div>
          <div class="flex items-center">
            <button class="bg-indigo-700 text-white">Cetak Kasbon</button>
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
export default {
  computed: {
    ...mapGetters({
      items: 'carts/items'
    }),
    uniqueItems() {
      return [ ...new Set(this.items) ]
    },
  },
  methods: {
    ...mapMutations({
      reset: 'carts/reset'
    }),
    quantity(item) {
      return this.items.filter(ob => ob.id === item.id).length
    },
    itemPrice(item) {
      return item.price * this.quantity(item)
    },
  }
}
</script>
