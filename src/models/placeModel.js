export default {
	data: [{
			name: 'KimyoungGap',
			img: 'KimyoungGap.png',
			items: [{
					name: 'KimyoungGapOne',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'TKimyoungGapwo',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'ThreKimyoungGape',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'FKimyoungGapour',
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
					name: 'OBrick Campusne',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'Two Brick Campus',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'ThBrick Campusree',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'Brick CampusFour',
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
					name: 'OneJayeonsarang',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'TwJayeonsarango',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'JayeonsarangThree',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'FoJayeonsarangur',
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
					name: 'nori One',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'Two Gallery',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'nory Three',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				},
				{
					name: 'Four Gallery',
					img: 'profile.jpg',
					detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tag: '#want #go #home',
					completed: false
				}
			],
			coin: 0,
			visitedDate: 'Day 10 Mon'
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
	moveToCompleted({place, name}) {
		// return Promise.resolve(
			this.getTasks(place).then(data => data.filter(item => item.name === name).forEach(item => item.completed = true))
		// )
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
		return Promise.resolve({place: place.name, selected: selected})
	}
}
