import Vue from 'vue'
import vClickOutside from 'v-click-outside'

import App from './App'
import router from './router'

import '@/styles/global.scss'

Vue.use(vClickOutside)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
