<template lang="pug">
  .header-popup
    .article
      h4 My job:
      ul
        li UI/UX Wireframe/MOCKUP.
        li Layout RWD WEBDESIGN FROM PSD To html.
        li Cooperate Back End developer for API
      div(v-for="image in urls")
        b {{ image.title}}
        div
          el-image(:src="image.url")
</template>

<script>

export default {
  name: 'MonsterSport',
  data(){
    return{
      article: false,
      dialogpassword: '',
      alertmessage: false,
      urls:[
        {
          title:' Monster Sport RWD visual',
          url: require('@assets/events/sport/sport-rwd-design.jpg')
        },
        {
          title:' Monster Sport full page',
          url: require('@assets/events/sport/sport-rwd-design-02.jpg')
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
