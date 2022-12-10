//When will we be there??

const travelInformation = {
  speed: 100,
  destinationDistance: 432,
};

//one way

// // i want to assign the value of both speed and destinationDistance

let speed = travelInformation.speed;
let destinationDistance = travelInformation.destinationDistance;

// // i want to calculate how many hours

let timeInhours = Math.floor(
  destinationDistance / speed - (destinationDistance % speed) / 100
);

// i want to calculate how many minutes

let timeInminutes = Math.floor(
  (destinationDistance / speed - timeInhours) * 60
);

function timeToTravel() {
  return `It takes ${timeInhours} hours and ${timeInminutes} minutes .`;
}

let travelTime = timeToTravel();
console.log(travelTime);



//another way

// function timeToTravel(speed, destinationDistance) {
//   let timeInhours = Math.floor(destinationDistance / speed);

//   let timeInminutes = Math.floor(
//     (destinationDistance / speed - timeInhours) * 60
//   );

//   return `${timeInhours} hours and ${timeInminutes} minutes`;
// }

// let result = timeToTravel(70, 432);
// console.log(result); // 6 hours and 10 minutes
