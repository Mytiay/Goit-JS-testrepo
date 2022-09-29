//----------------------for of--------------------//

function filterArray(numbers, value) {
  const filteredNumbers = [];

    for (let number of numbers) {
     console.log(number)
    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));