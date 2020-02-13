<template lang="pug">
  #app
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
}
</script>
