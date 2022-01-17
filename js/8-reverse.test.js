const { reverseArray, reverseArrayInPlace } = require("./8-reverse");

describe("reverseArray", () => {
  test("reverseArray test", () => {
    expect(reverseArray([5, 4, 3, 2])).toEqual([2, 3, 4, 5]);
  });

  test("reverseArray test 2", () => {
    const result = reverseArray([1, 2, 3, 4, 5]);
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });
});

describe("reverseArrayInPlace", () => {
  test("reverseArrayInPlace test 3", () => {
    let arr = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arr);
    expect(arr).toEqual([5, 4, 3, 2, 1]);
  });
});
