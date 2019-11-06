<template lang="pug">
  .header-popup
    span.redtips(v-show='!article') Password:1234
    div(v-if='!article')
      .passwordfield
        el-input(v-model='dialogpassword' show-password placeholder='Please Enter Passowrd')
        el-button(type='primary' @click='check()') Submit
      el-alert(v-show='alertmessage' title="Please Enter Correct Password" type="error" @close='alertmessage = false')
    .article(v-if='article')
      h3 2019 Online gambling website.
      h4 My responsibility in the project.
      ul
        li Layout RWD WEB DESIGN FROM PSD To html.
        li Demonstrated development experience and mastery of interface design.
        li Cross-browser compatibility experience for all major browser. 
        li Cooperate with back-end developer and UI/UX designer.
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
      article: false,
      dialogpassword: '',
      alertmessage: false,
      urls:[
        {
          title:'Style 15 Home Page',
          url: require('@assets/events/OCMS/gamebling/V3/style01.jpg')
        },
        {
          title:'Slot Page',
          url:require('@assets/events/OCMS/gamebling/V3/style02.jpg')
        },
        {
          title:'Sport Page',
          url:require('@assets/events/OCMS/gamebling/V3/style03.jpg')
        },
        {
          title:'LiveGame',
          url:require('@assets/events/OCMS/gamebling/V3/style04.jpg')
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
