<template>
	<div>
		<div class="user-id">{{getId}}</div>
		<div class="total-coin">{{total}} C</div>
		<div class="bar"></div>
		<ul v-if="list.length" class="card bg">
			<li v-for="(place, index) in list" v-bind:style="{ 'background-image': 'linear-gradient( rgba(0,0,0,0.5),rgba(0,0,0,0.5) ), url(./img/' + place.img + ')' }">
				<div class="details">
					<h3>#{{index+1}}</h3>
					<h4>{{place.coin}}</h4>
				</div>
				<h2>{{place.name}}</h2>
			</li>
		</ul>
		<div v-else class="none-list">
			<div class="mdil mdil-factory"></div>
			Not yet viseted any place :(
		</div>
	</div>
</template>

<script>
export default {
	name: 'Coin',
	props: ['id', 'total', 'list'],
	computed: {
		getId: function () {
			return this.id
		}
	}
}
</script>

<style scoped>
.card > li h3 {
	margin-top: 1em;
	margin-bottom: 5px;
	font-size: 12px;
}

.card > li h4 {
	font-size: 1.5em;
}
</style>
