// 1. Book changeStatus function. Move it to the prototype
// 2. Then change the function that displays the book to read from the object instead of the Array.


document.addEventListener("DOMContentLoaded", function() {

// Initialization of library
const myLibrary = [];

const a = new Book("Getting to Floof", "Whiskey Dama", 534, "unread");
const b = new Book("Where's my chickky chick", "Whiskey Dama", 23, "unread");
const c = new Book("Portals. The science of ingress and egress", "Whiskey Dama", 243, "read");
const d = new Book("Tiny Box. 50 of the tiniest but most livable boxes.", "Mick Hucknell", 343, "read");
const e = new Book("Meooowl and other Poems", "Whiskey Dama", 67, "read");
const f = new Book("Did you ever figure out how to fix the height % of this page?", "Andrew Ma", 2, "unread")

addBookToLibrary(a);
addBookToLibrary(b);
addBookToLibrary(c);
addBookToLibrary(d);
addBookToLibrary(e);
addBookToLibrary(f);

console.log('prototype of a', Object.getPrototypeOf(a))
console.log(Object.getPrototypeOf(a) === Book.prototype)
console.log(Book.prototype);

// Initial library display
displayBooks(myLibrary);

// Add event listeners for buttons
addRemoveBtnListener();
addStatusBtnListener();
    



// Event listeners

let newBookBtn = document.querySelector('.newBookBtn') // New Book form submission, using querySelector rather than form submission

newBookBtn.addEventListener('click', (e) => {

    e.preventDefault(); // Prevent default action on submission

    // Gather details from form
    let statusValue = document.querySelector('.read').value;
    let author = document.querySelector('.author').value;
    let title = document.querySelector('.title').value;
    let pages = document.querySelector('.pages').value;

    if ((author === "") || (title === "") || (pages === "")) {
        alert("Please complete all details in the form to add a new book.")
    }


    // Create new book object and add to library array
    let newBook = new Book(title, author, pages, statusValue);
    addBookToLibrary(newBook);

    // Update book display
    displayBooks(myLibrary);
    document.querySelector('form').reset();
    addRemoveBtnListener();
    addStatusBtnListener();
    });


function addStatusBtnListener() {
    let statusBtns = document.querySelectorAll('.book-status-btn');
    statusBtns.forEach((e) => {
        e.addEventListener('click', () => {
                   
            let parentNode = e.closest('.p-book');
             
            // Access the data element of the parent node
            let parentIndex = parentNode.dataset.index;

            // Call the changeStatus method of the relevant book in the myLibrary array
            myLibrary[parentIndex].changeStatus();

            // redisplay myLibrary
            displayBooks(myLibrary);
            addRemoveBtnListener();
            addStatusBtnListener();
            })
        })
    };
    
function addRemoveBtnListener() {
let removeBtns = document.querySelectorAll('.book-remove-btn');

removeBtns.forEach((e) => {
    e.addEventListener('click', ()=> {
        index = e.dataset.index;
        deleteBook(index);
            })
        })
    };


// Functions

function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayBooks(myLibrary);
    addRemoveBtnListener();
    addStatusBtnListener();
}

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function () {
        return this.title + "by " + this.author + ", " + this.pages + " pages, " + this.status;
    }
    
    };

// Adds changeStatus method to Book object prototype!!!!!
Book.prototype.changeStatus = function () {
    if (this.status == "read") {
            this.status = "unread";
        } else {
            this.status = "read";
        }
    }

function addBookToLibrary(book) {
    myLibrary.push(book);
    };

function displayBooks(library) {

    let booksDiv = document.querySelector('.books-div');
    booksDiv.textContent = ""; // Clear out Div

    for (book of library) {
        
        const pBook = document.createElement('p');

        index = library.indexOf(book);
        pBook.setAttribute('data-index', index);     
                
        pBook.innerHTML= `<div> <span class="title" >${book.title} </span> by ${book.author}, ${book.pages} pages.  <br><br> Status "${book.status}".</div> 
            <div> <button class="book-status-btn"> Change read status</button> </div>
            <div> <button data-index="${index}" class="book-remove-btn">Remove</button> </div> `;
        pBook.setAttribute('class', 'p-book');
        booksDiv.appendChild(pBook);
        }
    };



}); // End of DOM Content Loaded Function





