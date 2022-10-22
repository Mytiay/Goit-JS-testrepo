Колбэк-функции
// Функции не отличаются от чисел, строк или массивов - это просто специальный тип данных (объект высшего порядка), значение, которое можно хранить в переменной или передавать как аргумент в другую функцию.

function greet(name) {
  return `Добро пожаловать ${name}.`;
}

// Вызываем функцию greet и выводим результат в консоль
console.log(greet("Манго")); // Добро пожаловать Манго.

// Выводим функцию greet в консоль не вызывая её
console.log(greet); // ƒ greet() { return `Добро пожаловать ${name}.`; }

// В первом логе мы вызываем функцию greet при помощи круглых скобок и в консоль выводится результат её выполнения. Во втором логе передаётся ссылка на функцию, а не результат вызова (отсуствуют круглые скобки), поэтому в консоль выводится её тело. Это значит, что функцию можно присвоить в переменную или передать как аргумент другой функции.

// Функция обратного вызова (callback, колбэк) - это функция, которая передаётся другой функции в качестве аргумента и та, в свою очередь, вызывает переданную функцию.

// Функция высшего порядка(higher order function) - функция, принимающая в качестве параметров другие функции или возвращающая функцию как результат.

// Колбэк-функция
function greet(name) {
  console.log(`Добро пожаловать ${name}.`);
}

// Функция высшего порядка
function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

registerGuest("Манго", greet);

// Мы передали ссылку на функцию greet как аргумент, поэтому она будет присвоена в параметр callback и вызвана внури функции registerGuest через круглые скобки. Имя параметра для колбэка может быть произвольным, главное помнить, что значением будет функция.