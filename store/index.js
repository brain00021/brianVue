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
  },
  // menu開關
  switchMenu({commit}) {
    commit('MENUSWITCH')
  },
  closeMenu({commit}) {
    commit('CLOSEMENU')
  }
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
    debugger;
    state.currentFliter = (!isUndefined(payload)) ? payload.target.dataset.nav.split(" ").join("").toLowerCase() : 'allproject';
    state.currentTitle = (!isUndefined(payload)) ? payload.target.textContent : 'All Project' ;
    state.currentProfile = [];
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
  }
}

const getters = {
  isLoading: state => state.isLoading,
  currentProfile: state => state.currentProfile,
}

export default {
  state,
  getters,
  actions,
  mutations,
}
