<template>
  <ul class="card bg">
    <li
      v-for="place in places"
      v-bind:style="{ 'background-image': 'linear-gradient( rgba(0,0,0,0.5),rgba(0,0,0,0.5) ), url(./img/' + place.img + ')' }"
      v-on:click="onClickCard(place.name)"
    >
      <h2>{{place.name}}</h2>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component
export default class Place extends Vue {
	@Prop(Array) private data!: place[]
	get places(): place[] {
		return this.data
	}

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
