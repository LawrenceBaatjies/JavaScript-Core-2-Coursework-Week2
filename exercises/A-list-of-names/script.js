function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
};

for (let i = 0; i < arrayOfPeople.length; i++) {
  
  let h1El = document.createElement("h1");    //Created "h1" tag and appended it to the "div"
  content.appendChild(h1El);

  
  let h2Els = document.createElement("h2");   //Created "h2" tag and appended it to the "div"
  content.appendChild(h2Els);

  h1El.innerText = people[i].name;
  h2Els.innerText = people[i].job;
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
