const overSix = (oldarray, newarray) => {
  for (i = 0; i < oldarray.length; i++) {
    if (oldarray[i] < 6) {
      console.log(oldarray[i]);
      newarray.push(oldarray[i]);
    }
  }
  console.log(newarray);
};

let things = [
  "hello",
  "itsme",
  "iwaswondering",
  "ifafter",
  "allthe",
  "seyearsyoudliketomeet",
];

let newthings = [];
overSix(things, newthings);
