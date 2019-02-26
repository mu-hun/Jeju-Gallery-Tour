import placeModel from './models/placeModel.js'
import identityModel from './models/identityModel.js'

// import cardComponent from './components/cardComponent.js'

new Vue({
	el: "#app",
	data: {
		id: '',
		totalCoin: '',
		screens: ['Place', 'Coin', 'TimeLine'],
		selectedScreen: '',
		places: [],
		selectedPlace: false,
		tabs: ['TASKS', 'COMPLETED'],
		selectedTab: '',
		tasks: [],
		completed: [],
	},
	created() {
		this.id = this.getUserID()
		this.selectedScreen = this.screens[0]
		this.selectedTab = this.tabs[0]
		this.fetchCardList()
	},
	mounted() {
		this.triggerNFC()
	},
	methods: {
		triggerNFC() {
			if ('nfc' in navigator) {
				navigator.nfc.watch((msg) => {
					placeModel.randomChoice().then(data => {
						const randomItem = data
						placeModel.moveToCompleted(randomItem)
						this.fetchCompletedList()
					})
				})
			}
		},
		getUserID() {
			identityModel.set()
			identityModel.get().then(data => {
				this.id = data
			})
		},
		fetchCardList() {
			placeModel.list().then(data => {
				this.places = data
			})
		},
		fetchTaskList(name) {
			placeModel.getTasks(name).then(data => {
				this.tasks = data
			})
		},
		fetchCompletedList(name) {
			placeModel.getCompleted(name).then(data => {
				this.completed = data
			})
		},
		// fetchCompletedItem(name) {

		// },
		getTotalCoin() {
			placeModel.getTotalCoin().then(data => {
				this.totalCoin = data
			})
		},
		onClickCard(name) {
			this.fetchTaskList(name)
			this.fetchCompletedList(name)
			this.selectedScreen = name
			this.selectedPlace = true
		},
		onClickTab(tab) {
			this.selectedTab = tab
		},
		goPlace() {
			if (!this.screen==='Place') return
			this.selectedScreen = this.screens[0]
			this.selectedPlace = false
		},
		goCoin() {
			if (!this.screen==='Coin') return
			this.getTotalCoin()
			this.selectedScreen = this.screens[1]
			this.selectedPlace = false
		},
		goTimeLine() {
			if (!this.screen==='TimeLine') return
			this.fetchCompletedList(name)
			this.selectedScreen = this.screens[2]
			this.selectedPlace = false
		},
	}
})
