<template lang="pug">
div
  el-dialog(:title='dialogTitle', :visible.sync='dialogVisible', width='90%', top='1%')
    component(:is="componentName", ref="dialogComponent")
    .dialog-header(slot='title')
      h2 {{dialogTitle}}
      .dialog-header-image(v-if="dialogType !== 'iframe'")
        el-image(:src="dialogImgRender")
    .dialog-footer(slot='footer')
      el-button.dialog-cancel(type='primary', @click='dialogVisible = false') CANCEL
      el-button(v-if="dialogUrl['activate'] == true" type='success' @click="linkUrl(dialogUrl['linkurl'])") Go To Website
  .index-wrapper
    .banner(class="animated fadeIn", :class="[{'fadeOut':dialogVisible}]")
      // #index-banner
      //   img(src="@assets/index-banner.png")
      #index-banner-detail
        h1 BRIAN LI DESIGN
        h4 I am a 
          b.change-title
          b.splite |
        h6 2013 - 2019
    .profile(class="animated",:class="[{'fadeOut':dialogVisible}]")
      h2 {{ $t(currentTitle)}}
      ul.profile-article(:class="[{'extendAtricle':!profileButton}]")
        template(v-for="(item,index) in displayProfile")
          li(v-if="item.type==='samllproject' || item.type==='articlelink'")
            a(:href="item.url" target="_blank")
              img(:src="item.type !=='articlelink'? item.img : require(`@assets/${item.img}`)")
            span
              b.title {{ $t(item.title) }}
              b.date {{ item.date}}
          li(:class="`delay-${index%6+1}s`" class="animated fadeIn" v-else)
            a(@click="openDialog(item.name,item.title,item.link,item.img,item.type)")
              img(:src="item.type==='url'? item.img : require(`@assets/${item.img}`)")
              img(:src="item.img" v-if="item.type == 'url'")
            span
              b.title {{ $t(item.title) }}
              b.date {{ item.date}}
      .more(v-if='profileButton' @click='profileMore') MORE

</template>
<script>
import $axios from 'axios';
import {isUndefined} from 'lodash';
const dataUrl = require('@assets/data/profile.json');
import { mapState, mapGetters, mapActions } from 'vuex';
import dialogComponents from '@themes/components/dialog/index';

export default {
  name: "IndexPage",
  components: {
    ...dialogComponents,
  },
  data () {
    return {
      profile:[],
      baseUrl: process.env.VUE_APP_BASE_URL,
      dataSwtich:true,
      componentName: 'login',
      dialogVisible: false,
      dialogTitle: 'default title',
      dialogImg:'',
      dialogUrl:{},
      dialogType:'',
      scroll:true,
    }
  },
  computed:{
    ...mapGetters(['currentProfile','displayProfile','profileButton']),
    ...mapState(["currentFliter","currentTitle"]),
    dialogImgRender(){
      let url = this.dialogImg || 'https://';
      if(url.slice(0,8)=='https://'){
         return url;
      }else{
        return require(`@assets/${url}`);
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      // this.ChangeFliter();
    })
  },
  async created(){
    await this.GetProfile()
    await this.displayDistrice();
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods:{
     ...mapActions(['GetProfile','profileMore','displayDistrice']),
    async ChangeFliter(e) {
      await this.$store.dispatch('fliterProfile',e);
      this.displayDistrice();
    },
    openDialog(name,title,link,img,type){
      this.dialogVisible = true;
      this.componentName = name;
      this.dialogTitle = title;
      this.dialogImg = img;
      this.dialogType = type;
      if(isUndefined(link)){
        this.dialogUrl = { "linkurl":"javascript:void(0)", "activate":false}
      }else{
        this.dialogUrl = link 
      };
    },
    linkUrl(val){
      window.open(`${val}`, "_blank");
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleScroll() {
      let banner = document.querySelector('.banner');
      let {top,bottom} = banner.getBoundingClientRect();
      let profileEl = document.querySelectorAll('.profile li')
      let profileArray = Array.from(profileEl);
      let height = document.documentElement.clientHeight;
      let windowScroll = Math.floor(document.documentElement.scrollTop);
      if(windowScroll > 0){
        banner.classList.add('fadeOut');
      }else{
        banner.classList.remove('fadeOut')
      }
      profileArray.map(function(e){
        
       
        let {top,bottom} = e.getBoundingClientRect();
        if(top < height/2 && bottom > height/2){
          e.classList.add('active');
        }else{
          e.classList.remove('active')
        }

      });
      // if(windowScroll > height-50){
      //   debugger;
      //   this.pageNum++;
      //   this.displayDistrice();
      // }

      // this.scrolled = window.scrollY > 100;
    }
  }

}
</script>
<style lang="scss" scoped>
.el-dialog__body{
  padding:0;
}
.el-dialog__header{
  padding-bottom:0;
}

.change-title::after{
  content:'FrontEnd Developer';
  display: inline;
  font-size:1.8rem;
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
