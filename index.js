
/// ////THIS IS THE SERVER

import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import todoSchema from "./models/todoModel.js"
import dotenv from 'dotenv'


import { port, mongoUri, staticServeFile } from './config.js'
console.log(`Your port is ${port}`);



// const express = require('express')
// const bodyParser = require('body-parser');

const app = express()
// const port = 3000;

//mongo connection
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //  useMongoClient: true
})
  .then(() => {
    console.log('Connected Successfully')
  })
  .catch(console.error)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// static eviorment file name goes here -- only works with full file path
app.use(express.static(staticServeFile)) 


//get all todos
app.get('/todoData', (req, res) => {
  // res.json(todoData)
  res.send(req.params)
})


//send a todo
app.post("/todo", (req, res) => {
   const todo = new todoSchema({
     
      title: req.body.title,
     
      complete: false,
      category: 'Work',

  })
  todo.save().then((result) => {console.log(result)});
 

//    todoData.push({
//      title: todo.title,
//      id: todoData.length + 1,
//      complete: false,
//      category: 'Work',
//      })
//    console.log(todoData)
 // res.send('todo is added to the database');

})

app.listen(port, () => console.log(port))
