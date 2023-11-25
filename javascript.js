document.addEventListener("DOMContentLoaded", function() {



const myLibrary = [];



function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return this.title + "by " + this.author + ", " + this.pages + " pages, " + this.read;
    } 

}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

const a = new Book("Getting to Yes", "Fary Fart", 234, "Not read yet");

const b = new Book("Getting to No", "Smooth Operator", 23, "Not read yet");
const c = new Book("I couldn't have done it without myself", "Mr Poo", 243, "Not read yet");
const d = new Book("Friends. Who needs them?", "Mick Hucknell", 343, "Not read yet");

addBookToLibrary(a);
addBookToLibrary(b);
addBookToLibrary(c);
addBookToLibrary(d);






// let booksDiv = document.querySelector('.books-div');

function displayBooks(library) {
    for (book of library) {


        const pBook = document.createElement('p')
        
        pBook.innerHTML= `${book.title} by ${book.author} <button class="book-btn">Remove</button> <button class="book-btn">Read</button>`;
        pBook.setAttribute('class', 'p-book');
        
        // const node = document.createTextNode(book.title)
        // pBook.appendChild(node);
        document.querySelector('.books-div').appendChild(pBook);
        // pBook.textContent = book.title;
        

        // bookDiv = document.querySelector('books-div')
        // bookDiv.textContent = book.title;
    }

}


displayBooks(myLibrary);

});