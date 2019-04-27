import PM from './PlaceModel.js';
// import underscord TODO for _.isEqual

dataSet = [{
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
	visitedDate: null
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
	visitedDate: null
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
	visitedDate: null
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
	visitedDate: null
}]

PM.pushDataFromServer(dataSet)
	.then(_ => PM.moveToCompleted("Brick Campus", "Brick Campus")
		.then(_ => PM.getCompleted("Brick Campus")
		.then(item => console.assert(item === ))
		}))
