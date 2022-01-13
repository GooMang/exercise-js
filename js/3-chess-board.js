function exercise3() {
    console.log("  !3-chess-board!");
    for (let i = 1; i < 9; i++) {
        for (let f = 1; f < 9; f++) {
          if (i % 2 == 0) {
            console.log(" # # # #");
          } else {
            console.log("# # # #");
          }
        }
  }
}