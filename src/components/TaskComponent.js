import TaskLiComponent from './TaskLiComponent.js'

export default {
	template: '#task',
	props: ['selected', 'tasks', 'completed'],
	components: {
		'task-li': TaskLiComponent
	}
}
