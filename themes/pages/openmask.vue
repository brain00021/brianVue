<template>
  <div class="row no-gutters">
    <el-row>
      <!-- <el-col :span='7'>
        <div class="toolbox">
          <div class="sticky-top bg-white shadow-sm p-2">
            <div class="form-group d-flex">
              <label for="cityName" class="mr-2 col-form-label text-right">縣市</label>
              <div class="flex-fill">
                <select id="cityName" class="form-control"></select>
              </div>
            </div>
            <div class="form-group d-flex">
              <label for="area" class="mr-2 col-form-label text-right">地區</label>
              <div class="flex-fill">
                <select id="area" class="form-control">
                  <option value>-- Select One --</option>
                </select>
              </div>
            </div>
            <p class="mb-0 small text-muted text-right">請先選擇區域查看（綠色表示還有口罩）</p>
          </div>
          <ul class="list-group">
            <template>
              <a class="list-group-item text-left">
                <h3>藥局名稱</h3>
                <p class="mb-0">成人口罩：1 | 兒童口罩：2</p>
                <p class="mb-0">
                  地址
                  <a
                    href="https://www.google.com.tw/maps/place/..."
                    target="_blank"
                    title="Google Map"
                  >地址</a>
                </p>
              </a>
            </template>
          </ul>
        </div>
      </el-col> -->
      <!-- <el-col  :span="17">
        <div class='map-wrapper'>
          <div id="map"></div>
        </div>
        
      </el-col> -->
       <div id="mapId"></div>
    </el-row>
  </div>
</template>
<script>
import * as L from 'leaflet';
import axios from 'axios';

let osmMap = {}
export default {
  data() {
    data:{}
  },
  mounted() {
    const url = 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json'
    this.$axios.get(url).then((res) => {
      // debugger;
      this.data = res.data.features
    }).catch((err) => {
      console.log(err)
    })

      osmMap = L.map('mapId', {
        center: [25.04828, 121.51435],
        zoom: 16
      });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '作者 Albert || 設計師 Wendy '
      }).addTo(osmMap);
  },
  watch: {
   
  },
  computed:{

  },
  methods: {
  }
};
</script>
<style lang="scss">
#map {
  width:100%;
  min-height:100px;
  height: 988px;
  overflow: hidden;
  &::after{
    content: '';
    display: block;
    clear: both;
  }
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
// .map-wrapper {
//   flex: 0 0 75%;
//   max-width: 75%;
// }
</style>
