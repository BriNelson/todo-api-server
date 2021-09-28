/* Global Variables */
const userObject = {};
// Selects add item button
const addItemBtn = document.querySelector("#addItem");
// Creates li container for each todo item
const itemDiv = document.createElement("li");
// Creates input for checkmark
const itemCheckmark = document.createElement("input");
// Creates p element for todo item
const item = document.createElement("p");
// Creates edit task input
const editTaskInput = document.createElement("input");
// Creates item edit button
const itemEditBtn = document.createElement("button");
// Creates item save button
const itemSaveBtn = document.createElement("button");
// Creates item delete button
const itemDeleteBtn = document.createElement("button");
// Selects to do list
let list = document.querySelector("#toDoList");
// Completed Task
var completedTasksHolder = document.getElementById("completed-tasks");

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


// Add Item to do
addItemBtn.addEventListener("click", () => {
  let newTask = {
    title: document.querySelector("#userTask").value,
    id: todoList.length + 1,
    complete: false
  }

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

// Displays todo items from local storage
function DisplayItems(arr) {
  document.querySelector("#toDoList").innerHTML = "";
  arr.forEach((element, index) => {

    // Adds item-div class to itemDiv li element
    itemDiv.classList.add("item-div");
    
    // Appends item checkmark input to item-div
    itemCheckmark.classList.add("form-check-input");
    itemCheckmark.type = "checkbox";
    itemCheckmark.setAttribute("id", `${element.id}`);
    itemDiv.appendChild(itemCheckmark);

    // Appends p for todo item to item-div
    item.appendChild(document.createTextNode(`${element.title}`));
    item.classList.add("todo-item");
    itemDiv.appendChild(item);

    // Creates edit task input
    editTaskInput.classList.add("form-control", "edit-user-task-input");
    editTaskInput.type = "text";
    editTaskInput.value = element.title;

    // Appends edit button to item-div
    itemEditBtn.innerHTML = '<i class="fas fa-edit"></i>';
    itemEditBtn.classList.add("edit-item-btn", "btn", "btn-light");
    itemDiv.appendChild(itemEditBtn);

    // Creates save button
    itemSaveBtn.innerHTML = "<span>Save</span>";
    itemSaveBtn.classList.add("btn", "btn-light");

    // Appends delete button to item-div
    itemDeleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    itemDeleteBtn.classList.add("delete-item-btn", "btn", "btn-danger");
    itemDiv.appendChild(itemDeleteBtn);

    // Dynamically adds event listener
    itemDeleteBtn.addEventListener("click", (event) => {
      arr.splice(index, 1);
      DisplayItems(todoList);
    });

    // Append itemDiv to todo list
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

DisplayItems(todoList);
