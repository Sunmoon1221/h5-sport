import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// vant
import 'vant/lib/index.less'
import './plugins/vant'
// 自适应
import 'amfe-flexible';
// echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
