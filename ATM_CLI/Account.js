const { rejects } = require('assert');
const fs = require('fs')
module.exports = class Account {
    constructor(name) {
        this.#name = name //#name stating its private
    }

    #name;
    #balance //declaring there is a private variable
    
    get name() {
        return this.#name
    }
    get balance() {
        return this.#balance
    }

    get filePath() {
        return `account/${this.name}.text`
    }

    #load() {
        return new Promise((resolve, rejects) = {
            fs.readFile(this.filePath, (err, data) => {
                if (err) return reject(err)
                this.#balance = parseFloat(data)
                resolve()
            })
        })
    }

    async static find(accountname) {
        const account = new Account(accountname)
        await account.#load()
    }
}