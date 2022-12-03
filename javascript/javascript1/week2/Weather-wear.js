function whatToWear(temp){
  if (temp < 0 || temp > 40){
    return ('better not to go outside :)')
  } else if(temp <= 15){
    return ('Pants and Jacket')
  } else if (temp <= 25){
    return ('Sweater and Pants')
  } else {
    return ('Shorts and T-shirt')
  }
}
let result = whatToWear(22);
console.log(result)