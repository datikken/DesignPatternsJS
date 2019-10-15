import logger from "./Logger";

let loggerr = new logger();

class Shopper {
    constructor(name, money) {
        this.name = name;
        this.money = money;
        loggerr.log(`This ${name} has ${money}`);
    }
}

module.exports = Shopper;