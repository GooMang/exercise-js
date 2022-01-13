function min(first, second) {
  if (first > second) {
    return second;
  } else {
    return first;
  }
}
function exercise4() {
  console.log("  !4-min!");
  let first = prompt("Задача номер 4, введите первое число");
  let second = prompt("Задача номер 4, введите второе число");
  console.log(min(first, second));
}
