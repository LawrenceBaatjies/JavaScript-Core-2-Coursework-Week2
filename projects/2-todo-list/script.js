function populateTodoList(todos) {

  let list = document.getElementById("todo-list");
  let list = document.getElementById("todo-list");

  for (let i = 0; i < todos.length; i++) {
   
    const liEl = document.createElement("li");
    liEl.className =
      "list-group-item d-flex justify-content-between align-items-center";

    
    const pEl = document.createElement("p");
    pEl.innerText = todos[i].task;

    
    const spanEl = document.createElement("span");
    spanEl.className = "badge bg-primary rounded-pill";
    const trashBtn = document.createElement("i");
    trashBtn.className = "fa fa-trash";
    const checkBtn = document.createElement("i");
    checkBtn.className = "fa fa-check";

    
    checkBtn.addEventListener("click", () => {

      if (liEl.style.textDecoration === "line-through") {
        todos[i].completed = false;
        liEl.style.textDecoration = "";

      } else {
        todos[i].completed = true;
        liEl.style.textDecoration = "line-through";
      }
    });

  
    trashBtn.addEventListener("click", () => {
      liEl.remove();
    });

   
    liEl.appendChild(pEl);
    spanEl.appendChild(checkBtn);
    spanEl.appendChild(trashBtn);
    liEl.appendChild(spanEl);
    list.appendChild(liEl);
  }
}

  event.preventDefault();

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {

  const inputEl = document.getElementById("todoInput");
  let list = document.getElementById("todo-list");

  if (inputEl.value) {

    let object = {};
    object.task = inputEl.value;
    object.completed = false;
    todos.push(object);
    let newObj = todos.splice(todos.length - 1);
    populateTodoList(newObj);
    inputEl.value = "";
  }
}
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!


// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  function deleteAllCompletedTodos(event) {
    // Create new button called "delete"
    const p = document.createElement("p");
    p.innerText = "Delete";
    const newButton = document.createElement("button");
    newButton.className = "btn btn-primary mb-3";
    const buttonDiv = document.getElementsByClassName("card-body")[0];
    newButton.appendChild(p);
    buttonDiv.appendChild(newButton);
  
    // Adding event listener to "delete" button
    newButton.addEventListener("click", () => {
      let liEl = document.getElementsByClassName("list-group-item");
      for (let i = 0; i < liEl.length; i++) {
        if (liEl[i].style.textDecoration === "line-through") {
          liEl[i].parentNode.removeChild(liEl[i]);
        }
      }
    });
  }
  deleteAllCompletedTodos();
}
