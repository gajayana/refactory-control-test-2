export default {
  menus(state) {
    if ( !state.categories ) return

    let res = state.categories.map( (ob) => ({
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
