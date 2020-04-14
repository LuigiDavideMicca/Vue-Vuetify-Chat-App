import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import AlertComponent from './components/Shared/Alert.vue'

Vue.config.productionTip = false
Vue.component('app-alert', AlertComponent)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      databaseURL: "YOUR_DB_UR_",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "______",
      appId: "_______"
    })
  }
}).$mount('#app')
