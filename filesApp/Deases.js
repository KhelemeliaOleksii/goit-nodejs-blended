const path = require('path');
const fs = require("fs/promises");
const { v4: uuid } = require('uuid');

console.log(__dirname);
console.log(__filename);

const dataFilePath = path.join(__dirname, 'db', 'db.json');

console.log(dataFilePath);

class Deases {
    constructor() {
        this.dease = {
            "title": "Monkey feaver",
            "duration": "14 days",
            "deaths": "25,000",
        }
    }

    save = async () => {
        try {
            const deases = await this.getAll();
            const newDease = {
                ...this.dease,
                id: uuid(),
            }
            deases.push(newDease);
            await fs.writeFile(dataFilePath, JSON.stringify(deases, null, 4));
            return newDease;
        } catch (error) {
            console.log(error);
        }
    }
    getAll = async () => {
        try {
            const data = await fs.readFile(dataFilePath);
            const deases = JSON.parse(data);
            // console.log(deases);
            return deases;
        } catch (error) {
            // console.log(error);
        }
    }
    update() {
        console.log("update");
    }
    remove() {
        console.log("remove");
    }
}


module.exports = new Deases();