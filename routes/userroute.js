const express = require('express')
var app = express()
const mongoose = require('mongoose')
const router = express.Router()

mongoose.connect('mongodb://localhost:27017/tech-rating', {useNewUrlParser: true, useUnifiedTopology: true}, function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Mongo DB Connection successful')
    }
})

router.post('/registerdevice', function(req, res) {
    res.send('Register device successful')
}) 

module.exports = router