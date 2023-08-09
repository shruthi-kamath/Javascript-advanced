module.exports = class FileSystem {
    static read(path) {
        return new Promise((resolve, rejects) = {
            fs.readFile(this.filePath, (err, data) => {
                if (err) return reject(err)
                this.#balance = parseFloat(data)
                resolve()
            })
        })
    }

    static write() {

    }
}