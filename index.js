
import Express from 'express';
import todoData from "./todoList.js";
const app = Express();
const port = 3000;

app.get("/todoData", (req, res) => {
    res.json(todoData)
    
  })
console.log("Hello world")

app.listen(port, () => console.log(port))