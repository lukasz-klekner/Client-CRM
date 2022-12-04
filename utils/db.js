const { readFile, writeFile } = require('fs').promises
const { join } = require('path')
const { v4 } = require('uuid')

class Db {
    constructor(dbFileName){
        this.dbFileName = join(__dirname, '../db', dbFileName)
        this._loadData()
    }

    async _loadData() {
        this._data = JSON.parse(await readFile(this.dbFileName, 'utf8'))
    }

    async create(obj){
        this._data.push({
            ...obj,
            id: v4()
        })
        await writeFile(this.dbFileName, JSON.stringify(this._data), 'utf8')
    }

    getAll(){
        return this._data
    }

    async update(id, newObject){
        this._data = this._data.map(item => item.id === id ? { ...item, ...newObject } : item)
        await writeFile(this.dbFileName, JSON.stringify(this._data), 'utf8')
    }

    async delete(id){
        this._data = this._data.filter(item => item.id!== id)
        await writeFile(this.dbFileName, JSON.stringify(this._data), 'utf8')
    }
}

const db = new Db('client.json')

module.exports = {
    db
}