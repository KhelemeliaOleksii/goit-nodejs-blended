const [operation, ...args] = process.argv.slice(2);
console.log(operation);
const numbers = args.map(item => Number(item));

console.log(numbers);


const setOperation = (operation, numbers) => {
    let result = null;
    switch (operation) {
        case "sum":
            result = numbers.reduce((total, item) => total + item);
            break;
        case "sub":
            result = numbers.reduce((total, item) => total - item);
            break;
        case "mult":
            result = numbers.reduce((total, item) => total * item);
            break;
        case "div":
            result = numbers.reduce((total, item) => total / item);
            break;
        default:
            result = "Invalid command";
            break;
    }
    console.log("result", result);
}

setOperation(operation, numbers);