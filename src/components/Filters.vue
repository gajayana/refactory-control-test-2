<template>
  <div v-if="menus" class="border-b border-solid border-gray-400 flex mb-4 py-4 w-full">
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
      menus: 'groups/menus'
    })
  }
}
</script>
