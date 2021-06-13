// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//引入重置样式
import './assets/css/reset.css'

//解决移动端300毫秒点击延迟
import  FastClick  from  'fastclick'
FastClick.attach(document.body);

// 引入组件块,轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 定义使用
Vue.use(VueAwesomeSwiper)

// 引入状态管理
import store from '../src/store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
