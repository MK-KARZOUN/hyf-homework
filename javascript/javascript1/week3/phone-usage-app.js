//Adding an activity
let activities = [];
function addActivity(date, activaty, duration){
  activities.push({date, activaty, duration})
}
addActivity("10-12-22", "Youtube", 78);
addActivity("10-12-22", "Facebook", 84);
addActivity("10-12-22", "Instagram", 23);
addActivity("10-12-22", "WhatsApp", 66);
console.log(activities)

let totalAmount = 0;
function showStatus(activities, limit){
  //i am using for-loop to calculate the total duration
  for (i = 0; i < activities.length; i++){
    totalAmount += activities[i].duration
  }
  // using if-statment to check if the apps usage < limit or not
  if (totalAmount < limit){
    return `You have added ${activities.length} activities. They amount to ${totalAmount} min. of usage`
  }
  return `You have reached your limit, no more smartphoning for you!`
}
console.log(showStatus(activities, 100))
// You have reached your limit, no more smartphoning for you!

