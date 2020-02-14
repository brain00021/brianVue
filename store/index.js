// import Vue from 'vue';
// import Vuex from 'vuex';
import {isUndefined} from 'lodash';
// // import productsModules from './products';
// // import cartsModules from './cart';

// Vue.use(Vuex);
const dataUrl = require('@assets/data/profile.json');
const state = () => ({
    isLoading: false,
    isOpen:false,
    dataUrl: require('@assets/data/profile.json'),
    originProfile:[],
    currentProfile:[],
    currentFliter:'',
    currentTitle:'',
    contentNum: 6,
    pageNum: 1,
    totalPages: 0,
    displayProfile:[],
    profileButton:false,
  })

const actions = {
  updateLoading(context, status) {
    console.log(context);
    context.commit('LOADING', status);
  },
  GetProfile(context,status) {
    let res = dataUrl;
    context.commit('GETPROFILE',res.events)
    context.commit('FLITERPROFILE',undefined)
  },
  // fliter
  fliterProfile(context,status){
    context.commit('FLITERPROFILE',status)
    context.commit('DISPLAYPROFILE')
  },
  // menu開關
  switchMenu({commit}) {
    commit('MENUSWITCH')
  },
  closeMenu({commit}) {
    commit('CLOSEMENU')
  },
  displayDistrice({commit}) {
    commit('DISPLAYPROFILE')
  },
  profileMore({commit}){
    commit('PROFILEMORE');
    commit('DISPLAYPROFILE')
  },
}

const mutations =  {
  LOADING(state, status) {
    state.isLoading = status;
  },
  MENUSWITCH(state){
    state.isOpen = !state.isOpen;
  },
  CLOSEMENU(state){
    state.isOpen = false;
  },
  GETPROFILE(state,status){
    state.originProfile = status;
  },
  FLITERPROFILE(state,payload){
    state.currentFliter = (!isUndefined(payload)) ? payload.target.dataset.nav.split(" ").join("").toLowerCase() : 'allproject';
    state.currentTitle = (!isUndefined(payload)) ? (payload.target.textContent != '')?payload.target.textContent:'All Project' : 'All Project' ;
    state.currentProfile = [];
    if(state.pageNum > 1){
      state.pageNum = 1;
    }
    switch(state.currentFliter) {
      case 'worksproject':
        state.originProfile.map((data)=>{
          if(data.type === 'image' || data.type === 'url'){
            state.currentProfile.push(data);
          }
        });
        break;
      case 'article':
        state.originProfile.map((data)=>{
          if(data.type === 'iframe'){
            state.currentProfile.push(data);
          }
        });
        break;
      default:
        state.currentProfile = state.originProfile;
    }
  },
  DISPLAYPROFILE(state,payload) {
    let start = state.pageNum * state.contentNum
    let newListData = []
    let dataLen = state.currentProfile.length

    // 頁數
    // this.calPageNumb(dataLen)
    state.totalPages = dataLen

    if (dataLen > start) {
      dataLen = start
      state.profileButton= true;
    } else {
      dataLen = state.currentProfile.length
      state.profileButton= false;
    }

    for (let i = 0; i < dataLen; i++) {
      newListData.push(state.currentProfile[i])
    }

    state.displayProfile = newListData
  },
  PROFILEMORE(state) {
    state.pageNum++;
  }
}

const getters = {
  isLoading: state => state.isLoading,
  currentProfile: state => state.currentProfile,
  displayProfile: state => state.displayProfile,
  profileButton: state => state.profileButton,
}

export default {
  state,
  getters,
  actions,
  mutations,
}
