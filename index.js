const express = require('express');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override')

const { clientRouter } = require('./routes/client');
const { homeRouter } = require('./routes/home');
const { db } = require('./utils/db');
const { handleError } = require('./utils/errors');

const app = express();

app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(methodOverride('_method'))

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')

app.use('/', homeRouter)
app.use('/client', clientRouter)

app.use(handleError)

app.use('/test', (req, res) => {
    db.delete('d3666d28-4551-403f-82b0-19caaf7d5050')
    res.send(JSON.stringify(db.getAll()))
})

app.listen('3000', 'localhost')