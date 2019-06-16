<template>
  <ul>
    <li
      v-for="tab in tabs"
      v-bind:class="{active: tab === selected}"
      v-on:click="onClickTab(tab)"
    >{{tab}}</li>
  </ul>
</template>

<script lang="ts">
import { Vue, Prop, Emit, Component } from 'vue-property-decorator'

@Component
export default class Tabs extends Vue {
	@Prop(String) readonly selected!: string
	@Prop(Array) readonly tabs!: string
	
	@Emit('@switch')
	onClickTab(tab: string) {
		return tab
	}
}
</script>

<style scoped>
ul {
	display: flex;
	font-family: 'Libre Franklin';
	box-shadow: 0 10px 12px -0.5em #0000006e;
}

li {
	display: inline-block;
	width: 50%;
	font-size: 14px;
	font-weight: 800;
	letter-spacing: 1.3px;
	padding: 1em;
	text-align: center;
	box-sizing: border-box;
	color: var(--black);
	cursor: pointer;
}

li.active {
	border-bottom: 2.5px solid var(--active-tab);
	cursor: unset;
}
</style>

