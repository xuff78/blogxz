import Vue from 'vue'
import Router from 'vue-router'
import Home from './page/Home.vue'
import Map from './page/Map.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
        path: '/',
        name: 'map',
        component: Map
      },
      {
          path: '/home',
          name: 'home',
          component: Home
      },
  ]
})
