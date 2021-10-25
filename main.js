


// let todoList = [
//   {
//     title: "Eat",
//     id: 1,
//     complete: false,
//     category: "Personal"
//   },
//   {
//     title: "Sleep",
//     id: 2,
//     complete: false,
//     category: "Personal"
//   },
//   {
//     title: "Code",
//     id: 3,
//     complete: false,
//     category: "Work"
//   },
// ];

let categoriesList = [
  {
    category: "Active",
    id: 1,
    
  },
  {
    category: "Social",
    id: 2,
    
  },
  {
    category: "Work",
    id: 3,
    
  },
  {
    category: "Personal",
    id: 4
  }
];
let todoList = [];
// Add Item to do

// const userObject = {};
// const addItemBtn = document.querySelector("#addItem");


fetch('http://localhost:3000/todoData')
    .then(res => res.json())
  .then(json => json.forEach(item => { todoList.push(item) }))
     

console.log(todoList);
   

// addItemBtn.addEventListener("click", () => {
 

  
//   document.querySelector("#userTask").value = "";
// });

// Filter ToDo's
let filterDropdown = document.querySelector("#categorieFilter");
filterDropdown.addEventListener("change", (event) => {
    const filterArr = todoList.filter(cata => event.target.value === cata.category)
    DisplayItems(filterArr)
})

//Delete All Button
let deleteAllButton = document.querySelector("#deleteallbtn");
deleteAllButton.addEventListener("click", (event) => {
  for (let i = todoList.length - 1; i >= 0; i--) {
    let todo = todoList[i]
      if(todo.complete === true){
        todoList.splice(i, 1)
      }
  }
  DisplayItems(todoList)
});

//Deletes list item
let fullListItem = document.querySelector('#toDoList');// ul saved as a variable 
fullListItem.addEventListener("click", (event) => { // Event listener listening on the ul
  if (event.target.matches(".delete-item-btn") || event.target.matches(".fa-trash")) { //seeing if target matches what is clicked
    todoList.splice(event.target.id, 1); //matches id off of object id
    DisplayItems(todoList); //re-calls displayItems
      }
  })

// Deletes category
let fullCategoryList = document.querySelector('#list2')
fullCategoryList.addEventListener("click", (event) => {
  if (event.target.matches(".delete-category-btn") || event.target.matches(".fa-trash")) {
    categoriesList.splice(event.target.id, 1)
    DisplayCategoriesList(categoriesList)
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
    itemDiv.value = `${element.category}`;
    list.appendChild(itemDiv);
    

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

// Displays categories from categoriesList
function DisplayCategoriesList(arr) {
  document.querySelector('#list2').innerHTML= ""
  arr.forEach((element, index) => {
    let list2 = document.querySelector('#list2')

    // Creates li container for individual category
    const categoryDiv = document.createElement("li")
    categoryDiv.classList.add("item-div")

    // Creates p for category
    const categoryItem = document.createElement("p")
    categoryItem.appendChild(document.createTextNode(`${element.category}`))
    categoryDiv.appendChild(categoryItem)

    // Creates edit category input
    const editCategoryInput = document.createElement("input")
    editCategoryInput.classList.add("form-control", "edit-user-task-input")
    editCategoryInput.type = "text"
    editCategoryInput.value = element.category

    // Creates edit category button
    const editCategoryBtn = document.createElement("button")
    editCategoryBtn.innerHTML = '<i class="fas fa-edit"></i>'
    editCategoryBtn.classList.add("btn", "btn-light")
    categoryDiv.appendChild(editCategoryBtn)

    // Creates save category button
    const saveCategoryBtn = document.createElement("button")
    saveCategoryBtn.innerHTML = '<span>Save</span>'
    saveCategoryBtn.classList.add("btn", "btn-light")

    // Creates delete category button
    const deleteCategoryBtn = document.createElement("button")
    deleteCategoryBtn.innerHTML = '<i class="fas fa-trash" id='+index+'></i>'
    deleteCategoryBtn.classList.add("btn", "btn-danger", "delete-category-btn")
    deleteCategoryBtn.setAttribute('id', index)
    categoryDiv.appendChild(deleteCategoryBtn)

    // Edit category button event listener
    editCategoryBtn.addEventListener("click", () => {
      // Replaces edit button with save button
      editCategoryBtn.replaceWith(saveCategoryBtn)

      // Replaces category with editCategoryInput
      categoryItem.replaceWith(editCategoryInput)
    })

    // Save category button event listener
    saveCategoryBtn.addEventListener("click", () => {
      // Finds category item id from categories list and updates the value from edit task
      objIndex = categoriesList.findIndex((obj) => obj.id === element.id);
      categoriesList[objIndex].category = editCategoryInput.value;

      // Finds todo item id from todo list and updates the category from edit category
      // todoIndex = todoList.findIndex((obj) => obj.id === element.id)
      // todoList[todoIndex].category = editCategoryInput.value


      DisplayCategories(categoriesList)
      // Refreshes categoriesList with edited category
      DisplayCategoriesList(categoriesList);
    })
    
    list2.appendChild(categoryDiv);
  })
}

DisplayCategoriesList(categoriesList)
// DisplayCategories(categoriesList);
DisplayItems(todoList);