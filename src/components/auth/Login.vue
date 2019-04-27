<template>
  <div>
    <h1>Login</h1>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import { ui, uiConfig } from '@/ui.js'
import 'firebaseui/dist/firebaseui.css'

export default {
	name: 'Login',
	mounted() {
		ui.start('#firebaseui-auth-container', uiConfig)
	},
}
</script>
