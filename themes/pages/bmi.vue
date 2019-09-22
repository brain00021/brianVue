<template lang="pug">
  .bmi-wrapper
    .bmi-header
      .logo
        img(src="@assets/practice/BMICLogo.png")
      .input-wrapper
        .input-content
          span Height / cm
          input(v-model="heightNumber")
        .input-content
          span Weight / kg
          input(v-model="weightNumber")
      .input-check
        .button(@click="checkWeight()") Result
    .bmi-content
      h1 BMI History
      hr
      .weightcard(v-for="item in todolistArry" ,:class="[{'red':item.BMI > 40},{'green':item.BMI<30},{'blue':item.BMI<16}]")
        .title
          | {{item.Title}}
        .content
          span BMI
          span {{item.BMI}}
        .content
          span Weight
          span {{item.weight}}kg
        .content
          span Height
          span {{item.height}}cm
        .date
          | {{item.Date}}
    .bmi-footer
      .logo-change
        img(src="@assets/practice/BMICLogo.png")
</template>
<script>
export default {
  data () {
    return {
      heightNumber: 0,
      weightNumber: 0,
      bmiresult: 0,
      datetime: '',

      // todolist:localStorage.getItem('toDoList'),
      todolistArry: JSON.parse(window.localStorage.getItem('todolist') || '[]'),
      bmicurrenttitle: '基本體重'
    }
  },
  watch: {
    todolistArry: function (item) {
      window.localStorage.setItem('todolist', JSON.stringify(item))
    },
    deep: true // 深复制
  },
  methods: {
    checkWeight: function () {
      let isNum = /^[0-9]*$/
      if (isNum.test(this.weightNumber.toString()) && isNum.test(this.heightNumber.toString())) {
        this.bmiresult = (this.weightNumber !== 0 || this.heightNumber !== 0) ? (this.weightNumber / (this.heightNumber * 2) * 100).toFixed(2) : 0
        this.getDate()
        this.getTitle()
        this.todolistArry.push({ 'weight': this.weightNumber, 'height': this.heightNumber, 'BMI': this.bmiresult, 'Date': this.datetime, 'Title': this.bmicurrenttitle })
        // Window.localStorage.setItem('toDoList' , JSON.stringify(toDoListArr))
      } else {
        alert('請輸入正確的數字')
      }
    },
    getDate: function () {
      const currentdate = new Date()
      this.datetime = 'Time:' + currentdate.getFullYear() + '/' + (currentdate.getMonth() + 1) + '/' + currentdate.getDate()
    },
    getTitle: function () {
      if (this.bmiresult <= 15) {
        this.bmicurrenttitle = '非常嚴重體重不足'
      } else if (this.bmiresult <= 16) {
        this.bmicurrenttitle = '嚴重體重不足'
      } else if (this.bmiresult <= 18.5) {
        this.bmicurrenttitle = '體重過輕'
      } else if (this.bmiresult <= 25) {
        this.bmicurrenttitle = '正常體重'
      } else if (this.bmiresult <= 30) {
        this.bmicurrenttitle = '體重過重'
      } else if (this.bmiresult <= 35) {
        this.bmicurrenttitle = '中等肥胖'
      } else if (this.bmiresult <= 40) {
        this.bmicurrenttitle = '嚴重肥胖'
      } else {
        this.bmicurrenttitle = '你真的超胖'
      }
    }
  }

}
</script>
<style lang="scss" scoped>
//卡片製作
.weightcard{
  width:100%;
  background:#fff;
  max-width:640px;
  padding:15px;
  display: flex;
  justify-content: space-between;
  vertical-align: center;
  margin:15px auto;
  text-align: center;
  >div{
    line-height: 30px;
  }
  .title{color:#4A4A4A}
  .content{
    span:last-child{
      font-size:20pt;
      margin-left:5px;
    }
  }
}
.red{
  border-left:5px solid red;
}
.green{
border-left:5px solid #86D73F;
}
.blue{
  border-left:5px solid #31BAF9;
}
//上半部
  .bmi-header{
    background:#424242;
    overflow: hidden;
    color:#FFD366 ;
    display: flex;
    justify-content:center;
    align-items:center;
    padding:30px;
    .logo{
      margin:15px;
      margin-right: 50px;
      width:100px;
      height:100px;
      overflow: hidden;
      img{width:100%;}
    }
  }
  .bmi-footer{
    width:100%;
    height:auto;
    position: relative;
    background:#FFD366 ;
    overflow: hidden;
    .logo-change{
      width:55px;
      height:55px;
      margin:15px auto;
      filter: brightness(0);
      img{
        width:100%;
      }
    }
  }
  .input-wrapper{
    width: 33%;
    margin-right:20px;
    text-align: center;
    span{
      display:block;
      text-align: left;
    }
    input{
      display:inline-block;
      width:100%;
      background:rgba(#fff,.2);
      border:1px solid #FFD366;
      border-radius: 5px;
      padding:5px;
      color:#fff;
      font-weight:bold;
    }

  }
  .input-check {
    margin:15px;
  }
  .button{
    width:80px;
    height:80px;
    border-radius: 50%;
    background: #FFD366;
    font-size: 20px;
    font-weight: bold;
    line-height:80px;
    color:#424242;
    &:hover{
      box-shadow:  0 0 10px #FFD366;
    }
    &:active{
      background: darken(#FFD366,20%);
    }
  }
  .bmi-content{
    background:#e8e8e8;
    padding:15px;
  }
</style>
