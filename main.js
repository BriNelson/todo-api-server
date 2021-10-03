let todoList = [
  {
    title: "Eat",
    id: 1,
    complete: false,
  },
  {
    title: "Sleep",
    id: 2,
    complete: false,
  },
  {
    title: "Work",
    id: 3,
    complete: false,
  },
];

let catagoriesList = [
  {
    catagory: "active",
    id: 1,
    
  },
  {
    catagory: "social",
    id: 2,
    
  },
  {
    catagory: "Work",
    id: 3,
    
  },
];

// Completed Task
var completedTasksHolder = document.getElementById("completed-tasks");

// Add Item to do
const userObject = {};
const addItemBtn = document.querySelector("#addItem");


addItemBtn.addEventListener("click", () => {
  let newTask = {
    title: document.querySelector("#userTask").value,
    catagory: document.querySelector('#categorieInput').value,
    id: todoList.length + 1,
    complete: false
  }
  let newCategory = {
    catagory: document.querySelector('#categorieInput').value,
    id: catagoriesList.length + 1
  }
  console.log(todoList)
  //pushes new new category to category array
  catagoriesList.push(newCategory)
  DisplayCategories(catagoriesList)
  
  todoList.push(newTask);
  let newArr = [...todoList]
  DisplayItems(newArr);
  document.querySelector("#userTask").value = "";
});



//Delete All Button
let deleteAllButton = document.querySelector("#deleteallbtn");
deleteAllButton.addEventListener("click", (event) => {
  const checkBoxElements = document.getElementsByClassName("form-check-input");
  let lengthStart = todoList.length;
  for (let i = 0; i <= checkBoxElements.length - 1; i++) {
    switch (checkBoxElements[i].checked) {
      case true:
        todoList.splice(i, 1);
        break;
      case false:
        break;
    }
  }
  if (lengthStart > todoList.length) {
    let newArr = [...todoList]
    DisplayItems(newArr);
  }
});

//Deletes list item
let fullListItem = document.querySelector('#toDoList');// ul saved as a variable 
fullListItem.addEventListener("click", (event) => { // Event listener listening on the ul
  if (event.target.matches(".delete-item-btn") || event.target.matches(".fa-trash")) { //seeing if target matches what is clicked
    todoList.splice(event.target.id, 1); //matches id off of object id
    DisplayItems(todoList); //re-calls displayItems
      }
  })

//Mark as complete
document.addEventListener("click", (event) => {
  let element = event.target;
  if (
    element.tagName == "INPUT" &&
    element.classList.contains("form-check-input")
  ) {
    for (const item of todoList) {
      if (parseInt(event.target.id) === item.id) {
        switch (event.target.checked) {
          case true:
            item.complete = true;
            break;
          case false:
            item.complete = false;
            break;
        }
      }
    }
  }
});

// passes in category array and displays it
function DisplayCategories(arr) {
  document.querySelector("#categories").innerHTML = ""
  arr.forEach((element, index) => {
    const itemDiv = document.createElement("option");
    let list = document.querySelector("#categories");
    itemDiv.value = `${element.catagory}`;
    list.appendChild(itemDiv);
    console.log(`${element.catagory}`)

   })
}

// Displays todo items from local storage
function DisplayItems(arr) {
  document.querySelector("#toDoList").innerHTML = "";
  arr.forEach((element, index) => {
    // Creates li container for each todo item
    const itemDiv = document.createElement("li");
    itemDiv.classList.add("item-div");

    // Creates input for checkmark and appends to item-div
    const itemCheckmark = document.createElement("input");
    itemCheckmark.classList.add("form-check-input");
    itemCheckmark.type = "checkbox";
    itemCheckmark.setAttribute("id", `${element.id}`);
    itemDiv.appendChild(itemCheckmark);

    // Creates p for todo item and appends to item-div
    const item = document.createElement("p");
    item.appendChild(document.createTextNode(`${element.title}`));
    item.classList.add("todo-item");
    itemDiv.appendChild(item);

    // Creates edit task input
    const editTaskInput = document.createElement("input");
    editTaskInput.classList.add("form-control", "edit-user-task-input");
    editTaskInput.type = "text";
    editTaskInput.value = element.title;

    // Creates edit button and appends to item-div
    const itemEditBtn = document.createElement("button");
    itemEditBtn.innerHTML = '<i class="fas fa-edit"></i>';
    itemEditBtn.classList.add("edit-item-btn", "btn", "btn-light");
    itemDiv.appendChild(itemEditBtn);

    // Creates save button
    const itemSaveBtn = document.createElement("button");
    itemSaveBtn.innerHTML = "<span>Save</span>";
    itemSaveBtn.classList.add("btn", "btn-light");

    // Creates delete button and appends to item-div
    const itemDeleteBtn = document.createElement("button");
    itemDeleteBtn.innerHTML = '<i class="fas fa-trash" id='+index+'></i>'; //gives garbage can button unique id, *this might be kind of ghetto
    itemDeleteBtn.classList.add("delete-item-btn", "btn", "btn-danger");
    itemDeleteBtn.setAttribute('id', index) //gives delete button a somewhat unique delete button

    itemDiv.appendChild(itemDeleteBtn);

   
    // Append itemDiv to todo list
    let list = document.querySelector("#toDoList");
    list.appendChild(itemDiv);

    // Edit button click event handler
    itemEditBtn.addEventListener("click", () => {
      // Replaces edit button with save button
      itemEditBtn.replaceWith(itemSaveBtn);

      // Replaces item with editTaskInput
      item.replaceWith(editTaskInput);
    });

    // Save button click event handler
    itemSaveBtn.addEventListener("click", () => {
      // Finds todo item id from todo list and updates the value from edit task
      objIndex = todoList.findIndex((obj) => obj.id === element.id);
      todoList[objIndex].title = editTaskInput.value;

      // Refreshes todoList with edited task/item
      DisplayItems(todoList);
    });
  });
}
DisplayCategories(catagoriesList);
DisplayItems(todoList);