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
      h4 My job :
      ul
        li Designer and Coding RWD page FROM PSD To html.
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
  name: 'Gama02Style',
  data(){
    return{
      article: false,
      dialogpassword: '',
      alertmessage: false,
      urls:[
        {
          title:'Gamebling02 Style for different color',
          url: require('@assets/events/OCMS/gamebling/v2/v2-01.jpg')
        },
        {
          title:'Index Page',
          url:require('@assets/events/OCMS/gamebling/v2/v2-index-01.jpg')
        },
        {
          title:'Login Popup',
          url:require('@assets/events/OCMS/gamebling/v2/v2-index-03.jpg')
        },
        {
          title:'SignUp',
          url:require('@assets/events/OCMS/gamebling/v2/v2-index-04.jpg')
        },
        {
          title:'Wallet Popup',
          url:require('@assets/events/OCMS/gamebling/v2/v2-index-05.jpg')
        },
        {
          title:'Promtion Page',
          url:require('@assets/events/OCMS/gamebling/v2/v2-index-06.jpg')
        },
        {
          title:'Promtion Page',
          url:'https://media.giphy.com/media/gdTeHW70w8nbf9S57W/giphy.gif'
        },
        {
          title:'CreditCard Function',
          url:'https://media.giphy.com/media/J1WPuhagVHJSxl36OR/giphy.gif'
        },
        {
          title:'CreditCard Function error1',
          url:require('@assets/events/OCMS/gamebling/v2/credit-card-erro1.png')
        },
        {
          title:'CreditCard Function error2',
          url:require('@assets/events/OCMS/gamebling/v2/credit-card-error2.png')
        },
        {
          title:'CreditCard Function',
          url:'https://media.giphy.com/media/J1WPuhagVHJSxl36OR/giphy.gif'
        },
      ]
    }
  },
  methods: {
    check(){
      console.log('ji');
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
