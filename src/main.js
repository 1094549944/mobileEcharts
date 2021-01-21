import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ECharts from 'echarts'
import VueECharts from 'vue-echarts'

import './styles/reset.scss'



Vue.prototype.$echarts = ECharts
Vue.prototype.$bmap = window.BMapGL
Vue.prototype.$bmap2 = window.BMap
Vue.prototype.$initMap = window.initMap
Vue.prototype.$mapvgl = window.mapvgl
Vue.prototype.$mapv = window.mapv
Vue.prototype.$purpleStyle = window.purpleStyle
Vue.prototype.$darkStyle = window.darkStyle

Vue.config.productionTip = false
// 挂载组件
Vue.component('vue-echarts', VueECharts)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
