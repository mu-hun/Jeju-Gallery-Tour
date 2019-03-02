// TODO: CamleCase 로 바꾸기
import placeModel from './models/placeModel.js'
import identityModel from './models/identityModel.js'

import PlaceComponent from './components/PlaceComponent.js'
import CoinComponent from './components/CoinComponent.js'
import TimelineComponent from './components/timelineComponent.js'
import TabComponent from './components/TabComponent.js'
import TaskComponent from './components/TaskComponent.js'
// import TaskLiComponent from './components/TaskLiComponent.js';

new Vue({
	el: "#app",
	data: {
		id: '',
		totalCoin: '',
		screens: ['Place', 'Coin', 'TimeLine'],
		selectedScreen: '',
		places: [],
		completedList: [],
		selectedPlace: false,
		tabs: ['TASKS', 'COMPLETED'],
		selectedTab: '',
		tasks: [],
		completed: [],
	},
	components: {
		'place': PlaceComponent,
		'coin': CoinComponent,
		'timeline': TimelineComponent,
		'tab': TabComponent,
		'task': TaskComponent
	},
	created() {
		this.id = this.getUserID()
		this.selectedScreen = this.screens[0]
		this.selectedTab = this.tabs[0]
		// this.randomChoice()
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
						this.fetchCompletedListCoin()
						this.fetchCompletedListDay()
						this.selectedScreen = this.screens[2]
					})
				})
			}
		},
		randomChoice() {
			placeModel.randomChoice().then()
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
		fetchCompleted(name) {
			placeModel.getCompleted(name).then(data => {
				this.completed = data
			})
		},
		fetchCompletedList() {
			placeModel.getCompletedList().then(data => {
				if (this.selectedScreen === this.screens[1]) {
					this.completedList = data.sort((a, b) => a.coin - b.coin)
					return
				}
				this.completedList = data.sort((a, b) => a.visitedDate < b.visitedDate)
			})
		},
		getTotalCoin() {
			placeModel.getTotalCoin().then(data => {
				this.totalCoin = data
			})
		},
		onClickCard(name) {
			this.fetchTaskList(name)
			this.fetchCompleted(name)
			this.selectedScreen = name
			this.selectedPlace = true
		},
		onClickTab(tab) {
			this.selectedTab = tab
		},
		goPlace() {
			if (!this.screen === 'Place') return
			this.selectedTab = this.tabs[0]
			this.selectedScreen = this.screens[0]
			this.selectedPlace = false
		},
		goCoin() {
			if (!this.screen === 'Coin') return
			this.getTotalCoin()
			this.fetchCompletedList()
			this.selectedScreen = this.screens[1]
			this.selectedPlace = false
		},
		goTimeLine() {
			if (!this.screen === 'TimeLine') return
			this.fetchCompletedList()
			this.selectedScreen = this.screens[2]
			this.selectedPlace = false
		},
	}
})
