// переменные
// let x = 5;
// const age = 10;
// const userName = 'Oleg';
// const message = 'hello world'
const isOpen = true;
// const shouldConfirm = false;
// оператор typeoff> для проверки типа переменной!

const type = typeof isOpen;

console.log(type)

// alert блокирует интерпритацию
// console.log('before');
// alert('did you know?');
// console.log('after');

// window.confirm(), window.prompt()
// const shouldRenew = confirm('take again?')
// console.log(shouldRenew)

// const constanta = prompt('add number');
// console.log(constanta);
const pricePerDroid = 800;
let orderedQuantity = 6;
const deliveryFee = 50;
let totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
console.log(message)