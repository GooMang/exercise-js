function exercise14() {
  console.log("  !14-every-and-some!");
  console.log(
    every(
      [
        [NaN, 3],
        [NaN, 3],
        [NaN, 3],
      ],
      [NaN, 3]
    )
  );
  console.log(
    every(
      [
        [NaN, 3],
        [NaN, 3],
        [NaN, 4],
      ],
      [NaN, 3]
    )
  );
  console.log(
    some(
      [
        [NaN, 3],
        [NaN, 4],
        [NaN, 4],
      ],
      [NaN, 3]
    )
  );
  console.log(
    some(
      [
        [NaN, 4],
        [NaN, 4],
        [NaN, 4],
      ],
      [NaN, 3]
    )
  );
}

function every(array, controlArray) {
  var checkArray = 0;
  var checkControlArray = 0;
  array.forEach((element) => {
    checkControlArray++;
    if (JSON.stringify(element) == JSON.stringify(controlArray)) {
      checkArray++;
    }
  });
  if (checkArray != checkControlArray) {
    return false;
  } else {
    return true;
  }
}

function some(array, controlArray) {
  var checkArray = 0;
  array.forEach((element) => {
    if (JSON.stringify(element) == JSON.stringify(controlArray)) {
      checkArray++;
    }
  });
  if (checkArray != 0) {
    return false;
  } else {
    return true;
  }
}
