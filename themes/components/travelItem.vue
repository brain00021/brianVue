<template lang="pug">
  transition(
  appear
  appear-active-class="fade-enter-active"
  )
    .card-wrapper
      .card-img
        h1 {{title}}
        img(:src="img" )
      .card-congtent
        .tip
          span.icon
            img(src="@/assets/practice/icons_clock.png")
          p {{time}}
        .tip
          span.icon
            img(src="@/assets/practice/icons_pin.png")
          p {{address}}
        .tip
          span.icon
            img(src="@/assets/practice/icons_phone.png")
          p {{phone}}
        .tip.bouns-tip
          span.icon
            img(src="@/assets/practice/icons_tag.png")
          p {{free}}
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: "高雄願景管"
    },
    img: {
      type: String,
      default: " "
    },
    time: {
      type: String,
      default: " "
    },
    address:{
      type: String,
      default: " "
    },
    phone: {
      type: String,
      default: " "
    },
    free: {
      type: String,
      default: ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .fade-enter-active  { animation: go 2s }

  @keyframes go {
    from { opacity: 0; }
    to { opacity: 1; }
  }
.card-wrapper{
  width:31.33%;
  max-width: 460px;
  margin:1%;
  vertical-align: top;
  background:#fff;
  box-shadow: 0 0 5px rgba(#000,.5);
  border-radius: 5px;
  overflow: hidden;
  display: inline-block;
  font-family: 'AppleSystemUIFont';
  @media only screen and (max-width:768px){
    width:100%;
    text-align: center;
  }
  .card-img {
    width:100%;
    max-height:150px;
    overflow: hidden;
    position: relative;
    box-shadow: inset 0 -20px 10px rgba(#000,.5);
    img{
      width:100%;
      height:100%;
    }
    h1{
      font-size:20pt;
      color:#fff;
      position: absolute;
      left:10px;
      bottom:10px;
    }

  }
  .card-congtent {
    position:relative;
    padding:15px;
    .tip{
      margin:15px auto;
      position: relative;
      .icon{
        width:18px;
        height:18px;
        margin-right:10px;
        display:block;
        float:left;
        img{width:100%;}
      }
      p{
        color:#051737;
        text-align: left;
        margin-bottom:0;
      }
    }
    .bouns-tip{
      position: relative;
      float:right;
      right:0px;
      min-width: 100px;
      width:30%;
      margin-top:-10px;
      .icon{text-align:right;}
      p{text-align: right;}
      @media only screen and (max-width: 768px){
        width:100%;
        margin-top:10px;
        right:unset;
      }
    }
  }
}
</style>
