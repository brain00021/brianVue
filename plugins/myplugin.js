export default ({ app }) => {
  // Get localized path for homepage
  const localePath = app.localePath('index')
  // Get path to switch current route to French
  const switchLocalePath = app.switchLocalePath('en')
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    console.log(oldLocale, newLocale)
    this.$store.dispatch('setLang', newLocale);
  }
}