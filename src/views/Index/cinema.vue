<template>
  <div>
    <div class="tt">
      <div class="tou">
        <h1>影院</h1>
      </div>
      <div class="sou">
        <router-link to='/city' class="city">
          <span>深圳</span>
          <i class="iconfont iconf11-copy"></i>
        </router-link>
        <router-link to="/city" class="ss">
          <input type="text" placeholder="搜索影院">
        </router-link>
      </div>
    </div>
    <CinList :list="cinemaList"></CinList>
  </div>
</template>

<script>
import CinList from '@/components/CinList.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'cinemas',
  components: {
    CinList
  },
  computed: {
    ...mapState('cinema', [
      'cinemaList'
    ])
  },
  methods: {
    ...mapActions('cinema', ['getCinemaList'])
  },

  created () {
    this.getCinemaList()
  }
}
</script>

<style lang="less" scoped>
.tt{
  position: sticky;
    top: 0;
    z-index: 100
}
  .tou {
    width: 100%;
    height: 50px;
    background-color: #e54847;
  }
  .tou h1{
    margin-right: 0!important;
    display: block;
    -webkit-box-flex: 1;
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
  .sou{
    width: 100%;
    height: 44px;
    display: flex;
    background-color: #fff;
    .city{
      width: 20%;
      text-align: center;
      line-height: 44px;
      color: #666;
    }
    .ss{
      flex: 1;
      text-align: center;
      input{
        width: 80%;
        height: 30px;
        margin-top: 7px;
        border-radius: 4px;
        border: 0.6px solid #dadada;
        text-align: center;
      }
    }
  }
</style>
