let todoList = [{
  title: "Eat",
  id: 1,
  complete: "false"
},
{
  title: "Sleep",
  id: 2,
  complete: "false"
}, 
{
  title: "Work",
  id: 3,
  complete: "false"
}]

// Add Item to do
const userObject = {}
const addItemBtn = document.querySelector('#addItem')

addItemBtn.addEventListener('click', event => {
  let newTask = {
    title: document.querySelector('#userTask').value,
    id: todoList.length + 1
  }

  todoList.push(newTask)
  DisplayItems(todoList)
  document.querySelector('#userTask').value = ""
})

//Mark as complete
document.addEventListener('click', event => {
  let element = event.target;
    if(element.tagName == 'INPUT' && element.classList.contains("form-check-input")){
      for (const item of todoList) {
        if (parseInt(event.target.id) === item.id) {
          switch(event.target.value){
            case 'on':
              item.complete = true
              break
            case 'off':
              item.complete = false
              break
          }
        }
      }
    }
})

function DisplayItems(arr) {
    document.querySelector('#toDoList').innerHTML = ""
    arr.forEach(element => {
      // Creates div for each todo item
      const itemDiv = document.createElement('div')
      itemDiv.classList.add('item-div')

      // Creates input for checkmark
      const itemCheckmark = document.createElement('input')
      itemCheckmark.classList.add('form-check-input')
      itemCheckmark.type = 'checkbox'
      itemCheckmark.setAttribute('id', `${element.id}`)
      itemDiv.appendChild(itemCheckmark)

      // Creates li
      const item = document.createElement('li')
      item.appendChild(document.createTextNode(`${element.title}`))
      item.classList.add('todo-item')
      itemDiv.appendChild(item)

      // Creates edit button
      const itemEditBtn = document.createElement('button')
      itemEditBtn.innerHTML = '<i class="fas fa-edit"></i>'
      itemEditBtn.classList.add('edit-item-btn', 'btn', 'btn-light')
      itemDiv.appendChild(itemEditBtn)

      // Creates delete button
      const itemDeleteBtn = document.createElement('button')
      itemDeleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
      itemDeleteBtn.classList.add('delete-item-btn', 'btn', 'btn-danger')
      itemDiv.appendChild(itemDeleteBtn)

      // Append itemDiv to todo list
      let list = document.querySelector('#toDoList')
      list.appendChild(itemDiv)
    });
}

DisplayItems(todoList)