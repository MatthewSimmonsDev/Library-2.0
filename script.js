const cardContainer = document.querySelector("#container");
const addBookContainer = document.querySelector("#add-book-container")
const addBookBtn = document.querySelector("#add-book-btn");

const myLibrary = [];

function Book(title){
    this.title = title;
}

function addBookToLibrary(){
    
    myLibrary.push(new Book("test"));
    myLibrary.push(new Book("test2"));
    myLibrary.push(new Book("test3"));
}

function displayBookCards(){
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement("div")
        bookCard.className = "book-card"
        cardContainer.appendChild(bookCard);
        bookCard.textContent = myLibrary[i].title;    
    }
}

function addBookCard(){
    const infoCard = document.createElement("div")
    infoCard.className = "add-book-btn-card" 
    addBookContainer.appendChild(infoCard)

    infoCard.textContent = "TEST"
}


addBookToLibrary();
displayBookCards();


addBookBtn.addEventListener('click', () => {
    addBookCard();
})

