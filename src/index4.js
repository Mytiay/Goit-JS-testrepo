// 1. Объявление функции multiply
function multiply() {
  // Тело функции
  console.log('Это лог при вызове функции multiply');
}

// 2. Вызовы функции multiply
multiply(); // 'Это лог при вызове функции multiply'
multiply(); // 'Это лог при вызове функции multiply'
multiply(); // 'Это лог при вызове функции multiply'


// 1. Объявление параметров x, y, z
function multiply(x, y, z) {
  console.log(`Результат умножения равен ${x * y * z}`);
}

// 2. Передача аргументов
multiply(2, 3, 5); // Результат умножения равен 30
multiply(4, 8, 12); // Результат умножения равен 384
multiply(17, 6, 25); // Результат умножения равен 2550


function multiply(x, y, z) {
  console.log("Код до return выполняется как обычно");

  // Возвращаем результат выражения умножения
  return x * y * z;

  console.log("Этот лог никогда не выполнится, он стоит после return");
}

// Результат работы функции можно сохранить в переменную
let result = multiply(2, 3, 5);
console.log(result); // 30

result = multiply(4, 8, 12);
console.log(result); // 384

result = multiply(17, 6, 25);
console.log(result); // 2550