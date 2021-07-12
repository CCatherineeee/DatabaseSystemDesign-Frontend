import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'//引入axios

//import Api from './api/index.js';
import VueAxios from 'vue-axios'

//+引入组件库及样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//让VUE用ElementUI

Vue.use(ElementUI)

Vue.prototype.$axios = axios;//把axios挂载到vue上

Vue.config.productionTip = false

//Vue.prototype.$api = Api;

Vue.use(VueAxios,axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
