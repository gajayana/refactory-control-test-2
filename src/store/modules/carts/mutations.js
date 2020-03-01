export default {
  add(state, payload) {
    state.items.push(payload)
  },
  substract(state, payload) {
    const index = state.items.findIndex( ob => ob.id === payload.id )
    if ( index > -1 ) state.items.splice(index, 1)
  },
  remove(state, payload) {
    state.items = state.items.filter( ob => ob.id !== payload.id )
  },
  reset(state) {
    state.items = []
  },
}
