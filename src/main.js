import Vue from 'vue'
import App from './App.vue'

// 引入公共的css样式
import './style/common.scss'

import router from './router'

Vue.config.productionTip = false

import moment from "moment"
Vue.prototype.$moment = moment

import * as directives from '@/directives'
Object.keys(directives).forEach(key => {
  // 注册自定义指令
  Vue.directive(key, directives[key])
})

// Vue.prototype.baseUrl = "http://16af2f57.r7.vip.cpolar.cn/api"
Vue.prototype.baseUrl = "http://192.168.31.230:8080/api"


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
