// This targets the button that says "Add Book"
const addBookBtn = document.querySelector("#add-book-btn");
// This is the container that holds the submitted books
const cardContainer = document.querySelector("#container");

// Array for submitted books.
let myLibrary = [];

// Book constructor
function Book(title, author){
    this.title = title;
    this.author = author;
}

// Function to display the books that were entered into the form
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
        
        const deleteBtn = document.createElement("button");
        deleteBtn.classname = "delete-book-btn";
        bookCard.appendChild(deleteBtn);
        deleteBtn.textContent = "X"
        
        deleteBtn.addEventListener('click', () => {
            bookCard.remove();
        })
        
    }
    myLibrary = [];
}

// When adding a book, this hides the add button to prevent it from being clicked again
function hideAddButton(){
    addBookBtn.setAttribute("style", "display:none");
}

// Creates the form where user enters book information
function createForm(){
    const addBookContainer = document.querySelector("#add-book-container");
    const form = document.createElement("form");
    form.className = 'add-book-btn-card';
    addBookContainer.appendChild(form);
    
    // Form section for title of the book
    const title = document.createElement("input");
    title.className = 'book-title';
    title.setAttribute('type', "text");
    title.setAttribute('title', "title");
    title.setAttribute('placeholder', "Title");
    form.appendChild(title);
    
    //Section for author of the book
    const author = document.createElement("input");
    author.className = 'book-author';
    author.setAttribute('type', "text");
    author.setAttribute('author', "author");
    author.setAttribute('placeholder', "Author");
    form.appendChild(author);

    // Form's submit button
    const submitBtn = document.createElement("input");
    submitBtn.setAttribute('type', "submit");
    submitBtn.setAttribute('value', "Submit");
    form.appendChild(submitBtn);

    /* Form's submit button functionality:
        1. Adds book to library 
        2. Displays the books for your viewing pleasure
        3. Removes the form from view for better design
    */
    submitBtn.addEventListener("click", function(e) {
        e.preventDefault();
        addBookToLibrary();
        displayBookCards();
        form.remove();
        
        addBookBtn.setAttribute("style", "display:block")
    })

}

// Pushes user entered information to the "myLibrary" array
function addBookToLibrary(){
    const bookTitle = document.querySelector('.book-title');
    const bookAuthor = document.querySelector('.book-author');

    myLibrary.push(new Book(bookTitle.value,bookAuthor.value))
}


/* Event listener for the "Add Book" button.
    1. Hides itself
    2. Displays form
*/
addBookBtn.addEventListener('click', () => {
    hideAddButton();
    createForm();
})

