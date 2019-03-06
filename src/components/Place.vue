<template>
  <ul class="card bg">
		<li v-for="place in places" v-bind:style="{ 'background-image': 'linear-gradient( rgba(0,0,0,0.5),rgba(0,0,0,0.5) ), url(./img/' + place.img + ')' }"
		 v-on:click="onClickCard(place.name)">
			<h2>{{place.name}}</h2>
		</li>
	</ul>
</template>

<script>
export default {
  name: 'Place',
  props: ['data'],
	computed: {
		places: function() {
			return this.data
		}
	},
	methods: {
		onClickCard(name) {
			this.$emit('@click', name)
		}
	}
};
</script>

<style scoped>
.card > li {
	cursor: pointer;
}
</style>
