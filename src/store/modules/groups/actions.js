import axios from 'axios'

export default {
  async fetch( { commit } ) {
    try {
      const items = await axios.get('http://localhost:3000/categories')
      commit('setCategories', items.data)
    } catch (error) {
      window.alert(error)
    }

  }
}
