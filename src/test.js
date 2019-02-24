import placeModel from './models/placeModel.js'

// placeModel.getPlace('Jayeonsarang').then(data => console.log(data))

// placeModel.getTasks('Jayeonsarang').then(data => console.log(data))

placeModel.moveToCompleted('Jayeonsarang', 'One').then(data => console.log(data))

setTimeout(()=>placeModel.getCompleted('Jayeonsarang').then(data => console.log(data[0].name==='One')), 1000)

// placeModel.getTotalCoin().then(data => console.log(data))

// placeModel.getVisitedDate('Jayeonsarang').then(data => console.log(data))

// placeModel.randomChoice().then(data => console.log(data))

setTimeout(() => placeModel.getTotalCoin().then(data => console.log(data === 10)))
