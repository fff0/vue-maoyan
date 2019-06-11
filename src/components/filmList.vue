// 影片列表组件
<template>
  <ul class="film-list">
    <li class="film-item"
    v-for="film in list"
    :key="film.filmId">
      <img class="film-img" :src="film.poster" alt="">
      <div class="film-info">
        <p class="film-info__name">{{ film.name }}</p>
        <p class="film-info__grade">观众评分：<span>{{ film.grade }}</span></p>
        <p class="film-info__actors">主演: {{ formatActor(film.actors) }}</p>
        <p class="film-info__detail">{{ film.nation }} | {{ film.runtime }}分钟</p>
      </div>
      <div class="film-buy" v-if="filmType === 'nowPlaying'">购票</div>
      <div class="film-buy" v-else>预约</div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    // 影片类型
    filmType: {
      validator (value) {
        return ['noePlaying', 'comingSoon'].indexOf(value) !== -1
      }
    },
    // 影片数据
    list: {
      type: Array
    }
  },
  filters: {
    // f
  },
  methods: {
    formatActor (actors) {
      let str = ''
      let arr = actors.map(item => item.name)
      str = arr.join('、')
      return str
    }
  }
}
</script>
