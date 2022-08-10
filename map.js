const numbers = [3, 5, 7, 9, 11];

const output2 = [];

const doubleIt = number => number * 2;
for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result)
}
// console.log(output);

// const output = numbers.map(doubleIt);
const output = numbers.map(number => number * 3);
console.log(output);

const products = [
    { name: 'water bottole', price: 50, colour: 'yellow' },
    { name: 'sun glass', price: 150, colour: 'black' },
    { name: 'watch', price: 100, colour: 'red' },
    { name: 'mobile', price: 10000, colour: 'pink' },
    { name: 'tShart', price: 550, colour: 'blue' }
];

const productName = products.map(product => product.name);
console.log(productName)