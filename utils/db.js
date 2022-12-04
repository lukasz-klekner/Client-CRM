const { readFile, writeFile } = require('fs').promises
const { join } = require('path')

class Db {
    constructor(dbFileName){
        this.dbFileName = join(__dirname, '../db', dbFileName)
        this._loadData()
    }

    async _loadData() {
        this._data = JSON.parse(await readFile(this.dbFileName, 'utf8'))
    }
}

const db = new Db('client.json')

module.exports = {
    db
}