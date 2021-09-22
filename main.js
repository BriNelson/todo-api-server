let arrList = [{
  "title": "Eat",
  "category": "Hungry",
  "id": 1
},
{
  "title": "Sleep",
  "category": "Tired",
  "id": 2
},
{
  "title": "Work",
  "category": "Living",
  "id": 3
}]

function DisplayItems(arr) {
    arr.forEach(element => {
      // Creates div for each todo item
      const itemDiv = document.createElement('div')
      itemDiv.classList.add('item-div')

      // Creates input for checkmark
      const itemCheckmark = document.createElement('input')
      itemCheckmark.classList.add('form-check-input')
      itemCheckmark.type = 'checkbox'
      itemDiv.appendChild(itemCheckmark)

      // Creates li
      const item = document.createElement('li')
      item.appendChild(document.createTextNode(`${element.title} – Category: ${element.category}`))
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
  
  
  
  // for(let i = 0; i < arr.length; ++i){
    //   let list = document.getElementById('toDoList')
    //   let item = document.createElement('li')

    //   item.appendChild(document.createTextNode(arr[i]))
    //   list.appendChild(item)
    // }
}

DisplayItems(arrList)