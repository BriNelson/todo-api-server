
import express from 'express';
import bodyParser from 'body-parser'
// const express = require('express')
// const bodyParser = require('body-parser');
let todoData = [
  {
    "title": "Eat",
    "id": 1,
    "complete": false,
    "category": "Personal"
  },
  {
    "title": "Sleep",
    "id": 2,
    "complete": false,
    "category": "Personal"
  },
  {
    "title": "Code",
    "id": 3,
    "complete": false,
    "category": "Work"
  }
];
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static('C:/Users/ladof/Desktop/m1-todo-app-501st'));

app.get("/todoData", (req, res) => {
  res.json(todoData)
    // res.send(req.params)
  
})
  

app.post("/todo", (req, res) => {
  const todo = req.body
  console.log(todo)

  todoData.push(todo)
  console.log(todoData)
  res.send('todo is added to the database');

 })




app.listen(port, () => console.log(port))