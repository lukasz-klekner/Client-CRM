const express = require('express')

const clientRouter = express.Router()

clientRouter
    .get('/', (req, res) => {
        res.send('Hello World!')
    })
    .get('/:id', (req, res) => {
        res.send('Hello World 2!')
    })
    .post('/', (req, res) => {
        res.send('Hello World POST!')
    })
    .put('/:id', (req, res) => {
        res.send('Hello World PUT!')
    })
    .delete('/:id', (req, res) => {
        res.send('Hello World DELETE!')
    })

module.exports = {
    clientRouter
}