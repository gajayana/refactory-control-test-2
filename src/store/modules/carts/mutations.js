import findLastIndex from 'lodash/findLastIndex'

export default {
  add(state, payload) {
    state.items.push(payload)
  },
  substract(state, payload) {
    const index = findLastIndex( state.items, ob => ob.id === payload.id )
    state.items.splice(index, 1)
  },
  remove(state, payload) {
    state.items = state.items.filter( ob => ob.id !== payload.id )
  },
  reset(state) {
    state.items = []
  },
}
