export default function auth ({next}) {
  if ( !window.$cookies.isKey('user') || window.$cookies.get('user') !== process.env.VUE_APP_USER) {
    return next({
      name: 'login'
   })
  }

  next()
}
