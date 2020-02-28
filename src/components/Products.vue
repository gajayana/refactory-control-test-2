<template>
  <div v-if="items" class="grid grid-cols-4 gap-4">
    <div v-for="item in filteredItems" :key="'product-' + item.id" class="flex flex-col bg-white overflow-hidden rounded shadow">
      <div
        class="bg-center bg-cover bg-gray-100 bg-no-repeat flex flex-grow-0"
        :style="[
          { backgroundImage: 'url(' + item.image + ')' },
          { paddingBottom: '66.67%' },
        ]"
      ></div>
      <div class="flex flex-col justify-between p-2">
        <div class="flex flex-col">
          <h2 class="flex items-center leading-tight mb-2">
            <span class="font-bold text-base">{{ item.name }}</span>
            <span class="bg-yellow-700 ml-1 leading-none rounded-full px-3 py-1 text-white text-xs">{{ item.category }}</span>
          </h2>
          <p class="mb-2 text-sm">{{ item.description }}</p>
          <span class="block font-bold mb-3">Rp {{ item.price | digitGrouping }}</span>
        </div>
        <div class="flex">
          <button @click="add(item)" class="bg-indigo-700 leading-none rounded px-4 py-2 text-white w-full">Masuk Troli</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import digitGrouping from '@/mixins/filters/digitGrouping'
export default {
  mixins: [
    digitGrouping,
  ],
  computed: {
    ...mapGetters({
      cartItems: 'carts/items',
      items: 'products/items',
    }),
    filteredItems() {
      if ( !this.$route.query.hasOwnProperty('kategori') ) return this.items
      return this.items.filter( ob => ob.category === this.$route.query.kategori )
    }
  },
  methods: {
    ...mapMutations({
      addToCart: 'carts/add'
    }),
    add(item) {
      this.addToCart(item)
    }
  },
}
</script>
