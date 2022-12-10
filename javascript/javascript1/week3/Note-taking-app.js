//note taking app

const notes = [];

//this function saves objects to the array
function saveNote (content, id){
  notes.push({content, id});
}
saveNote("Pick upgroceries", 1);
saveNote("Do laundry", 2);
saveNote("Do homework", 3)
console.log(notes);

//this function will check if i have an object with given id  
function getNote(id){
  for (i = 0; i < notes.length; i++){
    if (id === notes[i].id){
      return notes[i]
    } 
  }
  return "error string"
}
let secondNote = getNote(2)
console.log(secondNote) // { content: 'Do laundry', id: 2 }

function logOutNotesFormatted(a) {
  let arr = [];
  if (a === false){
    return arr
  } 
  for (i = 0; i < notes.length; i++){
    arr.push(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`)
    }
    return arr
}
//to check if the function works
console.log(logOutNotesFormatted(true).join("\n"));