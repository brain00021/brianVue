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
          title:' Monster Taiwan Polite adverstments Phone visual',
          url: require('@assets/events/vote/phone.jpg')
        },
        {
          title:' Monster Taiwan Polite adverstments full page',
          url: require('@assets/events/vote/vote2.jpg')
        },
      ]
    }
  }
};
</script>
