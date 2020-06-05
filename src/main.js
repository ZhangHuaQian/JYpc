import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
Vue.use(ElementUI, { locale })

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/styles/index.scss' // global css
import 'babel-polyfill'

import axios from 'axios';
Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
