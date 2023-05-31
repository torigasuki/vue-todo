import Vue from 'vue'
import App from './App.vue'
import {store} from  './store/store.js'

Vue.config.productionTip = true

new Vue({
  el: '#app',
  store,
  render: h => h(App),
}).$mount('#app')
