<template lang="pug">
  .header-popup
    .article
      p it's bitcoin marketing platform.
      h4 My Job:
      ul
        li UI/UX Wireframe/MOCKUP.
        li Layout RWD WEBDESIGN FROM PSD To html.
      div(v-for="image in urls")
        b {{ image.title}}
        div
          el-image(:src="image.url")
</template>

<script>

export default {
  name: 'Alchemycoin',
  data(){
    return{
      article: false,
      dialogpassword: '',
      alertmessage: false,
      urls:[
        {
          title:'Alchcoin',
          url: require('@assets/events/alchcoin/alchcoin.jpg')
        },
        {
          title:'Alchcoin Resposive Web Design',
          url: require('@assets/events/alchcoin/alchoin2.jpg')
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
