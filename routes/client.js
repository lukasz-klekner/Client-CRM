const express = require('express')
const { db } = require('../utils/db')

const clientRouter = express.Router()

clientRouter
    .get('/', (req, res) => {
        res.render('client/all-clients', {
            clients: db.getAll()
        })
    })
    .get('/add', (req, res) => {
        res.render('client/add-client')
    })
    .get('/:id', (req, res) => {
        res.render('client/one-client', {
            client: db.getOne(req.params.id)
        })
    })
    .post('/', async (req, res) => {
        const id = await db.create(req.body)
        res.render('client/added',{
            id
        })
    })
    .put('/:id', (req, res) => {
        res.send('Hello World PUT!')
    })
    .delete('/:id', (req, res) => {
        db.delete(req.params.id)
        res.render('client/deleted')
    })

module.exports = {
    clientRouter
}