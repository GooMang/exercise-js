function exercise16() {
  console.log("  !16-interface!");

  function logFive(object) {
    for (let i = 0; i < 5; i++)
      if (object.arr[i] == undefined) {
        break;
      } else {
        console.log(object.arr[i]);
      }
  }

  class ArraySeq {
    constructor(array) {
      this.arr = array;
    }
  }
  class RangeSeq {
    constructor(minRange, maxRange) {
      let i = 0;
      let arr = [];
      for (minRange; minRange < maxRange; minRange++, i++) {
        arr[i] = minRange;
      }
      this.arr = arr;
    }
  }

  logFive(new ArraySeq([1, 2]));
  // → 1
  // → 2
  logFive(new RangeSeq(100, 1000));
  // → 100
  // → 101
  // → 102
  // → 103
  // → 104
}
