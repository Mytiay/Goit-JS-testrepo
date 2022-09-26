const totalSpent = 2000;
let payment = 100;
let discount = 0;

if (totalSpent < 100) {
    console.log('not a partner')
}
else if (totalSpent >= 100 && totalSpent <= 1000) {
    console.log('бронзовый партнер, скидка 2%')
    discount = 0.02;
}
else if (totalSpent >= 1000 && totalSpent <= 5000){
    console.log('серебряный партнер, скидка 5%')
    discount = 0.05;
}
else if (totalSpent > 5000){
    console.log('gold партнер, скидка 10%')
    discount = 0.1;
}
else {
    console.log('not a partner, discount 0%')
}

console.log(`оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`)
