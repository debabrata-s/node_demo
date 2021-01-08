const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cluster = require('cluster');
// mongoose.connect('mongodb+srv://dev:debabratas@cluster0.eikuq.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true});
const app = express();
app.use(bodyParser.json())
const userRoute = require('./routes/user');
app.use('/user', userRoute);

app.use('/', (req, res) => {
    res.send('hello');
})
app.listen(3000, () => {
    console.log('app is running on port 3000');
})


