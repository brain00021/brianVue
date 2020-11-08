<template lang="pug">
.row.no-gutters
  el-row( 
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.9)")
    el-col(:span='7')
      .toolbox
        h6 請參考綠色標籤為目前口罩庫存足夠的藥局
        .sticky-top.bg-white.shadow-sm.p-2
          el-select#cityName(v-model='select.city', placeholder='请选择' label="縣市"  @change="updateCitySelect")
            el-option(v-for='item in cityName', :key='item.CityName', :value='item.CityName')
              | {{item.CityName}}
        .sticky-top.bg-white.shadow-sm.p-2
          el-select#AreaName(v-model='select.area', placeholder='请选择', @change='updateSelect'  label="地區")
            el-option(v-for='(item,key) in  cityName.find((city) => city.CityName === select.city).AreaList', :key='key', :value='item.AreaName ')
              | {{item.AreaName}}

        .list-group
          el-card.box-card(v-for='(item,key) in displayPharmacies' :key="key")
            a.list-group-item.text-left(:key='key', v-if="item.properties.county === select.city && item.properties.town === select.area", :class="{ 'highlight': item.properties.mask_adult || item.properties.mask_child}", @click='penTo(item)')
              h3 {{ item.properties.name }}
              p.mb-0
                | 成人口罩：{{ item.properties.mask_adult}} | 兒童口罩：{{ item.properties.mask_child}}
              p.mb-0
                a.list-group-item.text-left(:key='key', v-if='item.properties.county === select.city\
                && item.properties.town === select.area', :class="{ 'highlight': item.properties.mask_adult || item.properties.mask_child}", @click='penTo(item)') 地址：
                a(:href='`https://www.google.com.tw/maps/place/${item.properties.address}`', target='_blank', title='Google Map')
                  | {{ item.properties.address }}
    el-col(:span='17' v-show="!isOpen")
      .map-wrapper
        #mapId
</template>
<script>
import * as L from "leaflet";
import axios from "axios";
import { mapState, mapGetters, mapActions } from 'vuex';
import cityName from "@assets/data/CityCountyData.json";

let osmMap = {};

const iconsConfig = {
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
};
const icons = {
  green: new L.Icon({
    iconUrl:
      "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    ...iconsConfig
  }),
  grey: new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png",
    ...iconsConfig
  })
};
const osm = {
  
  // 增加地圖的座標
  addMapMaker(x, y, item) {
     const icon = item.mask_adult || item.mask_child ? icons.green : icons.grey;
    L.marker([y, x], {
      icon
    }).addTo(osmMap).bindPopup(`<strong>${item.name}</strong> <br>
    口罩剩餘：<strong>成人 - ${
      item.mask_adult ? `${item.mask_adult} 個` : "未取得資料"
    }/ 兒童 - ${
      item.mask_child ? `${item.mask_child} 個` : "未取得資料"
    }</strong><br>
    地址: <a href="https://www.google.com.tw/maps/place/${
      item.address
    }" target="_blank">${item.address}</a><br>
    電話: ${item.phone}<br>
    <small>最後更新時間: ${item.updated}</small>`);
  },
  removeMapMaker() {
    osmMap.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        osmMap.removeLayer(layer);
      }
    });
  },
  // 拉大
  penTo(x, y, item) {
    const icon = item.mask_adult || item.mask_child ? icons.green : icons.grey;
    osmMap.panTo(new L.LatLng(y, x));
    L.marker([y, x], {
      icon
    })
      .addTo(osmMap)
      .bindPopup(
        `<strong>${item.name}</strong> <br>
    口罩剩餘：<strong>成人 - ${
      item.mask_adult ? `${item.mask_adult} 個` : "未取得資料"
    }/ 兒童 - ${
          item.mask_child ? `${item.mask_child} 個` : "未取得資料"
        }</strong><br>
    地址: <a href="https://www.google.com.tw/maps/place/${
      item.address
    }" target="_blank">${item.address}</a><br>
    電話: ${item.phone}<br>
    <small>最後更新時間: ${item.updated}</small>`
      )
      .openPopup();
  }
};
export default {
  data: () => ({
    data: [],
    cityName,
    select: {
      city: "臺北市",
      area: "大安區"
    },
    displayPharmacies:[],
    loading: true
  }),
  computed:{
    ...mapState(['isOpen']),
  },
  mounted() {
    const url =
      "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json";
    this.$axios
      .get(url)
      .then(res => {
        // debugger;
        this.data = res.data.features;
        this.updateMap();
      })
      .catch(err => {
        console.log(err);
      });

    osmMap = L.map("mapId", {
      center: [25.04828, 121.51435],
      zoom: 16
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "AUTHER BRIAN LI",
      maxZoom: 16
    }).addTo(osmMap);

    // 增加圖標
    // L.marker([25.04828, 121.51435]).addTo(osmMap)
  },
  methods: {
    updateMap() {
      // debugger;
      // let filter = this.select.city;
      this.loading = true;
      const pharmacies = this.data.filter(pharmacy => {
        if (!this.select.area) {
          return pharmacy?.properties.county === this.select.city;
        }
        return pharmacy?.properties.town === this.select.area;
      });

      pharmacies.forEach(pharmacy => {
        const { properties, geometry } = pharmacy;
          osm.addMapMaker(
            geometry.coordinates[0],
            geometry.coordinates[1],
            properties,
          );
      });
       
        // L.marker([geometry.coordinates[1], geometry.coordinates[0]]).addTo(
        //   osmMap
        // ).bindPopup(`<strong>${properties.name}</strong> <br>
        //     口罩剩餘：<strong>成人 - ${
        //       properties.mask_adult
        //         ? `${properties.mask_adult} 個`
        //         : "未取得資料"
        //     }/ 兒童 - ${
        //   properties.mask_child ? `${properties.mask_child} 個` : "未取得資料"
        // }</strong><br>
        //     地址: <a href="https://www.google.com.tw/maps/place/${
        //       properties.address
        //     }" target="_blank">${properties.address}</a><br>
        //     電話: ${properties.phone}<br>
        //     <small>最後更新時間: ${properties.updated}</small>`);

      this.displayPharmacies = (pharmacies.length > 1)? pharmacies.sort(function(a, b){ return (b.properties.mask_child+b.properties.mask_adult) - (a.properties.mask_child+a.properties.mask_adult)}).filter((val,index) => (index > 6)) : pharmacies
      this.penTo(this.displayPharmacies[0]);
      this.loading = false;
    },
    removeMakers() {
      osm.removeMapMaker();
    },
    penTo(pharmacy) {
      const { properties, geometry } = pharmacy;
      osm.penTo(geometry.coordinates[0], geometry.coordinates[1], properties);
    },
    updateCitySelect(){
      this.select.area = ''
      this.displayPharmacies = [];
    },
    updateSelect() {
      this.loading = true;
      this.displayPharmacies = [];
      this.removeMakers();
      this.updateMap();
      // const pharmacy = this.data.find(item => item.properties.town === this.select.area);
      // const { geometry, properties } = pharmacy;
      debugger;
      // this.penTo(this.displayPharmacies[0]);
      // osm.penTo(geometry.coordinates[0], geometry.coordinates[1], properties);
    },
  }
};
</script>
<style lang="scss">
// leaflet css要放進 不然會有破板問題
@import url("https://unpkg.com/leaflet@1.6.0/dist/leaflet.css");
#mapId {
  width: 100%;
  min-height: 100px;
  height: 100vh;
  // overflow: hidden;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
}
.sticky-top{
  margin-top:10px;
}
.home {
  position: relative;
}
.highlight {
  background: #e9ffe3;
}
.toolbox {
  height: 100vh;
  overflow-y: auto;
  a {
    cursor: pointer;
  }
}
.box-card{
  margin: 10px;
}
// .map-wrapper {
//   flex: 0 0 75%;
//   max-width: 75%;
// }
</style>
