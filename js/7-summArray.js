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

function range(firstNumber, secondNumber, difference = 1) {
  let arr = [];
  let error = "!Обнаружена ошибка, проверьте данные для ввода!";
  // TODO: do while
  if (firstNumber < secondNumber) {
    if (difference > 0) {
      do {
        arr.push(firstNumber);
        firstNumber = firstNumber + difference;
      } while (firstNumber <= secondNumber + 1);
    } else {
      return error;
    }
  } else {
    if (difference < 0) {
      do {
        arr.push(firstNumber);
        firstNumber = firstNumber + difference;
      } while (secondNumber <= firstNumber + 1);
    } else {
      return error;
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

module.exports = {
  range,
  sum,
};
