document.addEventListener("DOMContentLoaded", function() {

// Initialization of library
const myLibrary = [];

const a = new Book("Getting to Yes", "Fary Fart", 234, "Not read yet");
const b = new Book("Getting to No", "Smooth Operator", 23, "Not read yet");
const c = new Book("I couldn't have done it without myself", "Mr Poo", 243, "Not read yet");
const d = new Book("Friends. Who needs them?", "Mick Hucknell", 343, "Not read yet");

addBookToLibrary(a);
addBookToLibrary(b);
addBookToLibrary(c);
addBookToLibrary(d);

// Initial library display
displayBooks(myLibrary);


// New Book form submission, using querySelector rather than form submission
let newBookBtn = document.querySelector('.newBookBtn')

newBookBtn.addEventListener('click', (e) => {

    e.preventDefault(); // Prevent default action on submission

    // Gather details from form
    let statusValue = document.querySelector('.read').value;
    let author = document.querySelector('.author').value;
    let title = document.querySelector('.title').value;
    let pages = document.querySelector('.pages').value;

    // Create new book object and add to library array
    let newBook = new Book(title, author, pages, statusValue);
    addBookToLibrary(newBook);

    // Update book display
    displayBooks(myLibrary);
    document.querySelector('form').reset();
});

removeBtn = document.querySelectorAll('.remove-btn');
removeBtn.forEach( (e) => {
    e.addEventListener('click', ()=> {
    console.log('GEDRIDOFIT!');
    console.log(e);
    // index = e.dataset.index;
    // console.log('index', index);
    // deleteBook(index);
    
    });
}  )






// Functions

function deleteBook(index) {
    delete myLibrary[index];

    // myLibrary.splice(index, 1);
    console.log(myLibrary)

    displayBooks(myLibrary);

}


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return this.title + "by " + this.author + ", " + this.pages + " pages, " + this.read;
    }};

function addBookToLibrary(book) {
    myLibrary.push(book)
    };

function displayBooks(library) {

    let booksDiv = document.querySelector('.books-div');
    booksDiv.textContent = ""; // Clear out Div

    for (book of library) {
        if (book != undefined) {
        const pBook = document.createElement('p');

        index = library.indexOf(book);
        pBook.setAttribute('data-index', index);
        
        // pBook.setAttribute('data-index', library.indexOf(book));  
        
        
        pBook.innerHTML= `${book.title} by ${book.author} 
            <div> <button class="book-btn"> Read, make responsive</button> </div>
            <div> <button data-index="${index}" class="remove-btn">Remove</button> </div> `;
        pBook.setAttribute('class', 'p-book');
        booksDiv.appendChild(pBook);
        } else {'book is undefined'}; //superflous, as book will never be clicked to be deleted if it is undefined.
    }};



}); // End of DOM Content Loaded Function





