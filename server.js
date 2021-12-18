

///////THIS IS THE SERVER

import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import todoSchema from "./models/todoModel.js"
import dotenv from 'dotenv'


import { port, mongoUri } from './config.js'
console.log(`Your port is ${port}`);



// const express = require('express')
// const bodyParser = require('body-parser');

const app = express();
// const port = 3000;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
    
})
  .then(() => {
  console.log('Connected Successfully')
})
.catch(console.error)

 app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static('C:/Users/ladof/Desktop/todo-api-server')); ////enviorment variable needs to go here




app.post("/todo", (req, res) => {
  // const todo = req.body
  const todo = new todoSchema({
     
    title: req.body.title,
    complete: false,
    category: 'Work',

  })
  todo.save().then((result) => { console.log(result) });
})


app.get('/todoData', (req, res) => {
  console.log('get todo list working')
  todoSchema.find()
    
    .then(docs => {
      // console.log(do)

      res.send(docs)
    })
  
  
})
app.put('/:editTodo', (req, res) => {
  const id = req.params.editTodo
  

  todoSchema.findByIdAndUpdate({_id: id}, { title :req.body.title } )
.then(docs => {
  // console.log(do)
  
  
  res.send(docs)
})
    
    
})
  
app.delete('/:deleteTodo', (req, res) => {
  const id = req.params.deleteTodo
//  console.log(req)
  todoSchema.findByIdAndDelete({_id: id})
  .then(docs => {
    // console.log(do)
    
    
    res.send(docs)
  })

 })




// app.post("/todo", (req, res) => {
//    const todo = req.body
  
//   // console.log(JSON.parse(todo));

//   todoData.push({
//     title: todo.title,
//     id: todoData.length + 1,
//     complete: false,
//     category: 'Work',
//     })
//   console.log(todoData)
//   // res.send('todo is added to the database');

//  })




 app.listen(port, () => console.log(port))