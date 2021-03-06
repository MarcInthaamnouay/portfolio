import Vue from 'vue'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faIdCard } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import router from './router/router'
import store from './store'

library.add(faAngleDown, faGithubAlt, faIdCard)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
