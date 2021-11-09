import mongoose from 'mongoose'
import express from 'express';
import todoModel from './models/todoModel';

const app = express();

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