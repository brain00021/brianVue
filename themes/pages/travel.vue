<template lang="pug">
  .travel-index
    .container-leftside
      select#optionchoice(@change='fliter(newItem)' v-model="newItem")
        option(value="" selected="selected" ) --請選擇行政區--
        option(v-for="item in zone" :value="item"  selected) {{item}}
      h2 熱門行政區
      hr
      .button(vlaue='全部' @click="fliter('')" style="background-color:#FFA782 ") 全部
      .button(vlaue='苓雅區' @click="fliter('苓雅區')" style="background-color:#8A82CC") 苓雅區
      .button(vlaue='三民區' @click="fliter('三民區')" style="background-color:orange") 三民區
      .button(vlaue='新興區' @click="fliter('新興區')" style="background-color:#038063") 新興區
      .button(vlaue='鹽埕區' @click="fliter('鹽埕區')" style="background-color:#559AC8") 鹽埕區
    .container-rightside
      h1(v-if="newItem == ''") 高雄旅遊資訊
      h1(v-else) {{ newItem }}
      span.titleicon
        img(src="@/assets/practice/icons_down.png")
      .item-content
        travelCard(
          v-for="(item,index) in displayDataResult"
          :id="index"
          :title="item.Name"
          :img="item.Picture1"
          :time="item.Opentime"
          :address="item.Add"
          :phone="item.Tel"
          :free="item.Ticketinfo"
          :key="index"
        )
      ul.pagination(v-html='pagination' @click="switchPages")
</template>

<script>
// @ is an alias to /src
import $axios from 'axios';
import travelCard from '@themes/components/travelItem.vue'

export default {
  name: 'Home',
  components: {
    travelCard
  },
  data () {
    return {
      newItem: '',
      listData: [],
      zone: [],
      // 頁面樣式
      displayData: [],
      displayDataResult: [],
      totalPages: 0,
      pageNum: 1,
      contentNum: 6,
      pageLeng: 0,
      limitPage: 5,
      pagination: ''
    }
  },
  mounted () {
    this.$nextTick(()=>{
      this.GetData()
    });
  },
  methods: {
    //  https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97 高雄觀光局資料
    GetData () {
      $axios.get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97')
        .then((response) => {
        /* 成功拿到資料，然後... */
          this.listData = response.data.result.records
        // this.calPageNumb();
        })
        .then(() => {
          this.zoneChoice()
          this.fliter(this.newItem)
        })
        .catch((response) => {
          alert('No date')
        })
        .finally(() => {
          /* 不論成功失敗，都做些事 */
        })
    },
    zoneChoice: function () {
      this.listData.forEach((item, key) => {
        if (this.zone.indexOf(item.Zone) === -1) {
          this.zone.push(item.Zone)
        }
      })
    },
    fliter: function (val) {
      this.newItem = val
      this.displayData = []

      this.listData.map((item) => {
        if (item.Zone === this.newItem.trim()) {
          this.displayData.push(item)
        };
      })

      if (this.newItem.trim() === '') {
        this.displayData = this.listData
      }
      this.pageNum = 1
      this.displayDistrice()
    },
    displayDistrice: function () {
      let start = this.pageNum * this.contentNum
      let newListData = []
      let dataLen = this.displayData.length

      // 頁數
      this.calPageNumb(dataLen)
      this.totalPages = dataLen

      if (dataLen > start) {
        dataLen = start
      } else {
        dataLen = this.displayData.length
      }

      for (let i = start - this.contentNum; i < dataLen; i++) {
        newListData.push(this.displayData[i])
      }

      this.displayDataResult = newListData
    },
    calPageNumb: function (counter) {
      let str = ''
      if (counter > this.contentNum) {
        this.pageLeng = Math.ceil(counter / this.contentNum)
        const prev = `<li class="pagePrev"><a href="#">Prev</a></li>`
        const next = `<li class="pageNext"><a href="#">Next</a></li>`
        for (let i = 1; i <= this.pageLeng; i++) {
          if (i === this.pageNum) {
            str += `<li class="pageItem"><a class="pageLink active" href="#">${i}</a></li>`
          } else {
            str += `<li class="pageItem"><a class="pageLink" href="#">${i}</a></li>`
          }
        }
        this.pagination = prev + str + next
      } else {
        str = `<li class="pageItem"><a class="pageLink active" href="#">1</a></li>`
        this.pagination = str
      }
    },
    switchPages: function (e) {
      // 切換頁面
      e.preventDefault()
      if (e.target.nodeName !== 'A') {
        return
      }

      // 切換頁碼
      if (e.target.textContent === 'Next') {
        if (this.pageNum === this.pageLeng) {
          this.pageNum = this.pageLeng
        } else {
          this.pageNum++
        }
      } else if (e.target.textContent === 'Prev') {
        if (this.pageNum === 1) {
          this.pageNum = 1
        } else {
          this.pageNum--
        }
      } else {
        this.pageNum = parseInt(e.target.textContent)
      }
      this.calPageNumb(this.totalPages)
      // 更新資料
      this.displayDistrice()
    }
  }
}
</script>
<style lang="scss">
  .pagination{
    text-align: center;
    display: block;
    li{
      display: inline-block;
    }
  }
  .pageItem a , .pagePrev ,.pageNext{
    border-radius:5px;
    background:#fff;
    margin:2px;
    padding:5px 10px;
    color:#0e1936;
    &.active{
    background:#ffae00;
    color:#fff;
    }
  }
</style>
