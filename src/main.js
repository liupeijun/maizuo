import Vue from 'vue' // var Vue = require('vue')
import App from './App.vue'
import router from './router'
// import store from './store'
Vue.config.productionTip = false
// dwa dwadwa dwa  dwa dwa 
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
