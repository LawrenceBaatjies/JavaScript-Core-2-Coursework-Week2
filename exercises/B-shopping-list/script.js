function shoppingList(arrayOfPeople) {

  const divEl = document.getElementById("content");
  const ulEl = document.createElement("ul");
 
    for (let i = 0; i < arrayOfPeople.length; i++) {

    const liEls = document.createElement("li");
    liEls.innerHTML = arrayOfPeople[i];
    ulEl.appendChild(liEls);
    divEl.appendChild(ulEl);
  }
  console.log(divEl);
}

let shopping = ["Milk", "Bread", "Eggs", "A Toy Car", "Chips", "Sugar", "Coffee"];

shoppingList(shopping);
