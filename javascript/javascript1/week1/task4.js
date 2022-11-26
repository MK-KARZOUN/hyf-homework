//Startup name generator
const firstWords = ["Easy", "Great", "Yoga", "Tasty", "Market","Drump", "Same","Stadium", "Future"]
const secondWords = ["Bell", "Shop", "Load", "Mode", "Pro", "Loob", "Crazy", "IT", "Bright", "Us"]
const randomNumber = [Math.floor(Math.random() *10)];
const StartupName = firstWords[(randomNumber )] +(" ")+ secondWords[(randomNumber)]
console.log(`startup name: ${StartupName} contains ${StartupName.length} charachters`)