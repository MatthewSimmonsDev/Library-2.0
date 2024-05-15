

const myLibrary = [];

function Book(title){
    this.title = title;
}

function addBookToLibrary(){

    myLibrary.push(new Book("test"));
}

function displayBookCards(){

}

addBookToLibrary();
