const boughtCandyPrices = [];
const amountToSpend = Math.random()*100;
const candyTablePrices = {
  "Sweet" : 0.5,
  "Chocolate" : 0.7,
  "Toffee" : 1.1,
  "Chewing-gum" : 0.03
}
function addCandy(candyType, weight){
  //calculate the candy price
  let price = candyTablePrices[candyType] * weight

  //add the price to the array boughtCandyPrices 
  boughtCandyPrices.push(price)
}

function canBuyMoreCandy(){
  let sum=0;
  for (let i=0; i<boughtCandyPrices.length; i++){
    sum = sum + boughtCandyPrices[i]
  }
  return amountToSpend > sum
} 


addCandy("Sweet", 500)
addCandy("Toffee", 100)

let can = canBuyMoreCandy();
if (can){
  console.log("You can buy more, so please do!")
} else{
  console.log("Enough candy for you!")
} 







