<template>
	<ul class="card">
		<task-li :list="dict[selected]"></task-li>
	</ul>
</template>

<script>
import TaskLi from './TasksLi.vue'

export default {
	name: 'Tasks',
	props: ['selected', 'tasks', 'completed'],
	components: {
		TaskLi
	},
	data() {
		return {
			dict: {'TASKS': this.tasks, 'COMPLETED': this.completed}
		}
	}
}
</script>

<style scoped>
ul {
	margin-top: 1em;
}
</style>

