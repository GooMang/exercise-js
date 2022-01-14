function exercise7() {
  console.log("  !7-summArray!");
  let firstNumber = Number(prompt("Задание 7 Введите первое значение для диапазона"));
  let secondNumber = Number(prompt("Введите второе значение"));
  console.log(range(firstNumber, secondNumber));
  console.log(sum(range(firstNumber, secondNumber)));
}

function range(firstNumber, secondNumber) {
  let i = 0;
  let arr = [];
  if (firstNumber < secondNumber) {
    difference = secondNumber - firstNumber;
    while (difference + 1 >= 1) {
      arr.push(firstNumber);
      i++;
      firstNumber++;
      difference--;
    }
  } else {
    difference = firstNumber - secondNumber;
    while (difference + 1 >= 1) {
      arr.push(firstNumber);
      i++;
      firstNumber--;
      difference--;
    }
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
