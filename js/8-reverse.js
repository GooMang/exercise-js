function exercise8() {
  console.log("  !8-reverse!");
  console.log(reverseArray(["A", "B", "C"]));
  var arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
}

function reverseArray(array) {
  let reverse = [];
  for (let i = 0; i < array.length; i++) {
    reverse.push(array[array.length - i - 1]);
  }
  return reverse;
}

function reverseArrayInPlace(arrayValue) {
  for (let i = 0; i < arrayValue.length; i++) {
    arrayValue.push(arrayValue[arrayValue.length - i - 1]);
    arrayValue.splice(arrayValue.length - i - 2, 1);
  }
}
