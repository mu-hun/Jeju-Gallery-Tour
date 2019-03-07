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

<script>
export default {
	props: ['selected', 'screens'],
	methods: {
		goPlace() {
			this.$emit('@place')
		},
		goCoin() {
			this.$emit('@coin')
		},
		goTimeLine() {
			this.$emit('@timeline')
		}
	}
}
</script>

<style scoped>
 div {
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

