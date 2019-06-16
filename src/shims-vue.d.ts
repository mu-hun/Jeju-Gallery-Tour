declare module '*.vue' {
	import Vue from 'vue'
	export default Vue
}

interface random {
	name: string
	item: item
}

interface identity {
	name: string
	img?: string
}

interface item extends identity {
	detail: string
	tags: string[]
	completed: boolean
}

interface place extends identity {
	items: item[]
	coin: number
	visitedDate: number
}
