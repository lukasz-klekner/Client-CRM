const express = require('express');
const { engine } = require('express-handlebars');

const { clientRouter } = require('./routes/client');
const { homeRouter } = require('./routes/home');

const app = express();

app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')

app.use('/', homeRouter)
app.use('/client', clientRouter)

app.listen('3000', 'localhost')