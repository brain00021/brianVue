<template lang="pug">
  .header-popup
    .article
      h4 My Job:
      ul
        li UI/UX Wireframe/MOCKUP.
        li Coding Interface and Interaction
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
          title:'Member Setting',
          url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/19d6fc93020391.5e5a1aa0ea024.jpg'
        },
        {
          title:'Accounting History',
          url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c902d393020391.5e5a1aa0e9966.jpg'
        },
        {
          title:'Member Card',
          url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5e1fa893020391.5e5a1aa0ea682.jpg'
        },
        {
          title:'Lottery',
          url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/abe7fc93020391.5e5a1aa0e9269.jpg'
        }
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
