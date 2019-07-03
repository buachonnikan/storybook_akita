import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { i18n } from './plugins/i18n.js'
import Plugin from './plugin'

Vue.config.productionTip = false
Vue.use(Plugin)

new Vue({
  router,
  store,
  // i18n,
  render: h => h(App)
}).$mount('#app')
