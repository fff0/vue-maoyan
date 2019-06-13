// 影片数据仓库
import http from '@/utils/http.js'

export default {
  namespaced: true,
  state: {
    filmList: [], // 当前影片的数据
    filmData: [],
    curFilmType: 0 // 当前影片类型 0-正在热映 1-即将上映
  },
  mutations: {
    SETFIMLIST (state, list) {
      state.filmList = list
    },
    SETCURFILMTYPE (state, type) {
      state.curFilmType = type
    },
    SETFILMDATA (state, list) {
      state.filmData = list
    }
  },
  actions: {
    // 获取影片数据
    getFilmList ({ commit, state }) {
      http.get('/gateway', {
        params: {
          cityId: 440300,
          pageNum: 1,
          pageSize: 10,
          type: state.curFilmType === 0 ? 1 : 2, // 1表示正在热映，2表示即将上映
          k: 3883304
        },
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15596185395055176508376"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        // console.log(res.data.films)
        commit('SETFIMLIST', res.data.films)
      })
    },

    getFilmData ({ commit, state }, filmId) {
      http.get('gateway', {
        params: {
          filmId: filmId,
          k: 2699830
        },
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15596185395055176508376"}',
          'X-Host': 'mall.film-ticket.film.info'
        }
      }).then(res => {
        // console.log(res.data.film)
        commit('SETFILMDATA', res.data.film)
      })
    }
  }
}
