const cardContainer = document.querySelector("#container");


const myLibrary = [];

function Book(title){
    this.title = title;
}

function addBookToLibrary(){
    
    myLibrary.push(new Book("test"));
    myLibrary.push(new Book("test2"));
}

function displayBookCards(){
    
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement("div")
        bookCard.className = "book-card"
        cardContainer.appendChild(bookCard);
        bookCard.textContent = myLibrary[i].title;    
            
    }
}

addBookToLibrary();
displayBookCards();
