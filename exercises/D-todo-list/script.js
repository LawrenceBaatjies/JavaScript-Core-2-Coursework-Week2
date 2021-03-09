function todoList(todos) {
  // Write your code here...

  let body = document.querySelector("body");
  let h1Tag = document.createElement("h1");
  h1Tag.innerText = "Todo List";
  content.appendChild(h1Tag);
  // Creates ul element inside body
  let ulTag = document.createElement("ul");
  body.appendChild(ulTag);

  for (let job of todos){
    
    let liTag = document.createElement("li");
    liTag.innerText = job.todo;
    ulTag.appendChild(liTag);

    
    liTag.addEventListener("click", lineThrough);

    function lineThrough() {
      
      if (liTag.style.textDecoration === "line-through") {
        liTag.style.textDecoration = "none";
       
      } else {
        liTag.style.textDecoration = "line-through";
      }
    }
  }

  // * All of your HTML should go inside the `<div>` with the id **"content"**.
  content.appendChild("ulTag");
};


const todos = [
  {todo: "Help With Supper"}, 
  {todo: "Bath the Boys"}, 
  {todo: "learn javascript"}, 
  {todo: "Spend time with wife"},
  {todo: "Go sleep to get up for work"},
  
];

todoList(todos);