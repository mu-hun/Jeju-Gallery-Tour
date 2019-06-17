export default {
	data: [
		{
			name: 'KimyoungGap',
			img: 'KimyoungGap.png',
			items: [
				{
					name: '용눈이 오름',
					img: 'e-audio.jpg',
					detail:
						'20년 전 오름은 사람들의 관심을 끌지 못했다. 매스컴이나 관광안내서에서도 오른을 비중 있게 다루지 않았다. 주로 백록담 주변의 고산지대를 집중적으로 부각시켰고, 그렇게 모두들 한라산 하면 백록담을 연상했다.',
					tags: ['용눈이_오름', '바람', '오름'],
					completed: false,
				},
			],
			coin: 0,
			visitedDate: 20170303,
		},
		{
			name: 'Brick Campus',
			img: 'BrickCampus.jpeg',
			items: [
				{
					name: 'Brick Campus',
					img: 'profile.jpg',
					detail:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tags: ['want', 'go', 'home'],
					completed: true,
				},
			],
			coin: 10,
			visitedDate: 20170303,
		},
		{
			name: 'Jayeonsarang',
			img: 'Jayeonsarang.jpeg',
			items: [
				{
					name: 'Jayeonsarang',
					img: 'profile.jpg',
					detail:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tags: ['want', 'go', 'home'],
					completed: true,
				},
			],
			coin: 10,
			visitedDate: 20180204,
		},
		{
			name: 'Gallery nori',
			img: 'nori.jpeg',
			items: [
				{
					name: 'nori One',
					img: 'profile.jpg',
					detail:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis orci, pellentesque at venenatis a, mattis et neque. Aliquam interdum.',
					tags: ['want', 'go', 'home'],
					completed: true,
				},
			],
			coin: 10,
			visitedDate: 20190301,
		},
	] as place[],
	async list(): Promise<place[]> {
		return this.data
		// TODO: name과 img 속성만 복사하기
		// .reduce(i => ({ name: i.name, img: i.img }))
	},
	async getPlace(name: string): Promise<place> {
		const target = this.data.find(item => item.name === name)
		if (typeof target === 'undefined') throw Error('Invalid search')
		return target
	},
	async getTasks(name: string): Promise<item[]> {
		const { items } = await this.getPlace(name)
		return items.filter(i => i.completed === false)
	},
	async moveToCompleted(place: string, name: string): Promise<void> {
		const tasks = await this.getTasks(place)
		const Index = tasks.findIndex(i => i.name === name)
		tasks[Index].completed = true
	},
	async getCompleted(name: string): Promise<item[]> {
		const { items } = await this.getPlace(name)
		return items.filter((i: item) => i.completed === true)
	},
	async getCompletedList(): Promise<place[]> {
		this.data.forEach(async place => {
			const filtered = await this.getCompleted(place.name)
			if (place.coin >= filtered.length * 10) return
			place.coin = filtered.length * 10
		})
		return this.data.filter(place => place.coin)
	},
	async getTotalCoin(): Promise<number> {
		return (
			this.data.reduce((acc, place): number => {
				acc += Object.keys(this.getCompleted(place.name)).length
				return acc
			}, 0) * 10
		)
	},
	async getVisitedDate(name: string): Promise<number> {
		const { visitedDate } = await this.getPlace(name)
		return visitedDate
	},
	async randomChoice(): Promise<random> {
		const place: place = this.data[
			Math.floor(Math.random() * this.data.length)
		]
		const selected: item =
			place.items[Math.floor(Math.random() * place.items.length)]
		selected.completed = true
		return {
			name: place.name,
			item: selected,
		}
	},
}
