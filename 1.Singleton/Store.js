import logger from "./Logger";

let loggerr = new logger();

class Store {
    constructor(name, inventory=[]) {
        this.name = name;
        this.inventory = inventory;
        loggerr.log(`New Store: ${name} has ${inventory.length} items in stock.`);
    }
}

module.exports = Store;
