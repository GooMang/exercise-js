function exercise5() {
  console.log("  !5-recursion!");
  let number = Number(
    prompt("Задание 5, введите число и мы скажем, чётное ли оно или нет")
  );
  console.log(isEven(number));
}

function isEven(number) {
  number = Math.abs(number);
  if (number === 0) {
    return true;
  } else if (number === 1) {
    return false;
  } else {
    return isEven(number - 2);
  }
}
