class CalculatorStatic {
    // constructor(operation, numbers) {
    //     this.operation = operation;
    //     this.numbers = numbers;
    // }
    static setOperation = (operation, numbers) => {
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
    static init = (operation, numbers) => {
        this.operation = operation;
        this.numbers = numbers;

        this.setOperation(this.operation, this.numbers);
    }

}

// const operations = require('./operations')

const [operation, ...args] = process.argv.slice(2);

const numbers = args.map(item => Number(item));

module.exports = CalculatorStatic.init(operation, numbers);
