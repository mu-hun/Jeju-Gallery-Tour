<template>
  <ul>
    <div class="bar"></div>
    <div v-if="getList.length">
      <li v-for="place in getList">
        <div class="left">
          <div class="date-srt">{{place.visitedDate}}</div>
          <div
            class="img"
            v-bind:style="{ 'background-image': 'url(./img/36x36/' + place.img + ')' }"
          ></div>
        </div>
        <div class="right">
          <h2>{{place.name}}</h2>
          <ul class="item-list">
            <li v-for="item in place.items">
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
      </li>
    </div>
    <div v-else class="none-list">
      <div class="mdil mdil-factory"></div>Not yet viseted any place :(
    </div>
  </ul>
</template>

<script lang="ts">
import { Vue, PropSync, Component } from 'vue-property-decorator'

@Component
export default class TimeLine extends Vue {
	@PropSync('list', { type: Array }) getList!: place[]
}
</script>

<style scoped>
.bar {
	margin-top: 20px;
}

ul > div > li {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	color: var(--black);
	margin: 1em auto 0.5em 28px;
}

.left {
	flex-basis: 52px;
}

.date-srt {
	font-size: 0.5em;
	margin-bottom: 1em;
}

.img {
	width: 36px;
	height: 36px;
	border-radius: 50%;
	background-size: cover;
}

.right {
	font-size: 12px;
	margin-top: 21px;
}

h2 {
	margin-bottom: 5px;
	font-size: 12px;
	font-weight: normal;
}

.item-list {
	font-weight: 300;
}
</style>

