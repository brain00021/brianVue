<template lang="pug">
  .header-popup
    span(v-show='!loading') Please hold on 5 seconds loading
    iframe#test(
      v-show='loading'
      src='https://medium.com/@brianli_42376/%E6%89%80%E4%BB%A5%E6%88%91%E5%80%91%E5%8F%88%E9%96%8B%E5%A7%8B%E8%A8%88%E5%8A%83%E5%8F%A6%E5%A4%96%E4%B8%80%E5%80%8B%E8%B3%AD%E5%8D%9A%E9%81%8A%E6%88%B2%E4%BE%86%E9%81%8A%E6%A8%82%E4%BA%86-429f270d22c4?source=friends_link&sk=66cb20310f28f87e6faf6b3533fbfd22')
</template>

<script>
import $ from 'jquery';
export default {
  name: 'LoginDialog',
  data(){
    return{
      loading:false,
    }
  },
  mounted(){
    this.$nextTick(()=>{
      $('#test').ready(()=>{
        this.loading = true;
      });
    });
  }
};
</script>
