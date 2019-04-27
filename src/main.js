import '@mdi/light-font/css/materialdesignicons-light.min.css'
import 'inter-ui/inter.css'
import 'spoqa-han-sans/css/SpoqaHanSans-kr.css'
import 'typeface-libre-franklin/index.css'

import firebase from './firebase.js'
import "./registerServiceWorker"

import PlaceModel from '@/models/PlaceModel.js'

import Vue from "vue"
import App from "./App.vue"

import store from './store.js'
import router from './route.js'

Vue.config.productionTip = false;

// fb.usersData.on('value', (snapshot) => {
// 	PlaceModel.getServerData(snapshot.val())
// })

const vm = new Vue({
	router,
	created() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				store.dispatch('setUser', user)
				this.$router.push('/')
			} else {
				// store.dispatch('setUser', null)
				this.$router.push('/login')
			}
		})
	},
	store,
	render: function (h) {
		return h(App);
	}
}).$mount("#app");

console.log('Vue loded', vm)
