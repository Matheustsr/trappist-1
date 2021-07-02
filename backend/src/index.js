const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
import cors from 'cors'
const app = express()


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride('_method'))
app.use(cors())

require('./src/api/routes')(app) // require a instance to routes

mongoose.connect('mongodb://db:27017/auth')
mongoose.Promise = global.Promise

app.listen(3000, () => {
    console.log("Lets rock!")
});