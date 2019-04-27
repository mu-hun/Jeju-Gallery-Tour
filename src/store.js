import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
	plugins: [createPersistedState],
	state: {
		// TODO: Vuex 복습하기
		user: ''
	},
	getters: {
		getUser: state => {
			return state.user
		}
	},
	mutations: {
		setUser (state, user) {
			state.user = user
		}
	},
	actions: {
		setUser(context, user) {
			context.commit('setUser', user)
		}
	},
})
