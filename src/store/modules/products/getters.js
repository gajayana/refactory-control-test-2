export default {
  items(state) {
    if (typeof state.items === 'string') return
    let res = state.items
    if (state.category) res = state.items.filter( ob => ob.category === state.category )
    return res
  },
}
