// 影片列表组件
<template>
  <ul class="film-list">
    <p v-if="filmType == 'comingSoon'">近期最受期待</p>
    <div v-if="filmType == 'comingSoon'" class="nav">
      <li v-for="film in list"
      :key="film.film" class="nav-cen">
      <img class="film-img" :src="film.poster" alt="">
      <p class="np np1">{{ film.name }}</p>
      <p class="np np2">{{ film.category }}</p>
      </li>
    </div>
    <router-link class="film-item"
      v-for="film in list"
      tag="li"
      :key="film.filmId" :to="{
        name:'filmDetail',
        params: {
          filmId: film.filmId
        }
      }"
      >
      <img class="film-img" :src="film.poster" alt="">
      <div class="film-info">
        <p class="film-info__name">{{ film.name }}</p>
        <p class="film-info__grade"
          v-if="filmType == 'nowPlaying'"
          >
          观众评分: <span>{{ film.grade }}</span>
        </p>
        <p class="film-info__actors">主演：{{ film.actors | formatActor }}</p>
        <p class="film-info__detail">{{ film.nation }} | {{ film.runtime }}分钟</p>
      </div>
      <div class="film-buy" v-if="filmType == 'nowPlaying'">购票</div>
      <div class="film-buy yy" v-else>预约</div>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: {
    // 影片类型
    filmType: {
      validator (value) {
        return ['nowPlaying', 'comingSoon'].indexOf(value) !== -1
      }
    },
    // 影片数据
    list: {
      type: Array
    }
  },

  // data () {
  //   return {
  //     msg: 'hello'
  //   }
  // },

  // 过滤器
  filters: {
    // key -> 过滤器的名字
    // value -> 过滤的处理函数，会接收一个value数据, 注意要return
    // key: value
    // a: function (value, num = 1) {
    //   let a = value.slice(0, num);
    //   let b = value.slice(num);
    //   return a.toUpperCase() + b;
    // },
    // b: function (value) {
    //   return value.split('').reverse().join('');
    // }

    /**
     * 格式我们的主演信息
     */
    formatActor (value = []) {
      let str = ''
      let arr = value.map(item => item.name)
      str = arr.length > 0 ? arr.join('、') : '暂无主演'
      return str
    }
  }
}
</script>
<style lang="less" scoped>
  .nav{
    height: 180px;
    display: flex;
    overflow-x:auto;
    overflow-y: hidden;
    border-bottom: 5px solid #dadada;
    .nav-cen{
      flex-shrink:0;
      width: 70px;
      height: 180px;
      margin: 15px 10px 0px 10px;
      img{
        width: 80px;
      }
      .np{
        width: 70px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &.np1{
          margin-top: 4px;
          font-size: 15px;
          color: #000;
          font-weight: 600;
        }
        &.np2{
          margin-top:5px;
          font-size: 13px;
          color: #ccc;
        }
      }
    }
  }
  // 隐藏横向滚动条
  .nav::-webkit-scrollbar {
        display: none;
    }
  .yy{
    background: #3c9fe6;
    color: #fff !important;
    border: 0 !important;
  }
</style>
