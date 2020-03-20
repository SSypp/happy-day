import Vue from 'vue'
import App from './App.vue'
import router from './router'
import echarts from "echarts"
const {
  log
} = console
Vue.prototype.log = log
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')