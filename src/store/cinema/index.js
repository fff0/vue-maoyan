// import { DropdownMenu, DropdownItem } from 'vant'
import axios from 'axios'

export default {
  namespaced: true,

  state: {
    cinemaList: []
  },

  mutations: {
    SETCINEMALIST (state, list) {
      state.cinemaList = list
    }
  },
  actions: {
    getCinemaList ({ commit }) {
      axios.get('http://localhost:8080/ajax/cinemaList?day=2019-06-12&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1560320616582&cityId=30').then(response => {
        let res = response.data
        // console.log(res.cinemas)
        commit('SETCINEMALIST', res.cinemas)
      })
    }
  }
}
