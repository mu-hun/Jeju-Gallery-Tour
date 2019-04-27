export default {
	data: [],
	list() {
		return Promise.resolve(this.data)
	},
	pushDataFromServer(data) {
		return Promise.resolve({this.data = data})
	},
	getPlace(name) {
		return Promise.resolve(
			this.list().then(data => data.filter(item => item.name === name)[0])
		)
	},
	getTasks(name) {
		return Promise.resolve(
			this.getPlace(name).then(data => data.items.filter(i => i.completed === false))
		)
	},
	moveToCompleted({
		place,
		name
	}) {
		this.getTasks(place).then(data => data.filter(item => item.name === name).forEach(item => item.completed = true))
	},
	getCompleted(name) {
		if (!name) return Promise.reject('no completed item')
		return Promise.resolve(
			this.getPlace(name).then(data => data.items.filter(i => i.completed === true))
		)
	},
	getCompletedList() {
		return Promise.resolve(this.list()
			.then(data => {
				data.forEach(place =>
					this.getCompleted(place.name).then(
						filtered => {
							if (place.coin >= filtered.length * 10) return
							place.coin = filtered.length * 10
						}
					)
				)
				return data.filter(place => place.coin > 0) //??
			})
		)
	},
	getTotalCoin() {
		return Promise.resolve(
			this.list().then(data => data.reduce((acc, place) => {
				acc += place.items.filter(item => item.completed === true).length
				return acc
			}, 0) * 10)
		)
	},
	getVisitedDate(name) {
		return Promise.resolve(
			this.getPlace(name).then(data => data.visitedDate)
		)
	},
	randomChoice() {
		const place = this.data[Math.floor(Math.random() * this.data.length)]
		const selected = place.items[Math.floor(Math.random() * place.items.length)]
		selected.completed = true
		return Promise.resolve({
			place: place.name,
			name: selected
		})
	}
}
