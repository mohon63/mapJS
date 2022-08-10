const numbers = [3, 5, 7, 10, 15, 12, 9, 21, 25];

const bigNumber = numbers.filter(number => number > 20);
const smallNumber = numbers.filter(number => number < 10);
// console.log(smallNumber)

const products = [
    { name: 'water bottole', price: 50, colour: 'yellow' },
    { name: 'sun glass', price: 150, colour: 'black' },
    { name: 'watch', price: 100, colour: 'red' },
    { name: 'mobile', price: 10000, colour: 'pink' },
    { name: 'tShart', price: 550, colour: 'blue' }
];
const expensive = products.filter(product => product.price > 100);
// console.log(expensive)

const blacks = products.filter(product => product.colour == 'black');
console.log(blacks)
