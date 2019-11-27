<template lang="pug">
  .aboutus-wrapper
    .resume
      .left
        .decoration
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
                  li Strong Experience Vue 2.0 and Vuex. .
                  li Partner with Back-end developers , experience and visual designers.
                  li Developed CMS layout,template, modification & manipulation.
                  li Proficiency with modern web design concepts such as responsive design and mobile first development, template design & build. 
                  li Demonstrated development experience and mastery of interface design. 
                  li Good understanding of the principles of web accessibility and user centered design.
            li.year
              | 2014
              ul
                li
                  h4 Taiwan Monster Village Hotel
                  h5 
                    b Front-end designer 
                ol
                  li Mockup the layout of the hotel booking website.
                  li Developed activity website. (Lottery, Slot Machine, Online Shopping Website,etc..)
                  li Partner with Back-end developers , experience and visual designers
                  li Strong Experience for Boostrap, Ajax and Wordpress, SASS, Pug , jQuery.
            li.year
              | 2013
              ul
                li 
                  h4 Gameflier Online game
                  h5 
                    b Web designer 
                ol
                  li Mockup and Layout online game website.
                  li Demonstrated development experience and mastery of interface design.
                  li Cross-browser compatibility experience for all major browser.
                  li Worked on digital activities projects include HTML5/Flash banner and eDM.
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
