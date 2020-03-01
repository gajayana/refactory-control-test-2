export default {
  itemCumulativeQuantity: (state) => (item) => {
    return state.items.filter(ob => ob.id === item.id).length
  },
  itemCumulativePrice: (state, getters) => (item) => {
    return item.price * getters.itemCumulativeQuantity(item)
  },
  totalPrice(state) {
    return state.items.reduce( (a, b) => {
      return a + b.price
    }, 0)
  },
  unique(state) {
    if (!state.items.length) return
    let res = [ ...new Set(state.items) ]
    return res.sort( (a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
      return 0
    } )
  },
}
