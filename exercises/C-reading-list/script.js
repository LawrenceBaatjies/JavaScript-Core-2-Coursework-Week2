function readingList(books) {

  let body = document.querySelector("body");
  let h1Element = document.createElement("h1");
  h1Element.innerText = `My Reading List`;
  h1Element.style.paddingLeft = "70px";

  body.prepend(h1Element);
  let ulElement = document.createElement("ul");
  body.appendChild(ulElement);
  ulElement.style.listStyle = "none";
  ulElement.style.width = "300px";

  for (book of books) {
    
    let pElement = document.createElement("p");
    pElement.innerText = `Title: ${book.title} \n Author: ${book.author}`;
    let imgElement = document.createElement("img");
    imgElement.src = book.image;
    let liElement = document.createElement("li");
    
    liElement.style.border = "2px solid black";
    liElement.style.margin = "5px";
    liElement.style.paddingLeft = "20px";
    liElement.style.paddingBottom = "20px";
    liElement.style.paddingTop = "5px";

    
    ulElement.appendChild(liElement);
    liElement.appendChild(pElement);
    liElement.appendChild(imgElement);

    
    if (book.alreadyRead === true) {
      liElement.style.backgroundColor = "green";
    } else if (book.alreadyRead === false) {
      liElement.style.backgroundColor = "red";
    }
  }
  content.appendChild(ulElement);
}

const books = [
  {
    title: "The Darkest Evening",
    author: "Ann Cleeves",
    alreadyRead: false,
    image: "https://ik.imagekit.io/panmac/tr:di-placeholder_portrait_aMjPtD9YZ.jpg,tr:w-224,pr-true/edition/9781509889518.jpg",

  },
  {
    title: "A Study in Scarlet & The Sign of the Four",
    author: "Arthur Conan Doyle",
    alreadyRead: true,
    image: "https://ik.imagekit.io/panmac/tr:di-placeholder_portrait_aMjPtD9YZ.jpg,tr:w-224,pr-true/edition/9781909621763.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    image: "https://images-na.ssl-images-amazon.com/images/I/518FqJvR9aL._SX342_SY445_QL70_FMwebp_.jpg",
  },

];

readingList(books)