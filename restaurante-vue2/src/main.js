import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './assets/css/global.less'
import router from './router'
import { store } from './srote/store'
import VueMask from 'v-mask'

Vue.use(VueMask);
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
