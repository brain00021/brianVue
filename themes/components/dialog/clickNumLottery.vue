<template lang="pug">
  .header-popup
    .article
      h3 2015 CLick Num Advertising Website.
      h4 My responsibility in the project.
      ul
        li UI/UX Wireframe/MOCKUP.
        li Layout RWD WEBDESIGN FROM PSD To Html.
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
          title:' Click Num Website Home Page',
          url:'https://mir-s3-cdn-cf.behance.net/project_modules/fs/4e432987785435.5dc2b867cf5b8.jpg'
        },
        {
          title:' Click Num Website UserInterface Process',
          url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/baa84687785435.5dc2bc7cd86bf.jpg'
        },
        {
          title:' Click Num Website UserInterface Process',
          url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ce8c9587785435.5dc2bc7cd8cef.jpg'
        },
      ]
    }
  }
};
</script>
