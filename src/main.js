import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import router from './router'

import * as firebase from 'firebase'

require('firebase/auth')
require('firebase/database')

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDVVQ856LslkQHjH6p_h1w6rU7TuC6boLw',
      authDomain: 'formulaire-client-4f96a.firebaseapp.com',
      databaseURL: 'https://formulaire-client-4f96a.firebaseio.com',
      projectId: 'formulaire-client-4f96a',
      storageBucket: '',
      messagingSenderId: '167613429119'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
      firebase.initializeApp(firebase)
    })
  }
})

