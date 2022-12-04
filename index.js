const express = require('express');
const { engine } = require('express-handlebars');

const { clientRouter } = require('./routes/client');
const { homeRouter } = require('./routes/home');
const { db } = require('./utils/db')

const app = express();

app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')

app.use('/', homeRouter)
app.use('/client', clientRouter)

app.use('/test', (req, res) => {
    db.update('d3666d28-4551-403f-82b0-19caaf7d5050',{
        name: 'Mateusz',
    })
    res.send(JSON.stringify(db.getAll()))
})

app.listen('3000', 'localhost')