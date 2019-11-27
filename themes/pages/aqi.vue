<template lang="pug">
.aqi-wrapper
    header
        .title-box
            .title-left-box
                span.title AIR QUALITY INDEX
                br
                select.select-box(@change='fliter(newlocation)' v-model='newlocation')
                    option(selected='newlocation', disabled='') {{newlocation}}
                    option(v-for='(item,index) in listDatalocation' :value="item"  selected ) {{item}}
            .title-right-box
                table
                    tr.up-tr
                        th.th-1 0~50
                        th.th-2 51~100
                        th.th-3 101~150
                        th.th-4 151~200
                        th.th-5 201~300
                        th.th-6 301~400
                    tr.under-tr
                        th Awesome quality
                        th Good quality
                        th Bad quality for some people
                        th Bad quality for everyone
                        th Super bad quality
                        th Dngerous quality
            .status-box
                .city-box
                    span.updata-city-name {{updateCity}}
                .hr-box
                    hr
                .updata-box
                    span.updata-time {{updateTime}}
    main
        .loading-box(v-if="loading")
            .loading-text
                span LOADING...
            .lds-ellipsis
                div
                div
                div
                div
        .contents-left-part
            .location-box
                .locoation-name
                    span.city-name {{locationDetail.SiteName}}
                #city-AQI.location-num(:class= "changeColor(locationDetail.Status)")
                     span {{locationDetail.AQI}}
            ul.location-contents-box
                li
                    span.list-content-1 O3 (ppb)
                    span.list-content-2 臭氧
                    span.list-content-3.num-1 {{locationDetail.O3}}
                li
                    span.list-content-1 PM10 (μg/m³)
                    span.list-content-2 懸浮微粒
                    span.list-content-3.num-2 {{locationDetail.PM10}}
                li
                    span.list-content-1 PM2.5 (μg/m³)
                    span.list-content-2 細懸浮微粒
                    span.list-content-3.num-3 {{locationDetail["PM2.5"]}}
                li
                    span.list-content-1 CO (ppm)
                    span.list-content-2 一氧化碳
                    span.list-content-3.num-4 {{locationDetail.CO}}
                li
                    span.list-content-1 SO2 (ppb)
                    span.list-content-2 二氧化硫
                    span.list-content-3.num-5 {{locationDetail.SO2}}
                li
                    span.list-content-1 NO2 (ppb)
                    span.list-content-2 二氧化氮
                    span.list-content-3.num-6 {{locationDetail.NO2}}
        ul.contents-right-part
            li(v-for="item in listDatelocationAqi")
                .location-box(@click='locationDetailFn(item)')
                    .locoation-name
                      span {{item.SiteName}}
                    .location-num(:class= "changeColor(item.Status)")
                      | {{item.AQI}}

    footer
        .footer-box
            span.text-left.footer-content-1 Reference：TW GOV OPEN DATE
            span.text-right.footer-content-2 Copyright © 2019 HexSchool. All rights reserved.

</template>

<script>
// @ is an alias to /src
// import $axios from 'axios';
import travelCard from '@themes/components/travelItem.vue'

export default {
  name: 'Home',
  components: {
    travelCard
  },
  data () {
    return {
        loading:true,
        datalist:[],
        listDatalocation: [],
        newlocation:'PLEASE SELECT YOUR LOCATION!',
        listDatelocationAqi:[],
        updateTime:'no time',
        updateCity:'no city',
        locationDetail: [],
    }
  },
  mounted () {
    this.$nextTick(()=>{
      this.GetData()
    });
  },
  methods: {
    GetData () {
        //  http://opendata.epa.gov.tw/webapi/Data/REWIQA/?format=json opendata for air
        // Basic ajax writen way
        // already using google script to avoid Cors problem.
        const  AQIapi = 'https://script.google.com/macros/s/AKfycbzsucZIhfrUjHWSpeTJcOtMimS62ngsFtJBG-7sZlxc0_oiyzBm/exec?url=http://opendata.epa.gov.tw/webapi/Data/REWIQA/?format=json';
        let promise = new Promise((resolve,reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('get',AQIapi,true);
            xhr.send(null);
            xhr.onload = () =>{
                if(xhr.status == 200 && xhr.status < 400){
                    resolve(xhr.response);
                } else {
                    reject("取得資料失敗:" + xhr.status)
                }
            }

        });
        promise.then((res) => {
            this.datalist = JSON.parse(res); // 把字串轉成data
            this.locationSelected();
            this.loading = false;
        });
        promise.catch((error) => {
            console.log(error);
        });
    },
    // 搜尋區的地址
    locationSelected(){
        this.datalist.forEach((item, key) => {
            if (this.listDatalocation.indexOf(item.County) === -1) {
                this.listDatalocation.push(item.County); 
            }
            console.log(this.listDatalocation);
        })
    },
    // 選擇縣市顯示地區 && 判斷AQI加上顏色
    fliter(val){
      if (this.listDatelocationAqi.length !== 0) {
        this.listDatelocationAqi.length = 0;
          // array empty or does not exist
      }

      this.datalist.forEach((item,key) => {
          if(item.County == val){
            this.listDatelocationAqi.push(item);
            console.log(this.listDatelocationAqi);
          }
          this.updateCity = val;
          this.updateTime = item.PublishTime;

      })
      this.locationDetail = {...this.listDatelocationAqi[0]};
      console.log(this.listDatelocationAqi);
    },
    // 上色
    changeColor(val){
       switch (val) {
          case '良好':
              return 'color-1'
              break;
          case '普通':
              return 'color-2'
              break;
          case '對敏感族群不健康':
              return 'color-3'
              break;
          case '對所有族群不健康':
              return 'color-4'
              break;
          case '非常不健康':
              return 'color-5'
              break;
          case '危害':
              return 'color-6'
              break;
          default:
              console.log('數值過低或超標啦！');
              break;
      }
    },
    locationDetailFn(val) {
      this.locationDetail={};
      this.locationDetail = {...val};
      console.log(this.locationDetail);
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
