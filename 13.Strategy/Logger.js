var logStrategy = require('./logStrategy');
var config = require('./config');
class Logger {

    constructor(strategy='toConsole') {
        this.logs = [];
        this.strategy = logStrategy[strategy];
    }

    get count() {
        return this.logs.length
    }

    changeStrategy(newStrategy) {
        this.strategy = logStrategy[newStrategy];
    }

    log(message) {
        const timestamp = new Date().toISOString()
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
        this.strategy(timestamp, message);
    }

}

module.exports = new Logger(config.logs.strategy);
