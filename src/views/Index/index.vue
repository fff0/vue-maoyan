<template>
  <div>
    <router-view></router-view>
    <Tabbar :tabs='tabs'></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
export default {
  data () {
    return {
      tabs: [
        { id: 1, name: '电影', icon: 'icondianying', href: '/films' },
        { id: 1, name: '影院', icon: 'iconyingyuan', href: '/cinemas' },
        { id: 1, name: '我的', icon: 'iconwo', href: '/center' }
      ]
    }
  },
  components: {
    Tabbar
  }
}
</script>
