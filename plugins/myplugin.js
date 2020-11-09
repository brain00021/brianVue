export default ({ app, store,route, params, error, redirect  }) => {
  const defaultLocale = store.getters.getLocale
  debugger;
  // Get localized path for homepage
  const localePath = app.localePath('index')
  // Get path to switch current route to French
  const switchLocalePath = app.switchLocalePath('en')
  debugger
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    console.log(oldLocale, newLocale)
    store.dispatch('setLang', newLocale);
  }
  const locale = params.lang || defaultLocale
  if (route.fullPath.indexOf('/') === 0) {
    const toReplace = '/' + defaultLocale + (route.fullPath.indexOf('/' + defaultLocale + '/') === 0 ? '/' : '')
    const re = new RegExp(toReplace)
    return redirect(
      route.fullPath.replace(re, '/')
    )
  }
}