const class07Students = [];
function addStudentToClass(studentName) {
  //check if the student name is an empty string
  if (studentName === ""){
    console.log("you cant add an empty string")
    return
  }
  //check the length of the students
  if (class07Students.length >= 6){
    //check if the queen among the list
    if (studentName != "Queen"){
      console.log("Cannot add more students to class 07")
      return
    }
  } 
  //checks if allready the student in the class
  if (class07Students.includes(studentName)){
    console.log(`student ${studentName} is already in the class`)
    return
  }
  class07Students.push(studentName)
}
// to know how many students in the class
function getNumberOfStudents() {
   return class07Students.length
}

addStudentToClass("malek")
addStudentToClass("maher")
addStudentToClass("")
addStudentToClass("hanin")
addStudentToClass("mohamed")
addStudentToClass("mom")
addStudentToClass("dad")
addStudentToClass("Queen")
addStudentToClass("Queen")

console.log(class07Students)
let numberOfStudent = getNumberOfStudents();
console.log(`the number of students in the class is ${numberOfStudent}`)