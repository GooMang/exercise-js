const { range, sum } = require("./7-summArray");

describe("range", () => {
  test("default test", () => {
    expect(range(2, 5)).toEqual([2, 3, 4, 5]);
  });

  test("with step", () => {
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
  });

  test("with negative step", () => {
    expect(range(10, 1, -2)).toEqual([10, 8, 6, 4, 2]);
  });

  test("default test with negative value", () => {
    expect(range(-10, -1, 2)).toEqual([-10, -8, -6, -4, -2]);
  });
});

describe("sum", () => {
  test("default test", () => {
    expect(sum(range(1, 10))).toBe(55);
  });
});

// test("with negative step", () => {
//   expect(range(5, 2, -1)).toEqual([5, 4, 3, 2]);
// });
