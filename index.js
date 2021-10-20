
import Express from 'express';
import todoData from "./todoList.js";
const app = Express();
const port = 3000;

app.get("/todoData/:id", (req, res) => {
  res.json(todoData.find((todo) => {
      return +req.params.id === todo.id
    }))
    // res.send(req.params)
  })


app.listen(port, () => console.log(port))