export default {
	data: null,
	set() {
		this.data = Math.floor(Math.random()*999999)
	},
	get() {
		return Promise.resolve(this.data)
	}
}
