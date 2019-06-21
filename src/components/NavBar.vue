<template>
	<div>
      <span
        v-bind:class="{ 'mdil-active': selected==screens[0] }"
        class="mdil mdil-map-marker"
        v-on:click="goPlace"
      ></span>
      <span
        v-bind:class="{ 'mdil-active': selected===screens[1] }"
        class="mdil mdil-trophy"
        v-on:click="goCoin"
      ></span>
      <span
        v-bind:class="{ 'mdil-active': selected==screens[2] }"
        class="mdil mdil-clock"
        v-on:click="goTimeLine"
      ></span>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component
export default class NavBar extends Vue {
	@Prop(String) readonly selected!: string
	screens: string[] = ['Place', 'Coin', 'TimeLine']
	
	@Emit('@place')
	goPlace() {
		return
	}

	@Emit('@coin')
	goCoin() {
		return
	}

	@Emit('@timeline')
	goTimeLine() {
		return
	}
}
</script>

<style scoped>
 div {
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
	-webkit-text-stroke: .6px;
	color: var(--disable);
	cursor: pointer;
}

.mdil-active {
	color: var(--black);
	-webkit-text-stroke: .7px;
	cursor: unset;
}
</style>

