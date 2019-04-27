import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/auth/Login.vue'
import Main from '@/components/main/Main.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			path: '/login',
			component: Login
		},
		{
			path: '/',
			component: Main,
			meta: {
				requireAuth: true
			}
		}
	]
})
