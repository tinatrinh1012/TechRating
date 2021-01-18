const express = require('express');
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const router = express.Router()
const userroute = require('./routes/userroute')
app.use('/api/user', userroute)



app.get('/', function(req, res) {
    res.send('This is home page')
})


app.listen(5000, ()=>{
    console.log('Server started on port 5000');
})