// 影片数据仓库
import http from '@/utils/http.js'

export default {
  namespaced: true,
  state: {
    filmList: [], // 当前影片的数据
    curFilmType: 0 // ssssssss
  },
  mutations: {
    SETFIMLIST (state, list) {
      state.filmList = list
    }
  },
  actions: {
    // 获取影片数据
    getFilmList ({ commit }) {
      http.get('/gateway', {
        params: {
          cityId: 440300,
          pageNum: 1,
          pageSize: 10,
          type: 1, // 1表示正在热映，2表示即将上映
          k: 3883304
        },
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15596185395055176508376"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        commit('SETFIMLIST', res.data.films)
      })
    }
  }
}
