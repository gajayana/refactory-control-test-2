import axios from 'axios'

export default {
  async fetch( { commit } ) {
    const items = await axios.get('http://localhost:3000/products')
    commit('setItems', items.data)
  }
}
