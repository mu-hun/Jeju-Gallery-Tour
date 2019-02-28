// import list from './db/places.json'

export default {
	data: [{
		name: "KimyoungGap",
		img: "KimyoungGap.png",
		items: [{
			name: "용눈이 오름",
			img: "e-audio.jpg",
			detail: "20년 전 오름은 사람들의 관심을 끌지 못했다. 매스컴이나 관광안내서에서도 오른을 비중 있게 다루지 않았다. 주로 백록담 주변의 고산지대를 집중적으로 부각시켰고, 그렇게 모두들 한라산 하면 백록담을 연상했다.",
			tags: ["용눈이_오름", "바람", "오름"],
			completed: false
		}],
		coin: 0,
		visitedDate: "Day 20 Fri"
	}, {
		name: "Brick Campus",
		img: "BrickCampus.jpeg",
		items: [{
			name: "Brick Campus",
			img: "profile.jpg",
			detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.",
			tags: ["want", "go", "home"],
			completed: false
		}],
		coin: 0,
		visitedDate: "Day 15 Wed"
	}, {
		name: "Jayeonsarang",
		img: "Jayeonsarang.jpeg",
		items: [{
			name: "Jayeonsarang",
			img: "profile.jpg",
			detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.",
			tags: ["want", "go", "home"],
			completed: false
		}],
		coin: 0,
		visitedDate: "Day 12 Fri"
	}, {
		name: "Gallery nori",
		img: "nori.jpeg",
		items: [{
			name: "nori One",
			img: "profile.jpg",
			detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.",
			tags: ["want", "go", "home"],
			completed: false
		}],
		coin: 0,
		visitedDate: "Day 10 Mon"
	}],
	list() {
		return Promise.resolve(this.data)
	},
	getPlace(name) {
		return Promise.resolve(
			this.data.filter(item => item.name === name)[0]
		)
	},
	getTasks(name) {
		return Promise.resolve(
			this.getPlace(name).then(data => data.items.filter(i => i.completed === false))
		)
	},
	moveToCompleted({place, name}) {
		this.getTasks(place).then(data => data.filter(item => item.name === name).forEach(item => item.completed = true))
	},
	getCompleted(name) {
		//FIX: TypeError: "(intermediate value).getCompleted(...).then is not a function"
		if (!name) {
			return Promise.resolve('')
		}
		return Promise.resolve(
			this.getPlace(name).then(data => {
				const filtered = data.items.filter(i => i.completed === true)
				data.coin = filtered.length
				return filtered
			})
		)
	},
	getTotalCoin() {
		return Promise.resolve(
			this.data.reduce((acc, place) => {
				acc += place.items.filter(item => item.completed === true).length
				return acc
			}, 0) * 10
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
		return Promise.resolve({place: place.name, name: selected})
	}
}
