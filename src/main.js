import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueSweetalert2 from 'vue-sweetalert2'
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)
Vue.use(VueSweetalert2)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
