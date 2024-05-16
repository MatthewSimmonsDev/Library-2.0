const cardContainer = document.querySelector("#container");
const addBookContainer = document.querySelector("#add-book-container");
const addBookBtn = document.querySelector("#add-book-btn");


let myLibrary = [];

function Book(title, author){
    this.title = title;
    this.author = author;
}

function displayBookCards(){
    for (let i = 0; i < myLibrary.length; i++) {
        
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";
        cardContainer.appendChild(bookCard);
        
        title = document.createElement("h3");
        title.classname = "book-card-title";
        bookCard.appendChild(title)
        title.textContent = myLibrary[i].title;
        
        author = document.createElement("h3");
        author.classname = "book-card-author";
        bookCard.appendChild(author);
        author.textContent = myLibrary[i].author;
    }
    myLibrary = [];
}

function hideAddButton(){
    addBookBtn.setAttribute("style", "display:none");
}

function createForm(){
    const form = document.createElement("form");
    form.className = 'add-book-btn-card';
    addBookContainer.appendChild(form);
    
    const title = document.createElement("input");
    title.className = 'book-title';
    title.setAttribute('type', "text");
    title.setAttribute('title', "title");
    title.setAttribute('placeholder', "Book Title");
    form.appendChild(title);

    const author = document.createElement("input");
    author.className = 'book-author';
    author.setAttribute('type', "text");
    author.setAttribute('author', "author");
    author.setAttribute('placeholder', "Book Author");
    form.appendChild(author);

    const submitBtn = document.createElement("input");
    submitBtn.setAttribute('type', "submit");
    submitBtn.setAttribute('value', "Submit");
    form.appendChild(submitBtn);
    submitBtn.addEventListener("click", function(e) {
        e.preventDefault();
        addBookToLibrary();
        displayBookCards();
        form.remove();
        
        addBookBtn.setAttribute("style", "display:block")
        // form.style.display = "none"
    })

}

function addBookToLibrary(){
    const bookTitle = document.querySelector('.book-title');
    const bookAuthor = document.querySelector('.book-author');

    myLibrary.push(new Book(bookTitle.value,bookAuthor.value))
    console.log(myLibrary)
}



addBookBtn.addEventListener('click', () => {
    hideAddButton();
    createForm();
})

