function countBs(string, letter) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == letter || string.charAt(i) == letter) counter++;
  }
  return counter;
}

function exercise6() {
  console.log("  !6-beans!");
  let string = prompt("Введите слово для анализа");
  let letter = prompt("Введие букву, которую надо найти");
  console.log(countBs(string, letter));
}
