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
    <nav-bar
      :selected="selectedScreen"
      v-on:@place="goPlace"
      v-on:@coin="goCoin"
      v-on:@timeline="goTimeLine"
    ></nav-bar>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Model } from 'vue-property-decorator'

import PlaceModel from './models/PlaceModel'
import IdentityModel from './models/IdentityModel'

import Place from './components/Place.vue'
import Tasks from './components/Tasks.vue'
import Tabs from './components/Tabs.vue'
import Coin from './components/Coin.vue'
import TimeLine from './components/TimeLine.vue'
import NavBar from './components/NavBar.vue'

@Component({
	components: {
		Place,
		Tasks,
		Coin,
		TimeLine,
		Tabs,
		NavBar,
	}
})

export default class App extends Vue {
	id: number = 0
	totalCoin: number = 0
	screens: string[] = ['Place', 'Coin', 'TimeLine']
	selectedScreen: string = ''
	places: place[] = []
	completedList: place[] = []
	selectedPlace: boolean = false
	tabs: string[] = ['TASKS', 'COMPLETED']
	selectedTab: string = ''
	tasks: item[] = []
	completed: item[] = []

	created() {
		this.getUserID()
		this.selectedScreen = this.screens[0]
		this.selectedTab = this.tabs[0]
		this.fetchCardList()
	}
	getUserID() {
		IdentityModel.set()
		this.id = IdentityModel.get()
	}
	fetchCardList() {
		PlaceModel.list().then(data => {
			this.places = data
		})
	}
	fetchTaskList(name: string) {
		PlaceModel.getTasks(name).then(data => {
			this.tasks = data
		})
	}
	fetchCompleted(name: string) {
		PlaceModel.getCompleted(name).then(data => {
			this.completed = data
		})
	}
	fetchCompletedList() {
		PlaceModel.getCompletedList().then(data => {
			if (this.selectedScreen === this.screens[1]) {
				this.completedList = data.sort((a, b) => a.coin - b.coin)
				return
			}
			this.completedList = data.sort((a, b) => {
				const ad = a.visitedDate
				const bd = b.visitedDate
				if (ad > bd) return 1
				if (ad < bd) return -1
				return 0
			})
		})
	}
	getTotalCoin() {
		PlaceModel.getTotalCoin().then(data => {
			this.totalCoin = data
		})
	}
	onClickCard(name: string) {
		this.fetchTaskList(name)
		this.fetchCompleted(name)
		this.selectedScreen = name
		this.selectedPlace = true
	}
	onClickTab(tab: string) {
		this.selectedTab = tab
	}
	goPlace() {
		this.selectedTab = this.tabs[0]
		this.selectedScreen = this.screens[0]
		this.selectedPlace = false
	}
	goCoin() {
		this.getTotalCoin()
		this.fetchCompletedList()
		this.selectedScreen = this.screens[1]
		this.selectedPlace = false
	}
	goTimeLine() {
		this.fetchCompletedList()
		this.selectedScreen = this.screens[2]
		this.selectedPlace = false
	}
}
</script>

<style>
:root {
	--black: #323232;
	--active-tab: rgba(0, 0, 0, 0.87);
	--disable: #0000008a;
	--f-one-white: #f1f1f1;
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

h1,
.user-id,
.total-coin {
	margin-left: 26px;
	color: var(--black);
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
</style>
