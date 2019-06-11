import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

import './styles/base.less'

// import vant from 'vant'
// import 'vant/lib/index.css'

// Vue.use(vant)

import { Tab, Tabs } from 'vant'
Vue
  .use(Tab)
  .use(Tabs)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
