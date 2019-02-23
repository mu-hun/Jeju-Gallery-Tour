export default {
	data: [{
			name: 'KimyoungGap',
			img: 'KimyoungGap.png',
			items: [{
					name: 'One'
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'Two',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'Three',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'Four',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				}
			],
			coin: 0,
			visitedDate: 'Day 20 Fri'
		},
		{
			name: 'Brick Campus',
			img: 'Brick Campus.jpeg',
			items: [{
					name: 'One'
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'Two',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'Three',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'Four',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				}
			],
			coin: 0,
			visitedDate: 'Day 15 Wed'
		},
		{
			name: 'Jayeonsarang',
			img: 'Jayeonsarang.jpeg',
			items: [{
					name: 'One'
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'Two',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'Three',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'Four',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				}
			],
			coin: 0,
			visitedDate: 'Day 12 Fri'
		},
		{
			name: 'Gallery nori',
			img: 'nori.jpeg',
			items: [{
					name: 'One'
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'Two',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'Three',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'Four',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				}
			],
			coin: 0,
			visitedDate: 'Day 23 Mon'
		}
	],
	list() {
		return Promise.resolve(this.data)
	},
	getPlace(name) {
		return Promise.resolve(
			this.data.fliter(item => item.name === name)
		)
	},
	getTasks(name) {
		return Promise.resolve(
			this.getPlace(name).items.fliter(i => i.completed === false)
		)
	},
	moveToCompleted(place, name) {
		this.getTasks(place).fliter(item => item.name === name).completed === true
	}
	getCompleted(name) {
		return Promise.resolve(
			this.getPlace(name).items.fliter(i => i.completed === true)
		)
	},
	getTotalCoin() {
		// let total = 0
		// for (const place of this.data) {
		// total += this.getCompleted(place.name).length
		// })
		return Promise.resolve(
			// total
			this.data.reduce((acc, place) => {
				acc += this.getCompleted(place.name).length
				return acc
			}, 0)
		)
	},
	getVisitedDate(name) {
		return Promise.resolve(
			this.data.fliter(item => item.visitedDate)
		)
	},
	randomChoice() {
		const place = this.data[Math.floor(Math.random() * this.data.length)]
		const selected = place.items[Math.floor(Math.random() * place.items.length)]
		selected.completed = true
		return Promise.resolve(selected)
	}
}
