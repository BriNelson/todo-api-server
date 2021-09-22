let arrList = [{
  "title": "Eat",
  "category": "Hungry",
  "id": 1
},
{
  "title": "Sleep",
  "category": "Tierd",
  "id": 2
},
{
  "title": "Work",
  "category": "Living",
  "id": 3
}]

function DisplayItems(arr) {
    arr.forEach(element => {
      let list = document.querySelector('#toDoList')
      let item = document.createElement('li')

      item.appendChild(document.createTextNode(element.title + ' Category: ' + element.category))
      list.appendChild(item)

      //Adds needed class for bootstrap
      item.setAttribute()
    });
  
  
  
  // for(let i = 0; i < arr.length; ++i){
    //   let list = document.getElementById('toDoList')
    //   let item = document.createElement('li')

    //   item.appendChild(document.createTextNode(arr[i]))
    //   list.appendChild(item)
    // }
}

DisplayItems(arrList)