const numbers = [10, 20, 30, 40, 50, 60, -100];

let sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(sum);