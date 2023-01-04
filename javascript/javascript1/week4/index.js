const info =[];
let currentUserName;

const getUser = (name) => info.find((user) => user.name === name)

function getReply(command){

  if(command.includes("my name is"))
    return gretting(command)

  if(command.includes("What is my name"))
    return introduceCurrentUser()

  if(command.includes("add") && command.includes("todo"))
    return addToTodo(command)

  if(command.includes("remove") && command.includes("todo"))
    return removeTodo(command)

  if(command.includes("what is") && command.includes("my todo")){
    let user = getUser(currentUserName)
    return user.todo
  }

  if(command.includes("day") && command.includes("today"))
    return dateNow()

  if(command.includes("what is"))
    return calc(command)

  if(command.includes("timer"))
    return timer(command)
  
  return "Sorry i cant understand you!"
}

function gretting(command){
  let name = getName(command);
  if(hasUser(name)){
    return `Welcome back ${name}`
  } else {
    insertUser(name)
    return `Nice to meet you ${name}`
  } 
}

function introduceCurrentUser(){
  if(currentUserName){
    return currentUserName
  } 
  return "you are not registered yet!"
} 

function getName(command){
  let splittedCommand = command.split(" ")
  let name = splittedCommand[splittedCommand.length - 1]
  return name
}

const hasUser = (name) => info.some(user => user.name === name)

function insertUser(name){
  let user = {name: name , todo : []}  
  info.push(user)
  currentUserName = name
}

function addToTodo(command){
 let todo = getTodo(command)
 if(hasTodo(todo)){
  return `You have already ${todo} in your todo`
 } else {
  let user = getUser(currentUserName)
  user.todo.push(todo)
  return `${todo} is added to your todo`
 }
}

function getTodo(command){
  let splittedCommand = command.split(" ")
  let todo = splittedCommand.slice(1, splittedCommand.length-3)
  return todo.join(" ")
}

const hasTodo = (todo) => info.some(user => user.todo.includes(todo))

function removeTodo(command){
  let todo = getTodo(command)
  if(!hasTodo(todo)){
    return `You dont have ${todo} in your todo `
  } else {
    let user = getUser(currentUserName)
    user.todo.splice(user.todo.indexOf(todo), 1)
    return `${todo} has been removed from your todo`
  }
}

function dateNow(){
    var currentDate = new Date()
    var day = currentDate.getDate()
    let month = currentDate.getMonth()
    var year = currentDate.getFullYear()
    month = getMon(month)
    return("It's " + day + "." + " of " + month + " " + year)
}

function getMon(month){
  if(month === 0){
    return "January"
  } else if(month === 1){
    return "February "
  } else if(month === 2){
    return "March "
  } else if(month === 3){
    return "April "
  } else if(month === 4){
    return "May "
  } else if(month === 5){
    return "June "
  } else if(month === 6){
    return "July "
  } else if(month === 7){
    return "August "
  } else if(month === 8){
    return "September "
  } else if(month === 9){
    return "October "
  }else if(month === 10){
    return "November "
  } else if(month === 11){
    return "December "
  }
  return month
}

function calc(command){
  let regex = /\d+/g;
  // this command will find all the numbers
  let nums = command.match(regex)
  // this code will retrieves the result of matching a string by regular ecpression
  if(command.includes("+")){
    result = parseInt(nums[0]) + parseInt(nums[1])
  } else if(command.includes("-")){
    result = parseInt(nums[0]) - parseInt(nums[1])
  } else if(command.includes("*")){
    result = parseInt(nums[0]) * parseInt(nums[1])
  } else{
    result = parseInt(nums[0]) / parseInt(nums[1])
  }
  // using if statment, because we have 4 different possibilities
  return result
}

function timer(command){
  let regex = /\d+/;
  let time = command.match(regex);
  let timeInMinuts = parseInt(time[0]);
  let timeInseconds = timeInMinuts * 60;
  let timerInMilliSecond = timeInseconds * 1000;
  setTimeout(() => {console.log("Timer done")}, timerInMilliSecond)
  return "Timer is set"
}

let res = getReply("Hello my name is malek")
console.log(res)
res = getReply("Hello my name is malek")
console.log(res)
res = getReply("What is my name")
console.log(res)
res = getReply("add do homework to my todo")
console.log(res)
res = getReply("add fishing to my todo")
console.log(res)
res = getReply("remove fishing from my todo")
console.log(res)
res = getReply("what is on my todo list")
console.log(res)
res = getReply("what day is today")
console.log(res)
res = getReply("what is 9 / 3")
console.log(res)
res =getReply("Set a timer for 1 minutes")
console.log(res)
console.log(info)