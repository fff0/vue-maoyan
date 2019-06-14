<template>
  <div>
    <div class="tou2">
      <router-link to="/">
      <div class="fanhui">
        <i class='iconfont iconfanhui'></i>
      </div>
      </router-link>
      <img :src="filmData.poster" alt="">
      <div class="title">
        <div class="tit1">
          <h1 class="h1">{{ filmData.name }}</h1>
          <span>7.2<div>分</div></span>
        </div>
        <p class="tit2">{{ filmData.category }}</p>
        <div class="tit2"><span>导演：</span><span>{{ filmData.director }}</span></div>
        <div class="tit2">{{ filmData.nation }}|{{ filmData.runtime }}分钟</div>
        <div id="aa" class="tit3 hidde">{{ filmData.synopsis }}</div>
        <div class="jiazai" @click="jiazai"><i class="iconfont iconarrow-up"></i></div>
      </div>
    </div>
    <div class="center">
      <p>演职人员</p>
      <div class="ctbox">
        <div v-for="(aa,index) in filmData.actors" :key="index">
          <div class="ctli">
            <img :src="aa.avatarAddress" alt="">
            <p class="p1">{{ aa.name }}</p>
            <p class="p1">{{ aa.role }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="juzhao">
      <p>剧照</p>
      <div class="jubox">
        <div class="juli" v-for="(bb,index) in filmData.photos" :key="index">
          <img :src="bb" alt="">
        </div>
      </div>
    </div>
    <router-link to="/" class="gou">选座购票</router-link>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: {
    id: {
      type: Number
    }
  },
  computed: {
    ...mapState('film', [
      'filmData'
    ])
  },
  methods: {
    ...mapActions('film', [
      'getFilmData'
    ]),
    jiazai () {
      var aa = document.getElementById('aa')
      if (aa.className.indexOf('hidde') > -1) {
        aa.classList.remove('hidde')
      } else {
        aa.classList.add('hidde')
      }
    }
  },
  created () {
    var aa = window.location.href.split('/')
    var filmId = aa[5]
    this.getFilmData(filmId)
  }
}
</script>

<style lang="less" scoped>
  .tou2{
    img{
      width: 100%;
    }
    .fanhui{
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.4);
      text-align: center;
      line-height: 36px;
      position: fixed;
      top: 10px;
      left: 10px;
      i{
        font-size: 20px;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .title{
    padding: 12px 12px 40px;
    .tit1{
      span{
        float: right;
        margin-left: 200px;
        display: flex;
        color: #ffb232;
        font-size: 22px;
        font-style: oblique;
        font-weight: 100;
        div{
          margin-left: 4px;
          margin-top: 8px;
          font-size: 14px;
          font-style: normal;
        }
      }
    }
    .h1{
      font-size: 20px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .tit2{
      height: 24px;
      font-size: 13px;
      line-height: 24px;
      color: #797d82;
    }
    .tit3{
      font-size: 13px;
      line-height: 24px;
      color: #797d82;
      margin-top: 10px;
      transition: all .5s ease;
      overflow: hidden;
      height: auto;
      &.hidde{
        height: 30px;
        transition: all .5s ease;
        overflow: hidden;
      }
    }
    .jiazai{
      width: 100%;
      height: 20px;
      text-align: center;
    }
  }
  .center{
    p{
      margin-left: 15px;
    }
    .ctbox{
      display: flex;
      overflow-x: auto;
      overflow-y: hidden;
      .ctli{
        width: 130px;
        img{
          width: 120px;
          margin: 5px;
        }
        .p1{
          font-size: 13px;
          color: #666;
          margin: 8px 0;
        }
      }
    }
  }
  .ctbox::-webkit-scrollbar {
      display: none;
  }
  .jubox{
    display: flex;
    overflow-x: auto;
    margin-bottom: 50px;
    .juli{
      flex: 1 0 auto;
      width: 160px;
      margin: 5px;
      overflow: hidden;
      height: 120px;
      line-height: 120px;
      img{
        width: 150px;
        vertical-align:middle;
      }
    }

  }
  .jubox::-webkit-scrollbar {
      display: none;
  }
  .gou{
    display: block;
    width: 100%;
    height: 50px;
    background-color: #ff5f16;
    color: #fff;
    text-align: center;
    line-height: 50px;
    position: fixed;
    bottom: 0;
  }

</style>
