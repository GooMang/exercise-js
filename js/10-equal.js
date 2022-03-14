function exercise10() {
  console.log("  !10-list!");
  const obj = { here: { is: "an" }, object: 2 };
  console.log(deepEqual(obj, obj));
  console.log(deepEqual(obj, { here: 1, object: 2 }));
  console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
}

function deepEqual(firstObj, secondObj) {
  const zeroObj = {};
  let firstObjCheck = 0;
  let secondObjCheck = 0;
  if (
    typeof firstObj === typeof secondObj &&
    typeof firstObj === typeof zeroObj
  ) {
    for (let key in firstObj) {
      if (deepEqual(firstObj[key], secondObj[key]) === false) {
        console.log("check-obj-no");
        return false;
      }
      firstObjCheck++;
    }
    for (let key in secondObj) {
      secondObjCheck++;
    }
    if (firstObjCheck == secondObjCheck) {
      console.log("check-obj-yes");
      return true;
    } else {
      return false;
    }
  } else if (firstObj === secondObj) {
    console.log("check-three-=");
    return true;
  } else if (Number(firstObj) === Number(secondObj)) {
    console.log("check-Number");
    return true;
  } else {
    console.log("check-false");
    return false;
  }
}
