<template>
	<ul class="card">
		<span v-if="selected==='TASKS'">
			<task-li :list="tasks"></task-li>
		</span>
		<span v-else>
			<task-li :list="completed"></task-li>
		</span>
	</ul>
</template>

<script>
import TaskLi from '@/components/TasksLi.vue'

export default {
	name: 'Tasks',
	props: ['selected', 'tasks', 'completed'],
	components: {
		TaskLi
	}
}
</script>

<style scoped>
ul {
	margin-top: 1rem;
}
</style>

