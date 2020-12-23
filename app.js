const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
const app = express();
const userRoute = require('./routes/user');


app.use('/user', userRoute);

app.listen(3000,()=>{
    console.log('app is running on port 3000');
})