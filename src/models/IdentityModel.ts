export default {
	data: 0,
	set(): void {
		this.data = Math.floor(Math.random()*999999999)
	},
	get(): number {
		return this.data
	}
}
