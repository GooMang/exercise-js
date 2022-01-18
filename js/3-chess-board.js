function exercise3() {
  console.log("  !3-chess-board!");
  console.log(getChessBoard());
}

function getChessBoard() {
  let board = "";
  for (let i = 1; i < 9; i++) {
    for (let j = 1; j < 9; j++) {
      if ((i + j) % 2 == 0) {
        board = board + "#";
      } else {
        board = board + " ";
      }
    }
    board = board + "\n";
  }
  return board;
}
