function getFullname(firstName, surName, useFormalName, userGender) {
  let fullname = `${firstName} ${surName}`
  //check if the user wawnts formal name
  if (useFormalName){
  //check what the gender of the user
    if(userGender === "male")
      fullname = `Lord ${fullname}`
    else 
      fullname = `Lady ${fullname}`
  }
  return fullname
}
let result = getFullname('Maha', 'Karzoun', false, 'female');
// this code to call / execute a function 
console.log(result);