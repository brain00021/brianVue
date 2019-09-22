<template lang="pug">
  .aboutus-wrapper
    .resume
      .left
        h1 Brian Li
        h4 Web developer | Web designer 
        hr
        p Link
        .buttons
          a.btn.fill(href='http://www.monoame.com', target='_blank') 作品集
          a.btn(href='https://github.com/frank890417', target='_blank') Github
        .block
          h4 專業技能
          h2 Skills
          ul.listSkill
            li
              .circle
                .p90
                .p180
                .p270
                .p360
              |             html/css/js
            li
              .circle
                .p90
                .p180
                .p270
              |             後端網頁 (laravel)
            li
              .circle
                .p90
                .p180
                .p270
              |             插畫 graphic
            li
              .circle
                .p90
                .p180
                .p270
              |             品牌視覺規劃 (CIS)
            li
              .circle
                .p90
                .p180
                .p270
                .p360
              |             介面/網頁設計 (UI/UX)
            li
              .circle
                .p90
                .p180
              |             AutoCAD製圖/程式開發(Lisp)
            li
              .circle
                .p90
                .p180
                .p270
              |             3D建模彩現
            li
              .circle
                .p90
                .p180
                .p270
              |             設計企劃/專案管理
        .block
          h4 Programming Skill
          h2 程式技能
          ul.listProgram
            li
              | C++
              .bar
                .value.p40
            li
              | VB.net
              .bar
                .value.p50
            li
              | AutoLisp
              .bar
                .value.p50
            li
              | Verilog
              .bar
                .value.p30
            li
              | Python
              .bar
                .value.p40
            li
              | Html/Css/Js
              .bar
                .value.p80
            li
              | Pug/Sass
              .bar
                .value.p80
      .right
        .decoration
        .block
          h4 Experience / Works
          h2 經歷與作品
          ul.listExperience
            li.year
              | 2014
              ul
                li 康師傅 活動用體感切醬料包遊戲 程式開發
                li 交大電機 高中生專區 網頁設計 / 開發
                li 長庚醫院 聲熱石墨希 腦瘤治療新契機3D 動畫
            li.year
              | 2015
              ul
                li RemyMartin & Selinko 智慧酒瓶認證 UI/UX
                li Dyverse Studio 歧響音樂 互動官網 設計 / 開發
            li.year
              | 2016
              ul
                li Complex Festival 複雜生活節互動官網 設計 / 開發
                li 花旗聯合勸募官網 設計 / 開發
                li 世界健康大會官網 設計 / 開發
                li 雜學校展覽 網頁開發
                li 開設動畫互動網頁程式入門線上課程
            li.year
              | 2017
              ul
                li 台北聲音地景計畫官網 設計 / 開發
                li 工研院綠能所 節電官網 設計/開發
                li 睿軒 / 睿田生技公司官網開發
                li D-school 台大創新設計學院網站 設計 / 開發
                li 開設動畫互動網頁特效入門線上課程
        .block
          h4 Contests
          h2 比賽經歷
          ul
            li 宏碁數位創作獎第五屆首獎
            li 宏碁數位創作獎第六屆首獎
            li 宏碁數位創作獎第七屆首獎暨評審團大獎
            li 宏碁數位創作獎第八屆優勝
            li 宏碁數位創作獎第九屆首獎暨評審團大獎
            li 智慧鐵人競賽高職組首獎
            li 梅竹黑客松 微軟組首獎
            li 經濟部智慧城市黒客松 實踐組首獎
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
