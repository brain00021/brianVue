<template lang="pug">
  .header-popup
    .article
      h3 2016 Monster Ghost Festival.
      h4 My responsibility in the project.
      ul
        li UI/UX Wireframe/MOCKUP.
        li Layout RWD WEBDESIGN FROM PSD To html.
      p In the Ghost Festival, We created two different activities make customer to join in the village.this is project for my project proecss and business funtional.
      .flex-wrapper
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
      urls:[
        {
          title:' Ghost Festival Website ',
          url: require('@assets/events/monsia/image4.jpg')
        },
        {
          title:' Seeking Monster App ',
          url:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/52492a91481243.5e32cf9e44503.jpg'
        },
        {
          title:' Seeking Monster App ',
          url: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/8f494991481243.5e32cf9e44f15.jpg'
        },
        {
          title:' Seeking Monster App ',
          url: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/9bb35491481243.5e32cf9e45cb9.jpg'
        },
        {
          title:' Seeking Monster App ',
          url: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/a53cf391481243.5e32cf9e44a69.jpg'
        },
        {
          title:' Seeking Monster App ',
          url: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/e1d21491481243.5e32cf9e464d2.jpg'
        },
        {
          title:' Seeking Monster App ',
          url: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/06625e91481243.5e32cf9e4361b.jpg'
        },
        {
          title:' Seeking Monster App ',
          url: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/c0529391481243.5e32cf9e45432.jpg'
        },
      ]
    }
  }
};
</script>
