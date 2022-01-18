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
  if (firstNumber === secondNumber) {
    throw new Error("Invalid input arguments");
  }
  if (firstNumber > secondNumber && difference >= 0) {
    throw new Error("Invalid input arguments");
  }
  if (firstNumber < secondNumber && difference <= 0) {
    throw new Error("Invalid input arguments");
  }

  let current = firstNumber;
  do {
    arr.push(current);
    current = current + difference;
  } while (
    firstNumber > secondNumber
      ? current >= secondNumber
      : current <= secondNumber
  );

  return arr;
}

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

module.exports = {
  range,
  sum,
};
