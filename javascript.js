document.addEventListener("DOMContentLoaded", function() {

// Initialization of library
const myLibrary = [];

const a = new Book("Getting to Floof", "Whiskey Dama", 534, "unread");
const b = new Book("Where's my chickky chick", "Whiskey Dama", 23, "unread");
const c = new Book("Portals. The science of ingress and egress", "Whiskey Dama", 243, "read");
const d = new Book("Tiny Box. 50 of the tiniest but most livable boxes.", "Mick Hucknell", 343, "read");

addBookToLibrary(a);
addBookToLibrary(b);
addBookToLibrary(c);
addBookToLibrary(d);

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
    console.log(statusBtns);
    statusBtns.forEach((e) => {
        e.addEventListener('click', () => {
            console.log('status');
            console.log('status');
            // console.log(e.currentTarget.parentNode.dataset.index)

            let parentNode = e.closest('.p-book');
             
            // Access the data element of the parent node
            let parentIndex = parentNode.dataset.index;

            // Do something with the parent data
            console.log('Parent Index:', parentIndex);
            console.log('Did it get to here?')

            if (myLibrary[parentIndex].status == true) {
                myLibrary[parentIndex].status = false;
            } else {
                myLibrary[parentIndex].status = true;
            };

            console.log(myLibrary[parentIndex].status);
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
        console.log('index', e.dataset.index);
        index = e.dataset.index;
        console.log('index', index);
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
    }};

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





