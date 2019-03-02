export default {
	template: '#coin',
	props: ['id', 'total', 'list'],
	computed: {
		getId: function () {
			return this.id
		}
	}
}
