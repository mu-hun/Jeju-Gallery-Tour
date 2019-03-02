export default {
	template: '#timeline',
	props: ['list'],
	computed: {
		getList: function () {
			return this.list
		}
	}
}
