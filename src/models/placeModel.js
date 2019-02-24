export default {
	data: [{
			name: 'KimyoungGap',
			img: 'KimyoungGap.png',
			items: [{
					name: 'One',
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
			img: 'BrickCampus.jpeg',
			items: [{
					name: 'One',
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
					name: 'One',
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
					name: 'One',
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
			this.data.filter(item => item.name === name)[0]
		)
	},
	getTasks(name) {
		return Promise.resolve(
			this.getPlace(name).then(data => data.items.filter(i => i.completed === false))
		)
	},
	moveToCompleted(place, name) {
		return Promise.resolve(
			this.getTasks(place).then(data => data.filter(item => item.name === name).forEach(item => item.completed = true))
		)
	},
	getCompleted(name) {
		return Promise.resolve(
			this.getPlace(name).then(data => data.items.filter(i => i.completed === true))
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
		return Promise.resolve({place: place.name, selected: selected})
	}
}
