const cardContainer = document.querySelector("#container");

const myLibrary = [];

function Book(title){
    this.title = title;
}

function addBookToLibrary(){

    myLibrary.push(new Book("test"));
    console.log(cardContainer)
    // cardContainer.innerHTML = "test";
}

function displayBookCards(){

}

addBookToLibrary();
