import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import menu from './modules/menu.js'
import 'babel-polyfill'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    menu
  },
  getters
})

export default store
