<template lang="pug">
div
  button.el-button(type="text" @click="openDialog('login')" style="z-index:150; position:relative;") 確定是ｌｏｇｉｎ
  button.el-button(type="text" @click="openDialog('profile2')" style="z-index:150; position:relative;") 確定是profile2
  el-dialog(title='提示', :visible.sync='dialogVisible', width='30%', :before-close='handleClose')
    span 这是一段信息
    component(:is="componentName", ref="dialogComponent")
    span.dialog-footer(slot='footer')
      el-button(@click='dialogVisible = false') 取 消
      el-button(type='primary', @click='dialogVisible = false') 确 定
  .index-wrapper
    el-row
      el-col.banner(:sm='24' :md="10")
        #index-banner
          img(src="@assets/index-banner.png")
        #index-banner-detail
          h1 Brian Li Design
          h4 I am 
            b.change-title
            b.splite |
          h6 2013 - 2019
      el-col(:sm='24' :md="16")
        ul.profile-article
          li(v-for="item in profile")
            a(@click="openDialog(item.name)")
              span.title {{ item.title }}
              img(:src="require(`@assets/${item.img}`)")

</template>
<script>
import $axios from 'axios';
const dataUrl = require('@assets/data/profile.json');
import dialogComponents from '@themes/components/dialog/index';

export default {
  components: {
    ...dialogComponents,
  },
  data () {
    return {
      profile:[],
      baseUrl: process.env.VUE_APP_BASE_URL,
      dataSwtich:true,
      componentName: 'login',
      dialogVisible: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.GetProfile()
    })
  },
  methods:{
    GetProfile: async function () {
      try{
        let res = await $axios.get(dataUrl);
        this.profile = res.config.url.events;
        this.dataSwtich = true;
      }
      catch(res) {
        alert('目前沒有提供任何資料');
      }
    },
    openDialog(data){
      debugger;
      this.dialogVisible = true;
      this.componentName = data;
    },
    profileDialog(data){
      debugger;
      this.$emit('openDialog', data);
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
}
</script>
<style lang="scss" scoped>
.change-title::after{
  content:'';
  display: inline;
  color: #000;
  animation: write 10s linear infinite;
  animation-fill-mode: forwards;
}
.splite{
  position:relative;
  animation: flash 0.2s linear infinite;
}
@keyframes  flash {
  0%{
    opacity: 0;
  }
 50%{
    opacity: 1;
  }

}
@keyframes write {
  1% {
    content:'D';
  }
  2% {
    content:'De';
  }
  3% {
    content:'Des';
  }
  4% {
    content:'Desi';
  }
  5% {
    content:'Desig';
  }
  6% {
    content:'Design';
  }
  7% {
    content:'Designe';
  }
  8% {
    content:'Designer';
  }
  
  14% {
    content:'Designer';
  }
  14.5% {
    content:'Designe';
  }
  15% {
    content:'Design';
  }
  15.5% {
    content:'Desig';
  }
  16% {
    content:'Desi';
  }
  16.5% {
    content:'Des';
  }
  17% {
    content:'De';
  }
  17.5% {
    content:'D';
  }
  18% {
    content:'';
  }
  20% {
    content:'D';
  }
  21% {
    content:'De';
  }
  22% {
    content:'Dev';
  }
  23% {
    content:'Deve';
  }
  24% {
    content:'Devel';
  }
  25% {
    content:'Develo';
  }
  26% {
    content:'Develop';
  }
  27% {
    content:'Develope';
  }
  28% {
    content:'Developer';
  }
  34% {
    content:'Developer';
  }
  35.5% {
    content:'Develope';
  }
  36% {
    content:'Develop';
  }
  36.5% {
    content:'Develo';
  }
  37% {
    content:'Devel';
  }
  37.5% {
    content:'Deve';
  }
  38% {
    content:'Dev';
  }
  38.5% {
    content:'De';
  }
  39% {
    content:'D';
  }
  39.5% {
    content:'';
  }
  42% {
    content:'';
  }
  43% {
    content:'';
  }
  44% {
    content:'F';
  }
  45% {
    content:'Fr';
  }
  46% {
    content:'Fro';
  }
  47% {
    content:'Fron';
  }
  48% {
    content:'Front';
  }
  49% {
    content:'FrontE';
  }
  50% {
    content:'FrontEn';
  }
  51% {
    content:'FrontEnd';
  }
  52% {
    content:'FrontEnd ';
  }
  52% {
    content:'FrontEnd D';
  }
  53% {
    content:'FrontEnd De';
  }
  54% {
    content:'FrontEnd Dev';
  }
  55% {
    content:'FrontEnd Deve';
  }
  56% {
    content:'FrontEnd Devel';
  }
  57% {
    content:'FrontEnd Develo';
  }
  58% {
    content:'FrontEnd Develop';
  }
  59% {
    content:'FrontEnd Develope';
  }
  60% {
    content:'FrontEnd Developer';
  }
  100% {
    content:'FrontEnd Developer';
    opacity: 1;
  }
}
</style>
