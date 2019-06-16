<template>
  <div v-if="list.length">
    <li v-for="item in list">
      <div>
        <h2>{{item.name}}</h2>
        <div class="img" v-bind:style="{ 'background-image': 'url(./img/80x80/' + item.img + ')' }"></div>
      </div>
      <div class="right">
        <p>{{item.detail}}</p>
        <p class="tags">
          <span v-for="tag in item.tags">#{{tag}}</span>
        </p>
      </div>
    </li>
  </div>
  <div v-else class="none-list">
    <div class="mdil mdil-alert"></div>No have a item
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'


@Component
export default class TasksLi extends Vue {
	@Prop(Array) readonly list!: item
}
</script>

<style scoped>
li {
	letter-spacing: 0.1px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	background-color: rgb(137, 137, 137);
}

.right {
	display: flex;
	flex-direction: column;
	/* justify-content: flex-start; */
	margin-left: 1em;
	margin-right: 1em;
	margin-top: 44px;
	height: 80px;
	position: relative;
}

h2 {
	font-size: 1em;
	font-weight: 600;
	margin-top: 1em;
	margin-bottom: 9px;
}

.img {
	width: 80px;
	height: 80px;
	background-size: contain;
}

p {
	font-size: 0.5em;
	font-weight: 400;
}

.tags {
	position: absolute;
	bottom: 0;
}

.none-list {
	text-align: center;
}

.none-list > .mdil {
	font-size: 36px;
	color: var(--disable);
}
</style>

