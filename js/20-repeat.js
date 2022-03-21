function exercise20() {
  console.log("  !20-repeat!");
  console.log(reliableMultiply(8, 8));
}

function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5) return a * b;
  else throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  try {
    x = primitiveMultiply(a, b);
    return x;
  } catch {
    console.log("Ошибка!Пробуем ещё раз.");
    throw reliableMultiply(a, b);
  }
}
