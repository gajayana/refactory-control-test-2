export default function auth ({next, store}) {
  if ( !window.$cookies.isKey('user') || window.$cookies.get('user') !== process.env.VUE_APP_USER || !store.state.auth.user) {
    return next({
      name: 'login'
   })
  }

  next()
}
