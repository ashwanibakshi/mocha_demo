const express       = require('express');
const mongoose      = require('mongoose');
const bodyParser    = require('body-parser');
const app =  express();

mongoose.connect('mongodb://localhost:27017/test',{useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>console.log('connected to db'))
.catch((err)=>console.log(err))

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/user',require('./route/user'));

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log('server run at port'+port));

module.exports = app;
