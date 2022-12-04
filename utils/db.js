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

    async create(obj){
        this._data.push(obj)
        await writeFile(this.dbFileName, JSON.stringify(this._data), 'utf8')
    }
}

const db = new Db('client.json')

module.exports = {
    db
}