<template>
  <div class="bg-gray-100 flex h-screen items-center justify-center w-full">
    <div class="w-full max-w-xs">
      <div class="bg-white mb-2 p-4 shadow">
        <h1 class="mb-4 text-2xl text-center">Login</h1>
        <form>
          <div v-if="error" class="flex flex-col mb-4">
            <div class="bg-red-200 border border-red-600 border-solid px-4 py-2 rounded">{{ error }}</div>
          </div>
          <div class="flex flex-col mb-4">
            <label class="cursor-pointer font-bold mb-1" for="name">Nama Pengguna</label>
            <input v-model="name" id="name" class="border border-solid px-2 py-1 rounded w-full" type="text" />
          </div>
          <div class="flex flex-col mb-4">
            <label class="cursor-pointer font-bold mb-1" for="password">Sandi</label>
            <input v-model="password" id="password" class="border border-solid px-2 py-1 rounded w-full" type="password" />
          </div>
          <div class="flex justify-center mb-2">
            <button @click.prevent="submit" class="bg-indigo-700 leading-none rounded px-4 py-2 text-white">Masuk</button>
          </div>
        </form>
      </div>
      <p class="text-center text-sm text-gray-500">&copy;2020 - aplikasi karya anak nyamnyam</p>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    error: '',
    name: 'admin',
    password: '1234',
  }),
  methods: {
    submit() {
      if ( this.name !== process.env.VUE_APP_USER || this.password !== process.env.VUE_APP_SECRET) {
        this.error = 'Nama dan/atau sandi tidak cocok.'
        return
      }

      this.$cookies.set('user', this.name)
      this.$router.push('/')
    }
  }
}
</script>
