var path = require('path');
var { appendFile } = require('fs');
var morse = require('morse');

class LogStrategy {
    static noDate(timestamp, message) {
        console.log(message);
    }
    static toFile(timestamp, message) {
        var filename = path.join(__dirname, 'logs.txt');
        appendFile(filename, `${timestamp} - ${message} \n`, error => {
            if(error) {
                console.log('error writing to file');
                console.error(error);
            }
        });
    }
    static toConsole(timestamp, message) {
        console.log(`${timestamp} - ${message}`);
    }

    static toMorseCode(timestamp, message) {
        var morseCode = morse.encode(message);
        var filename = path.join(__dirname, 'logs.txt');
        appendFile(filename, `${timestamp} - ${morseCode} \n`, error => {
            if(error) {
                console.log('error writing to file');
                console.error(error);
            }
        });
    }

    static none() {}
}

module.exports = LogStrategy;