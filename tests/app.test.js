const { add } = require("../app.js");
test("should equal 5 when passed 2 and 3", () => {
  expect(add(2, 3)).not.toBe(6);
});
it("should equal 5 when passed 2 and 3", () => {
  expect(add(2, 3)).toBe(5);
});

// Look up null jest null property testing. error message:
//   ● given hello as argument, it should not return null

//   TypeError: Cannot read properties of null (reading 'toReturn')

const { isItNull } = require("../app.js");
it("given hello as argument, it should not return null ", () => {
  expect(isItNull("hai").toBeFalsey());
});

//test that checks that a function returns false
const { returnsFalsey } = require("../app.js");
test("returns false", () => {
  expect(returnsFalsey()).toBe(false);
});

const { numberToString } = require("../app.js");
test("converts number to string", () => {
  expect(numberToString(2)).toMatch("2");
});

//test that checks that a function counts booleans in an array
const { countStudents } = require("../app.js");
test("counts trues in an array", () => {
  expect(countStudents([true, false, true])).toBe(2);
});

//square every digit and concatenate
