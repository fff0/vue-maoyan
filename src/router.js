import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/film/:filmId',
      name: 'filmDetail',
      component: () => import('./views/Film/index.vue')
    },
    {
      path: '/',
      component: () => import('./views/Index/index.vue'),
      children: [
        {
          path: 'films',
          name: 'film',
          component: () => import('./views/Index/film.vue')
        },
        {
          path: 'cinemas',
          name: 'cimema',
          component: () => import('./views/Index/cinema.vue')
        },
        {
          path: 'center',
          name: 'center',
          component: () => import('./views/Index/center.vue')
        },
        {
          path: '',
          redirect: '/films'
        }
      ]
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('./views/City/index.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('./views/Center/index.vue')
    }
  ]
})
