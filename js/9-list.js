function exercise9() {
  console.log("  !9-list!");
  console.log(arrayToList([10, 20, 30]));
  //   → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // // → 20
}

function arrayToList(array) {
  let list = null;
  for (i = array.length - 1; i >= 0; i--) {
    list = prepend(array[i], list);
  }
  return list;
}

// function arrayToList2(array) {
//   const reversedArray = reverseArray(array);
//   return reversedArray.reduce(prepend, null);
// }

function listToArray(list) {
  let array = [];
  let i = 0;
  while (list.rest != null) {
    array[i] = list.value;
    i++;
    list = list.rest;
  }
  array[i] = list.value;
  return array;
}

function nth(list, numb) {
  for (let i = 0; i < numb; i++) {
    list = list.rest;
  }
  return list.value;
}

function prepend(value, rest) {
  return { value, rest };
}
