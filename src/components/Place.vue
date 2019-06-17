<template>
  <ul class="card bg">
    <li
      v-for="place in list"
      v-bind:style="{ 'background-image': 'linear-gradient( rgba(0,0,0,0.5),rgba(0,0,0,0.5) ), url(./img/' + place.img + ')' }"
      v-on:click="onClickCard(place.name)"
    >
      <h2>{{place.name}}</h2>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component, PropSync, Emit } from 'vue-property-decorator'

@Component
export default class Place extends Vue {
	@PropSync('data', { type: Array }) list!: place[]

	@Emit('@click')
	onClickCard(name: string) {
		return name
	}
}
</script>

<style scoped>
.card > li {
	cursor: pointer;
}
</style>
