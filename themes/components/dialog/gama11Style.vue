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
      h4 My Job
        li Design/Layout RWD web design FROM PSD To html.
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
  name: 'Gama15Style',
  data(){
    return{
      article: true,
      dialogpassword: '',
      alertmessage: false,
      urls:[
        {
          title:'Style 11 Home Page',
          url: require('@assets/events/OCMS/gamebling/FISHER/style01.jpg')
        },
        {
          title:'Slot Page',
          url:require('@assets/events/OCMS/gamebling/FISHER/style02.jpg')
        },
        {
          title:'Sport Page',
          url:require('@assets/events/OCMS/gamebling/FISHER/style03.jpg')
        },
        {
          title:'MobMenu / GameOpenPopup / Wallet / Promtion Page ',
          url:require('@assets/events/OCMS/gamebling/FISHER/style04.jpg')
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
