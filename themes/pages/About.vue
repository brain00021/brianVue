<template lang="pug">
  .aboutus-wrapper
    .resume
      .left
        h1 Brian Li
        h4 Web developer / Web designer 
        hr
        //- p Link
        //- .buttons
        //-   a.btn.fill(href='http://www.monoame.com', target='_blank') 作品集
        //-   a.btn(href='https://github.com/frank890417', target='_blank') Github
        .block
          h4 Talent
          h2 Advantages
          ul.listSkill
            li
              .circle
                .p90
                .p180
                .p270
                .p360
              | Html/Css/Js
            li
              .circle
                .p90
                .p180
                .p270
                .p360
              | Graphic Design
            li
              .circle
                .p90
                .p180
                .p270
              | Animation Design
            li
              .circle
                .p90
                .p180
                .p270
              | CIS
            li
              .circle
                .p90
                .p180
                .p270
                .p360
              | UI/UX
            li
              .circle
                .p90
                .p180
              | Design Marketing
        .block
          h4 Programming Skill
          h2 Skill
          ul.listProgram
            li
              | Css/Scss/Sass
              .bar
                .value.p100
            li
              | Js/Jquery
              .bar
                .value.p70
            li
              | Vue/Vuex
              .bar
                .value.p70
            li
              | Html/Pug
              .bar
                .value.p80
            li
              | Flash/AfterEffect
              .bar
                .value.p70

      .right
        .decoration
        .block
          h4 My History
          h2 Experience / Works
          ul.listExperience
            li.year
              | 2017
              ul
                li
                  h4 Gama Gambling Technology
                  h5 
                    b Front-end developer 
                ol
                  li Mocked up and designed gambling RWD and layout.
                  li Utilized basic Vue command and VUEX experience.
                  li Also worked extensively with AJAX and GIT.
                  li MVVM
                  li Basic webpack Nuxt.js
            li.year
              | 2014
              ul
                li
                  h4 Taiwan Monster Village Hotel
                  h5 
                    b Front-end designer 
                ol
                  li Mocked up and designed the layout of the guest’s booking website
                  li Designed and mocked up the shopping experience for the guests
                  li Used a variety of skills including Bootstrap, Ajax, JQuery and Wordpress.
            li.year
              | 2013
              ul
                li 
                  h4 Gameflier Online game
                  h5 
                    b Web designer 
                ol
                  li Developed HTML, CSS, &amp; JavaScript skills
                  li Google analysis setting
                  li Designed the website and commercials
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
  .about {
    width:100%;
    p{
      font-size:15px;
    }
  }
</style>
