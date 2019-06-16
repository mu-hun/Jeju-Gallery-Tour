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

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import TaskLi from '@/components/TasksLi.vue'

@Component({
	components: {
		TaskLi
	}
})

export default class Tasks extends Vue {
	@Prop(String) readonly selected!: string
	@Prop(Array) readonly tasks!: item[]
	@Prop(Array) readonly completed!: item[]
}
</script>

<style scoped>
ul {
	margin-top: 1em;
}
</style>

