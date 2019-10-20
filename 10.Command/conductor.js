class Conductor {
    constructor() {
        this.history = [];
        this.undone = [];
    }
    run(command) {
        console.log(`Executin command: ${command.name}`);
        command.execute();
        this.history.push(command);
    }

    printHistory() {
        this.history.forEach((i) => {
            console.log(i);
        })
    }

    undo() {
        console.log('undo', command.name)
        var command = this.history.pop();
        command.undo();
        this.undone.push(command);
    }

    redo() {
        console.log('redo', command.name)
        var command = this.undone.pop();
        command.execute();
        this.history.push(command);
    }
}

module.exports = new Conductor();