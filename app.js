require('dotenv').config()
const http = require('http');
const express = require('express');
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const bodyParser =  require('body-parser')

const create_task = require('./routes/tasks_controller')

const port = process.env.PORT || 4000;

app.use(bodyParser.json())
app.use('/task', create_task)

app.use(express.static(__dirname + '/public'))




try{
    mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true, useUnifiedTopology:true});
    console.log('database connected')
}catch(err){
    console.log(err)
}

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
    console.log()
})

