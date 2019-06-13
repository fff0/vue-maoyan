<template>
  <div>
    <div class="tou" >
      <h1>猫眼电影</h1>
    </div>
    <div class="nav">
      <div class="nav_1">
        <router-link to='/city'>
          <span>深圳</span>
          <i class="iconfont iconf11-copy"></i>
        </router-link>
      </div>
      <van-tabs v-model="curFilmType"
      @click="tabClick" class="nav_2" >
        <van-tab title="正在热映">
          <FilmList film-type="nowPlaying"
          :list="filmList"></FilmList>
        </van-tab>
        <van-tab title="即将上映">
          <FilmList film-type="comingSoon"
          :list="filmList"></FilmList>
        </van-tab>
      </van-tabs>
      <router-link to='/city' class="nav_3"><i class="iconfont iconsearch"></i></router-link>
    </div>
  </div>
</template>

<script>
import FilmList from '@/components/filmList.vue'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    FilmList
  },
  computed: {
    ...mapState('film', [
      'filmList'
    ]),
    curFilmType: {
      get () {
        return this.$store.state.film.curFilmType
      },
      set (value) {
        this.$store.commit('film/SETCURFILMTYPE', value)
      }
    }
  },
  methods: {
    ...mapActions('film', [
      'getFilmList'
    ]),
    // 影片类型切换
    tabClick (index, title) {
      // 重新发送ajax请求
      this.getFilmList()
    }
  },
  created () {
    this.getFilmList()
  }
}
</script>

<style lang="less">
@import '~@/styles/common/variable.less';
  .tou {
    width: 100%;
    height: 50px;
    background-color: #e54847;
    position: sticky;
    top: 0;
    z-index: 199;
  }
  .tou h1{
    margin-right: 0 !important;
    display: block;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 50px;
    margin: 0 52.5px 0 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #fff;
  }
  .nav{
    position: relative;
  }
  .nav_2{
    width: 100%;
    margin:2px 16px;
    overflow: hidden;
    padding-bottom: 50px;
  }
  .nav_1{
    position: absolute;
    left: 0px;
    top:-4px;
    z-index: 122;
    width: 15%;
    text-align: center;
    line-height: 50px;
    span{
      color: #666;
    }
  }
  .nav_3{
    position: absolute;
    right: 0px;
    top:-4px;
    z-index: 122;
    width: 15%;
    text-align: center;
    line-height: 50px;
    i {
      font-size: 22px;
      color: #e54847;
    }
  }
  .nav {
    display: flex;
  }
  // .van-tabs__wrap{
  //   top: 0;
  //   left: 50px !important;
  //   right: 50px !important;
  //   z-index: 99;
  //   overflow: hidden;
  //   position: absolute
  // }
  .film-item{
    display: flex;
    padding: 15px 0;
    height: 94px;
    position: relative;
    align-items: center;
    border-bottom: 0.2px solid #dadada;
    .film-img {
      width: 66px;
    }
    .film-info {
      flex: 1;
      margin-left: 10px;
      font-size: 14px;
      line-height: 1;
      color: @tabcolor;
    }
    .film-buy {
      line-height: 25px;
      height: 25px;
      width: 50px;
      color: #ff5f16;
      font-size: 13px;
      text-align: center;
      border-radius: 2px;
      position: relative;
      border: 0.5px solid #ff5f16;
    }
  }
</style>
