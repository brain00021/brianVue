<template lang="pug">
  .header-popup
    span.redtips(v-show='!article') This project has businees relative, this dialog is only for Customer reviews
    span.redtips(v-show='!article') Password:1234
    div(v-if='!article')
      .passwordfield
        el-input(v-model='dialogpassword' @keyup.enter.native="check" show-password placeholder='Please Enter Passowrd')
        el-button( @click="check") Submit
      el-alert(v-show='alertmessage' title="Please Enter Correct Password" type="error" @close='alertmessage = false')
    .article(v-if='article')
      h4 My job:
      ul
        li Layout RWD WEB DESIGN FROM PSD To html.
        li Demonstrated development experience and mastery of interface design.
        li Cross-browser compatibility experience for all major browser. 
        li Cooperate with back-end developer and UI/UX designer.
      .flex-wrapper
        div(v-for="image in urls")
          b {{ image.title}}
          div
            el-image(:src="image.url")
</template>

<script>

export default {
  name: 'Gama13Style',
  data(){
    return{
      article: true,
      dialogpassword: '',
      alertmessage: false,
      urls:[
        {
          title:'Style 13 Home Page',
          url: require('@assets/events/OCMS/gamebling/TGI/style01.jpg')
        },
        {
          title:'Slot Page',
          url:require('@assets/events/OCMS/gamebling/TGI/style02.jpg')
        },
        {
          title:'Sport Page',
          url:require('@assets/events/OCMS/gamebling/TGI/style03.jpg')
        },
        {
          title:'Wallet / MobMenu',
          url:require('@assets/events/OCMS/gamebling/TGI/style04.jpg')
        },
      ]
    }
  },
  methods: {
    check(){
      let password = parseInt(this.dialogpassword);
      if(password == 1234){
        this.article = true;
      }else{
        this.article = false;
        this.alertmessage = true;
        this.dialogpassword = '';
      }
    }
  }
};
</script>
