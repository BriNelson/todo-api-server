
/// ////THIS IS THE SERVER

import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import TodoData from "./models/todoModel.js"
import dotenv from 'dotenv'


import { port, mongoUri, staticServeFile } from './config.js'
console.log(`Your port is ${port}`);



// const express = require('express')
// const bodyParser = require('body-parser');

const app = express()
// const port = 3000;

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

app.use(express.static(staticServeFile)) /// /enviorment variable needs to go here

app.get('/todoData', (req, res) => {
  // res.json(todoData)
  res.send(req.params)
})

app.post("/todo", (req, res) => {
  const todo = req.body
  const todo = new todoModel({
     
      title: todo.title,
     
      complete: false,
      category: 'Work',

  })
  todoModel.save().then((result) => {console.log(result)});
 

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
