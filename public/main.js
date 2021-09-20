let arrList = ['Homework', 'Dishes', 'Walk the dog']

function CreateItems(arr) {
    for(let i = 0; i < arr.length; ++i){
      let list = document.getElementById('toDoList')
      let item = document.createElement('li')

      item.appendChild(arr[i])
      list.appendChild(item)
    }
}

CreateItems(arrList)