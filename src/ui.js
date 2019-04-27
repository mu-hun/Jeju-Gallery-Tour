import firebase from './firebase.js'
import firebaseui from 'firebaseui'

const uiConfig = {
	signInSuccessUrl: '/',
	signInOptions: [
		firebase.auth.EmailAuthProvider.PROVIDER_ID
	]
}
const ui = new firebaseui.auth.AuthUI(firebase.auth())

export {ui, uiConfig}
