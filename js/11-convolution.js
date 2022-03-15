function exercise11() {
  console.log("  !10-list!");
  const arrays = [[1, 2, 3], [4, 5], [6]];
  console.log(convolution(arrays));
}

function convolution(arrays) {
  const array = [];
  const sum = 0;
  const result = arrays.reduce(function (array, sum) {
    return array.concat(sum);
  });
  return result;
}
