function exercise15() {
  console.log("  !15-vector!");
  class Vector {
    constructor(x1, y1) {
      this.x1 = x1;
      this.y1 = y1;
    }

    plus(object) {
      return new Vector(this.x1 + object.x1, this.y1 + object.y1);
    }

    minus(object) {
      return new Vector(this.x1 - object.x1, this.y1 - object.y1);
    }

    get length() {
      return this.calcLength();
    }

    calcLength() {
      return Math.sqrt(this.x1 * this.x1 + this.y1 * this.y1);
    }
  }

  console.log(new Vector(1, 2).plus(new Vector(2, 3)));
  // → Vector{x: 3, y: 5}
  console.log(new Vector(1, 2).minus(new Vector(2, 3)));
  // → Vector{x: -1, y: -1}
  console.log(new Vector(3, 4).length);
  // → 5
}
