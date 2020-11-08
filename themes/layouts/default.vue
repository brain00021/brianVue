<template lang="pug">
  #app
    .dropdown-wrapper
      el-dropdown(type="primary")
        span.el-dropdown-link
          | {{lang}}
          i.el-icon-arrow-down.el-icon--right
        el-dropdown-menu(slot='dropdown')
          el-dropdown-item
            nuxt-link(:to="switchLocalePath('en')" @click.native="langSet('ENGLISH')") English
          el-dropdown-item
            nuxt-link(:to="switchLocalePath('cn')" @click.native="langSet('繁體中文')") 繁體中文
    Header
    .content-wrapper
      nuxt
      .footer
        span Brian Design ©copy right 2019
</template>

<script>
import Header from '@themes/components/header.vue'
import publicDialog from '@themes/components/dialog/public';


export default {
  components: {
    Header,
    publicDialog,
  },
    data () {
    return {
      lang: 'ENGLISH'
    }
  },
  methods: {
   langSet(value){
      this.lang = value
    }
  }
}
</script>
