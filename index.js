

///////THIS IS THE SERVER

import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
// import TodoData from "./models/todoModel.js"
import dotenv from 'dotenv'

dotenv.config()
console.log(`${process.env.PORT}`)

// const express = require('express')
// const bodyParser = require('body-parser');

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://3727137271:admin@cluster0.olv4a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
  //  useMongoClient = true
})
  .then(() => {
  console.log('Connected Successfully')
})
.catch(console.error)

 app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static('C:/Users/ladof/Desktop/todo-api-server')); ////enviorment variable needs to go here

app.get("/todoData", (req, res) => {
  res.json(todoData)
res.send(req.params)
  
})
  

app.post("/todo", (req, res) => {
   const todo = req.body
  
  // console.log(JSON.parse(todo));

  todoData.push({
    title: todo.title,
    id: todoData.length + 1,
    complete: false,
    category: 'Work',
    })
  console.log(todoData)
  // res.send('todo is added to the database');

 })




 app.listen(port, () => console.log(port))