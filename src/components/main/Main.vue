<template>
  <div>
	<button class="mdil mdil-logout" @click="onClickLogout"></button>
    <h1>{{selectedScreen}}</h1>

    <div v-show="!selectedPlace">
      <div v-show="selectedScreen===screens[0]">
        <place :data="places" v-on:@click="onClickCard"></place>
      </div>
      <div v-show="selectedScreen===screens[1]">
        <coin :id="id" :total="totalCoin" :list="completedList"></coin>
      </div>
      <div v-show="selectedScreen===screens[2]">
        <TimeLine :list="completedList"></TimeLine>
      </div>
    </div>
    <div v-if="selectedPlace">
      <tabs :selected="selectedTab" :tabs="tabs" v-on:@switch="onClickTab"></tabs>
      <tasks :selected="selectedTab" :tasks="tasks" :completed="completed"></tasks>
    </div>
	<nav-bar :selected="selectedScreen" :screens="screens" v-on:@place="goPlace" v-on:@coin="goCoin" v-on:@timeline="goTimeLine"></nav-bar>
  </div>
</template>

<script>
import firebase from '@/firebase.js'

import PlaceModel from '@/models/PlaceModel.js'
import IdentityModel from '@/models/IdentityModel.js'

import Place from './screens/Place.vue'
import Tasks from './screens/tasks/Tasks.vue'
import Tabs from './screens/tasks/Tabs.vue'
import Coin from './screens/Coin.vue'
import TimeLine from './screens/TimeLine.vue'
import NavBar from './NavBar.vue'

const db = firebase.database()

export default {
  name: "Main",
  data() {
	  return {
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
	  }
  },
  computed: {
	  getUID: function() {
		  return this.$store.getters.getUser.uid
	  }
  },
  components: {
	Place,
	Tasks,
	Coin,
	TimeLine,
	Tabs,
	NavBar
  },
  created() {
	  	this.getServerData()
		this.id = this.getUserID()
		this.selectedScreen = this.screens[0]
		this.selectedTab = this.tabs[0]
		// this.randomChoice()
		this.fetchCardList()
	},
	mounted() {
		this.triggerNFC()
		this.getServerData()
		db.ref(`users/${this.getUID}/data`).on('value', snapshot => console.log(snapshot.val()))
	},
	methods: {
		getServerData() {
			db.ref(`users/${this.getUID}/data`).once('value').then(snapshot => PlaceModel.pushDataFromServer(snapshot.val()))
			// db.ref(`users/${this.getUID}/data`).on('value', (snapshot) => PlaceModel.getServerData(snapshot.val())
		},
		triggerNFC() {
			if ('nfc' in navigator) {
				navigator.nfc.watch((msg) => {
					PlaceModel.randomChoice().then(data => {
						this.fetchCompletedListCoin()
						this.fetchCompletedListDay()
						this.selectedScreen = this.screens[2]
					})
				})
			}
		},
		modelUpdate(data) {
			PlaceModel.update(data)
		},
		randomChoice() {
			PlaceModel.randomChoice()
		},
		getUserID() {
			IdentityModel.set()
			IdentityModel.get().then(data => {
				this.id = data
			})
		},
		fetchCardList() {
			PlaceModel.list().then(data => {
				this.places = data
			})
		},
		fetchTaskList(name) {
			PlaceModel.getTasks(name).then(data => {
				this.tasks = data
			})
		},
		fetchCompleted(name) {
			PlaceModel.getCompleted(name).then(data => {
				this.completed = data
			})
		},
		fetchCompletedList() {
			PlaceModel.getCompletedList().then(data => {
				if (this.selectedScreen === this.screens[1]) {
					this.completedList = data.sort((a, b) => a.coin - b.coin)
					return
				}
				this.completedList = data.sort((a, b) => a.visitedDate < b.visitedDate)
			})
		},
		getTotalCoin() {
			PlaceModel.getTotalCoin().then(data => {
				this.totalCoin = data
			})
		},
		onClickNav(name) {
			const way = {'Place': this.goPlace(), 'Coin': this.goCoin(), 'TimeLine': this.goTimeLine()}
			way[name]
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
		onClickLogout() {
			// TODO: go '/login' page instead of redirect to accountchooser.com
			firebase.auth().signOut()
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
};
</script>

<style scope>
.user-id,
.total-coin,
.card > li h3,
.card > li h4,
.none-list,
.right,
p {
	font-family: 'Spoqa Han Sans', 'Sans-serif';
	font-weight: normal;
}


.user-id {
	margin-top: 20px;
	font-size: 0.5rem;
}

.total-coin {
	font-size: 1.5em;
}

ul {
	list-style-type: none;
}

.card li {
	height: 140px;
	margin: 0 26px 1em;
	padding-left: 1em;
	opacity: 0.92;
	box-shadow: 0 1px 4px 0 #00000080;
	background-size: cover;
	border-radius: 0.5rem;
	position: relative;
	background-position-y: bottom -1.5em;
	color: var(--f-one-white);
}

.card > li h2 {
	margin-bottom: 0;
	bottom: 1rem;
}

.card.bg li > * {
	position: absolute;
}

.bar {
	width: 100%;
	height: 0.5em;
	background-color: var(--very-light);
	margin-bottom: 14px;
}

button {
	position: absolute;
	right: 26px;
	margin-top: 19px;
}

.mdil {
	margin: 1rem auto;
	font-size: 1.5em;
	-webkit-text-stroke: .7px var(--black);
	color: var(--disable);
	cursor: pointer;
}

.mdil-logout {
	font-size: 36px;
	border: 0;
	background-color: inherit;
	color: var(--black);
	margin: 0;
	padding: 0;
}

.none-list {
	text-align: center;
}

.none-list > .mdil {
	font-size: 36px;
	color: var(--disable);
}
</style>
