export default {
	template: '#place',
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
}
