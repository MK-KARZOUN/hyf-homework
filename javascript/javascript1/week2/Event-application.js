const Week = [ "Sun","Mon","Tus","Wed","Thu","Fri","Sat"]

function getEventDay(daysAfter){
    // get now date in milliseconds
    let todayInMilliseconds = new Date().getTime();
    // get number of days in milliseconds
    let daysAfterInMilliseconds = daysAfter * 24 * 60 * 60 * 1000;
    // add daysAfterInMilliseconds into todayInMilliseconds
    let eventDate = new Date(todayInMilliseconds+daysAfterInMilliseconds);
    // print out the produced day
   return Week[eventDate.getDay()];
}
  console.log(getEventDay(7))