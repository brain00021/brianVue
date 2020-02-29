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
      urls:[
        {
          title:' Monster Mask Festival adverstments RWD visual',
          url: require('@assets/events/mosiamask/index_all.jpg')
        },
        {
          title:' Monster Mask Festival adverstments full page',
          url: require('@assets/events/mosiamask/all_mask.jpg')
        },
      ]
    }
  }
};
</script>
