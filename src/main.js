import Vue from 'vue'
import  VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import routers from './js/roeuter.js'

// 定义Vue可以使用VueRouter
Vue.use(VueRouter)
Vue.use(VueResource)
new Vue({
  el: '#app',
  render: h => h(App),
  router:routers
})
