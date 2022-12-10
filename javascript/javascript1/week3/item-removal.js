// Item array removal

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];

//one way
let res = names.findIndex((isAhmed) => isAhmed === "Ahmad");
let removeName = names.splice(res, 1);
console.log(names);

//another way
const newArray = names.filter((name) => name !== "Ahmad");
console.log(newArray);