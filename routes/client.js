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
    .get('/edit/:id', (req, res) => {
        res.render('client/edit-client', {
            client: db.getOne(req.params.id)
        })
    })
    .get('/:id', (req, res) => {
        res.render('client/one-client', {
            client: db.getOne(req.params.id)
        })
    })
    .post('/', async (req, res, next) => {
        try {
           const id = await db.create(req.body)

            res.render('client/added',{
                id
            })
        } catch(error){
            next(error)
        }
    })
    .put('/:id', (req, res) => {
        db.update(req.params.id, req.body)
        res.render('client/updated', {
            id: req.params.id
        })
    })
    .delete('/:id', (req, res) => {
        db.delete(req.params.id)
        res.render('client/deleted')
    })

module.exports = {
    clientRouter
}