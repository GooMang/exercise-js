function exercise7() {
  console.log("  !7-summArray!");
  let firstNumber = Number(
    prompt("Задание 7 Введите первое значение для диапазона")
  );
  let secondNumber = Number(prompt("Введите второе значение"));
  let difference = Number(prompt("Введите шаг"));
  console.log(range(firstNumber, secondNumber, difference));
  console.log(sum(range(firstNumber, secondNumber, difference)));
}

function range(firstNumber, secondNumber, difference) {
  let arr = [];
  if (isNaN(difference) == true) {
    difference = 1;
  }
  if (firstNumber < secondNumber) {
    arr.push(firstNumber);
    for (; firstNumber < secondNumber; ) {
      firstNumber = firstNumber + difference;
      arr.push(firstNumber);
    }
  } else {
    arr.push(firstNumber);
    for (; secondNumber < firstNumber; ) {
      firstNumber = firstNumber - difference;
      arr.push(firstNumber);
    }
  }
  if (secondNumber != firstNumber) {
    arr.pop();
  }
  return arr;
}

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
