// import Vue from 'vue';
// import Vuex from 'vuex';

// // import productsModules from './products';
// // import cartsModules from './cart';

// Vue.use(Vuex);

const state = () => ({
    isLoading: false,
    isOpen:false,
  })

const actions = {
  updateLoading(context, status) {
    console.log(context);
    context.commit('LOADING', status);
  },
  // menu開關
  switchMenu({commit}) {
    commit('MENUSWITCH')
  }
}

const mutations =  {
  LOADING(state, status) {
    state.isLoading = status;
  },
  MENUSWITCH(state){
    state.isOpen = !state.isOpen;
  }
}

const getters = {
  isLoading: state => state.isLoading,
}

export default {
  state,
  getters,
  actions,
  mutations,
}
