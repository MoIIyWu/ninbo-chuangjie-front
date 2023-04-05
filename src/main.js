import Vue from 'vue'
import App from './App.vue'

// 引入公共的css样式
import './style/common.scss'

import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
