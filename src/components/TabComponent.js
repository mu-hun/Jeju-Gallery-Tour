export default {
	template: '#tab',
	props: ['selected', 'tabs'],
	methods: {
		onClickTab(tab) {
			this.$emit('@switch', tab)
		}
	}
}
