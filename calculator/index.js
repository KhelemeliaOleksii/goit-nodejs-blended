console.log("Hello! Calc");

// console.log(process.argv);
// Commands:
// sum
// sub
// mult
// div
const operations = require('./operations')

const [operation, ...args] = process.argv.slice(2);
console.log(operation);
const numbers = args.map(item => Number(item));

console.log(numbers);

module.exports = operations(operation, numbers);

