<template>
  <div>
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
    <!-- <div class="nfc" v-on:click="manualActive"></div> -->
    <div class="bottom-app-bar">
      <!-- FIX TODO: mdil-active v-bind not work -->
      <span
        v-bind:class="{ 'mdil-active': selectedScreen=='Place' }"
        class="mdil mdil-map-marker"
        v-on:click="goPlace"
      ></span>
      <span
        v-bind:class="{ 'mdil-active': selectedScreen==='Coin' }"
        class="mdil mdil-trophy"
        v-on:click="goCoin"
      ></span>
      <span
        v-bind:class="{ 'mdil-active': selectedScreen=='TimeLine' }"
        class="mdil mdil-clock"
        v-on:click="goTimeLine"
      ></span>
    </div>
  </div>
</template>

<script>
import PlaceModel from './models/PlaceModel.js'
import IdentityModel from './models/IdentityModel.js'

import Place from './components/Place.vue'
import Tasks from './components/Tasks.vue'
import Tabs from './components/Tabs.vue'
import Coin from './components/Coin.vue'
import TimeLine from './components/TimeLine.vue'

export default {
  name: "app",
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
  components: {
	Place,
	Tasks,
	Coin,
	TimeLine,
	Tabs	
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
					PlaceModel.randomChoice().then(data => {
						this.fetchCompletedListCoin()
						this.fetchCompletedListDay()
						this.selectedScreen = this.screens[2]
					})
				})
			}
		},
		randomChoice() {
			PlaceModel.randomChoice().then()
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
};
</script>

<style>
:root {
	--black: #323232;
	--active-tab: rgba(0, 0, 0, 0.87);
	--disable: #0000008a;
	--f-one-white: #F1F1F1;
	--very-light: rgba(216, 216, 216, 0.5);
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
p,
pre,
blockquote,
figure,
hr {
  margin: 0;
  padding: 0;
}

body {
	font-size: 16px;
}

noscript {
  display: block;
  margin-bottom: 1em;
  margin-top: 1em;
}

h1,
h2,
.date-srt {
	font-family: 'Inter', 'Sans-serif';
}

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

h1 {
	margin-top: 19px;
	margin-bottom: 20px;
	font-size: 36px;
	font-weight: bold;
}

h1, .user-id, .total-coin {
	margin-left: 26px;
	color: var(--black)
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

.bottom-app-bar {
	color: var(--black);
	display: flex;
	position: fixed;
	bottom: 0;
	flex-direction: row;
	justify-content: space-around;
	box-sizing: border-box;
	width: 100%;
	height: 3.5em;
	background-color: var(--f-one-white);
	box-shadow: 0 1px 3px 0 #00000033, 0 2px 1px -1px #0000001e, 0 1px 1px 0 #00000023;
}

.mdil {
	margin: 1rem auto;
	font-size: 1.5em;
	-webkit-text-stroke: .7px var(--black);
	color: var(--disable);
	cursor: pointer;
}

.mdil-active {
	color: var(--black);
	cursor: unset;
}
</style>
