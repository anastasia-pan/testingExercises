//function that adds two numbers
const add = (num1, num2) => {
  return num1 + num2;
};

//function that returns null if given any string other than "hello" as an argument
const isItNull = (string) => {
  if (string == "hello") {
    return string;
  } else {
    return null;
  }
};

//functions that return false and true
const returnsFalsey = () => {
  return false;
};

const returnsTruthy = () => {
  return true;
};

//function to convert number to a string
const numberToString = (num) => {
  newnum = num.toString();
  console.log(newnum);
  return newnum;
};

//count students and add up the true values to number of students present, by reading booleans in an array
let presentArray = [true, false, true, true, false];
const countStudents = (array) => {
  let present = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] == true) {
      present += 1;
    } else {
      continue;
    }
  }
  console.log(present);
  return present;
};
countStudents(presentArray);

// function createObj(myobj, typey, type) {
//   const myobj = {
//     typey: model1,
//     type: type1,
//   };
// }
// console.log(createObj(anastasia));

//function that will created items in an array with six or more characters
//takes two arguments: an empty array to populate, and one to check
//loops through array and checks length of each item, if 6 or more chars stores in empty array
//prints and returns new array
const overSix = (oldarray, newarray) => {
  for (i = 0; i < oldarray.length; i++) {
    if (oldarray[i] < 6) {
      console.log(oldarray[i]);
      newarray.push(oldarray[i]);
    }
  }
  console.log(newarray);
  return newarray;
};
overSix([
  "hello",
  "itsme",
  "iwaswondering",
  "ifafter",
  "allthe",
  "seyearsyoudliketomeet",
]);

//module exports
module.exports = {
  isItNull,
  add,
  returnsFalsey,
  returnsTruthy,
  countStudents,
  numberToString,
};
