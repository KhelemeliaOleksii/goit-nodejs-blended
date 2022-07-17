class CalculatorOOP {
    constructor(operation, numbers) {
        this.operation = operation;
        this.numbers = numbers;
    }
    setOperation = (operation, numbers) => {
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
    init = () => {
        this.setOperation(this.operation, this.numbers);
    }
}

// const operations = require('./operations')

const [operation, ...args] = process.argv.slice(2);

const numbers = args.map(item => Number(item));

module.exports = new CalculatorOOP(operation, numbers).init();
const homepage = new CalculatorOOP(operation, numbers).init();
const aboutpage = new CalculatorOOP(operation2, numbers2).init();