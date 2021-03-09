// 1st part

let blueBtn = document.querySelector("#blueBtn");
let orangeBtn = document.querySelector("#orangeBtn");
let greenBtn = document.querySelector("#greenBtn");

let jumbotron = document.querySelector(".jumbotron");
let donateBtn = document.querySelector(".btn.btn-primary.btn-lrg");
let volunteerBtn = document.querySelector(".btn.btn-secondary.btn-lrg");


blueBtn.addEventListener("click", clickBlueBtn);

function clickBlueBtn () {
   
    volunteerBtn.style.backgroundColor = "black";
    volunteerBtn.style.color = "white";
}

orangeBtn.addEventListener("click", clickOrangeBtn);

function clickOrangeBtn () {
   
    jumbotron.style.backgroundColor = "#f0ad4e";
    donateBtn.style.backgroundColor = "#5751fd";
    volunteerBtn.style.backgroundColor = "#31b0d5";
    volunteerBtn.style.color = "white";
}


greenBtn.addEventListener("click", clickGreenBtn);

function clickGreenBtn () {
    
    jumbotron.style.backgroundColor = "#87ca8a";
    donateBtn.style.backgroundColor = "black";
    volunteerBtn.style.backgroundColor = "#8c9c08";
}

// Second Part

let submitBtn = document.querySelector("form button");;
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let formFields = document.querySelectorAll(".form-control");
  let checkFields = true;

  
  for (let i = 0; i < formFields.length; i++) {
     
      if (formFields[i].value.length === 0 || !formFields[0].value.includes("@")) {
          checkFields = false;
          formFields[i].style.backgroundColor = "red";
        } else {
            formFields[i].style.backgroundColor = "transparent";
        }
    };

    
    if (checkFields) {
        formFields.forEach((field) => field.value = " ");
        alert("Thank you for completing the form!");
    };
}); 