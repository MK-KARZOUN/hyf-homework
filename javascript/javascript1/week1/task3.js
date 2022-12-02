// A house price estimator

// Peter
let width = 8;
let deep = 10;
let high = 10;
let gardenSizeInM2 = 100;
let offeredPrice = 2500000;
let volumInMeters = width * deep * high;
let housePrice = volumInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log(housePrice)

if(offeredPrice > housePrice){
  console.log("Peter is paying more than he should")
} else if(offeredPrice==housePrice){
  console.log("Peter is paying a fair price")
}else{
  console.log("Peter is paying less than he should")
}

// Julia
width = 5;
deep = 11;
high = 8;
gardenSizeInM2 = 70;
offeredPrice = 1000000;
volumInMeters = width * deep * high;
housePrice = volumInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log(housePrice)

if(offeredPrice > housePrice){
  console.log("Julia is paying more than she should")
} else if(offeredPrice==housePrice){
  console.log("Julia is paying a fair price")
}else{
  console.log("Julia is paying less than she should")
}
 