<template lang="pug">
  .header-popup
    span(v-show='!loading') Please hold on 5 seconds loading
    iframe(
      v-show='loading'
      src='https://medium.com/@brianli_42376/monster-village-e-commerce-project-8fdb6379d150?source=friends_link&sk=1da80a3a6365a404e88eeb423fbf8a66')
</template>

<script>
import $ from 'jquery';
export default {
  name: 'Ecommerceshop',
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
