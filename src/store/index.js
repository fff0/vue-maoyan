import Vue from 'vue'
import Vuex from 'vuex'
import film from './film/index.js'
import city from './city'
import cinema from './cinema/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    film,
    city,
    cinema
  }
})
