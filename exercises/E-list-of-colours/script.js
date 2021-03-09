function listOfColours(colours) {
  // Write your code here...

  let selectTag = document.createElement("select");
  content.appendChild(selectTag);

 
  let pTag = document.createElement("p");
  content.appendChild(pTag);

  
  for (colour of colours) {
   
    let optionTag = document.createElement("option");
    optionTag.value = colour;
    optionTag.innerText = colour;
    selectTag.appendChild(optionTag);

    
  selectTag.addEventListener("click", colourSelection);

    function colourSelection() {
      pTag.innerText = `You have selected: ${selectTag.value}`;
      pTag.style.color = selectTag.value;
    }
  }
  
  content.appendChild(selectTag);
};


const colours = ["red", "blue", "green", "yellow", "grey", "black"];

listOfColours(colours);
