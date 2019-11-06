<template lang="pug">
  .header-popup
    span(v-show='!loading') Please hold on 5 seconds loading
    iframe#test(
      v-show='loading'
      src='https://medium.com/@brianli_42376/%E5%A6%96%E6%80%AA%E6%9D%91%E5%A4%A7%E6%A8%82%E9%80%8F-%E8%A3%BD%E4%BD%9C%E6%B5%81%E7%A8%8B-107b3400c3f8?source=friends_link&sk=33212fa055e62c22f9d1e32d2da13d71')
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
