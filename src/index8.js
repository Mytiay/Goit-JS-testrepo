массив.map((element, index, array) => {
  // Тело коллбек-функции
});

массив.flatMap((element, index, array) => {
  // Тело коллбек-функции
});

массив.filter((element, index, array) => {
  // Тело коллбек-функции
});

массив.find((element, index, array) => {
  // Тело коллбек-функции
});

массив.findIndex((element, index, array) => {
  // Тело коллбек-функции
});

массив.every((element, index, array) => {
  // Тело коллбек-функции
});

массив.some((element, index, array) => {
  // Тело коллбек-функции
});

массив.reduce((previousValue, element, index, array) => {
  // Тело коллбек-функции
}, initialValue);

const scores = [61, 19, 74, 35, 92, 56];
scores.sort();
console.log(scores); // [19, 35, 56, 61, 74, 92]