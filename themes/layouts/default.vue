<template lang="pug">
  div
    //- publicDialog(:visible="modalVisible", :openEvent="modalOpen", :closeEvent="modalClose", :closedEvent="modalClosed" :class="{diaglogBg: modalVisible}")
    #app
      Header
      .content-wrapper
        nuxt
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
