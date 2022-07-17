console.log("Hello! Calc");

// console.log(process.argv);
// Commands:
// sum
// sub
// mult
// div

const [operation, ...args] = process.argv.slice(2);
console.log(operation);
const numbers = args.map(item => Number(item));

console.log(numbers);


switch (operation) {
    case "sum":
        const sum = numbers.reduce((total, item) => total + item, 0);
        console.log(sum);
        break;
    case "sub":
        const sub = numbers.reduce((total, item) => total - item);
        console.log(sub);
        break;
    case "mult":
        const mult = numbers.reduce((total, item) => total * item);
        console.log(mult);
        break;
    case "div":
        const div = numbers.reduce((total, item) => total / item);
        console.log(div);
        break;
    default:
        console.error("Invalid command");
        break;
}