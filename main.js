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

addItemBtn.addEventListener('click', () => {
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

// Displays todo items from local storage
function DisplayItems(arr) {
    document.querySelector('#toDoList').innerHTML = ""
    arr.forEach(element => {
      // Creates li container for each todo item
      const itemDiv = document.createElement('li')
      itemDiv.classList.add('item-div')

      // Creates input for checkmark and appends to item-div
      const itemCheckmark = document.createElement('input')
      itemCheckmark.classList.add('form-check-input')
      itemCheckmark.type = 'checkbox'
      itemCheckmark.setAttribute('id', `${element.id}`)
      itemDiv.appendChild(itemCheckmark)

      // Creates p for todo item and appends to item-div
      const item = document.createElement('p')
      item.appendChild(document.createTextNode(`${element.title}`))
      item.classList.add('todo-item')
      itemDiv.appendChild(item)

      // Creates edit task input
      const editTaskInput = document.createElement('input')
      editTaskInput.classList.add('form-control', 'edit-user-task-input')
      editTaskInput.type = 'text'
      editTaskInput.value = element.title

      // Creates edit button and appends to item-div
      const itemEditBtn = document.createElement('button')
      itemEditBtn.innerHTML = '<i class="fas fa-edit"></i>'
      itemEditBtn.classList.add('edit-item-btn', 'btn', 'btn-light')
      itemDiv.appendChild(itemEditBtn)

      // Creates save button
      const itemSaveBtn = document.createElement('button')
      itemSaveBtn.innerHTML = '<span>Save</span>'
      itemSaveBtn.classList.add('btn', 'btn-light')

      // Creates delete button and appends to item-div
      const itemDeleteBtn = document.createElement('button')
      itemDeleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
      itemDeleteBtn.classList.add('delete-item-btn', 'btn', 'btn-danger')
      itemDiv.appendChild(itemDeleteBtn)

      // Append itemDiv to todo list
      let list = document.querySelector('#toDoList')
      list.appendChild(itemDiv)

      // Edit button click event handler
      itemEditBtn.addEventListener('click', () => {
        // Replaces edit button with save button
        itemEditBtn.replaceWith(itemSaveBtn)

        // Replaces item with editTaskInput
        item.replaceWith(editTaskInput)
      })

      // Save button click event handler
      itemSaveBtn.addEventListener('click', () => {
        // Finds todo item id from todo list and updates the value from edit task
        objIndex = todoList.findIndex((obj => obj.id === element.id))
        todoList[objIndex].title = editTaskInput.value

        // Refreshes todoList with edited task/item
        DisplayItems(todoList)
      })


    });
}

DisplayItems(todoList)