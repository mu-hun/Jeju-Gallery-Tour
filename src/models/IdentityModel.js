export default {
	data: null,
	set() {
		this.data = Math.floor(Math.random()*999999999)
	},
	get() {
		return Promise.resolve(this.data)
	}
}
