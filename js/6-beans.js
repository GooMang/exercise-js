function exercise6() {
  console.log("  !6-beans!");
  let str = prompt("Введите слово для анализа");
  let letter = prompt("Введие букву, которую надо найти");
  console.log(countChar(str, letter));
}

function countChar(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter++;
    }
  }
  return counter;
}
