<template>
  <div v-if="items" class="border-b border-solid border-gray-400 flex mb-4 py-4 w-full">
    <router-link
      v-for="item in menus"
      :key="item.key"
      :to="item.to"
      class="menu-item"
    >
      {{ item.label }}
    </router-link>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      items: 'groups/categories'
    }),
    menus() {
      let res = this.items.map( (ob) => ({
        key: ob,
        label: ob.charAt(0).toUpperCase() + ob.slice(1),
        to: '/?kategori=' + ob,
      }))

      res.unshift({
        key: 'all',
        label: 'Semua',
        to: '/',
      })

      return res
    }
  }
}
</script>
