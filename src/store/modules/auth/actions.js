import axios from 'axios'
import router from '@/router'
export default {
  async fetch( { commit }, id ) {
    try {
      const res = await axios.get( 'http://localhost:3000/users/' + id )
      commit('setUser', res.data)
    } catch (error) {
      window.alert(error)
    }
  },
  async login( { dispatch }, payload ) {
    try {
      const res = await axios.get('http://localhost:3000/users?name=' + payload.name + '&password=' + payload.password + '&_limit=1')
      const user = res.data[0]

      dispatch( 'fetch', user.id )
      window.$cookies.set('user', user.id)
      router.push('/')

    } catch (error) {
      window.alert(error)
    }
  },
  async logout( { commit} ) {
    window.$cookies.remove('user')
    commit('setUser', '')
    router.push('/login')
  }
}
