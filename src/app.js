import placeModel from './models/placeModel.js'

import cardComponent from './components/cardComponent.js'

new Vue({
	el: "#app",
	data: {
		screens: ['Place', 'Coin', 'TimeLine'],
		screenIndex: 0,
		places: ''
	},
	components: {
		'card': cardComponent
	},
	created() {
		this.fetchCardList()
	},
	methods: {
		fetchCardList() {
			placeModel.list().then(data => {
				this.places = data
			})
		}
	}
})
