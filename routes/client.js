const express = require('express')

const { db } = require('../utils/db')
const { NotFoundError } = require('../utils/errors')

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
        const client = db.getOne(req.params.id)

        if(!client){
            throw new NotFoundError()
        }

        res.render('client/edit-client', {
            client: db.getOne(req.params.id)
        })
    })
    .get('/:id', (req, res) => {
        const client = db.getOne(req.params.id)

        if(!client){
            throw new NotFoundError()
        }

        res.render('client/one-client', {
            client
        })
    })
    .post('/', async (req, res, next) => {
        try {
           const id = await db.create(req.body)
            res.status(201).render('client/added',{
                id
            })
        } catch(error){
            next(error)
        }
    })
    .put('/:id', (req, res) => {
        const client = db.getOne(req.params.id)

        if(!client){
            throw new NotFoundError()
        }

        db.update(req.params.id, req.body)
        res.render('client/updated', {
            id: req.params.id
        })
    })
    .delete('/:id', (req, res) => {
        const client = db.getOne(req.params.id)

        if(!client){
            throw new NotFoundError()
        }

        db.delete(req.params.id)
        res.render('client/deleted')
    })

module.exports = {
    clientRouter
}