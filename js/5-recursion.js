console.log("  !5-recursion!");
let number = prompt(
  "Задание 5, введите число и мы скажем, чётное ли оно или нет"
);
function isEven(number) {
    number = Math.abs (number);
  while (number > 1) {
    number = number - 2;
  }
  if (number == 1) {
    return false;
  } else {
    return true;
  }
}
console.log(isEven(number));
