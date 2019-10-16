class FS_Proxy {
    //TODO all methods as a real fs

    constructor(fs_subject) {
        this.fs = fs_subject;
    }
    readFile(path, format, callback) {
        if(!path.match(/.md$|.MD$/)) {
            return callback(new Error('There is no markdown files'))
        }

        this.fs.readFile(path, format, (error, contents) => {
            if(error) {
                console.error(error);
                return callback(error);
            }

            return callback(null, contents);
        });
    }
}

module.exports = FS_Proxy;