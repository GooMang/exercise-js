const { range } = require("./7-summArray");

test("default test", () => {
  expect(range(2, 5)).toEqual([2, 3, 4, 5]);
});

test("with step", () => {
  expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
});

// test("with negative step", () => {
//   expect(range(5, 2, -1)).toEqual([5, 4, 3, 2]);
// });
