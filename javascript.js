document.addEventListener("DOMContentLoaded", function() {

// Initialization of library
const myLibrary = [];

const a = new Book("Watch the Simpsons", "Ned Flanders", 3, "incomplete");
// const b = new Book("Perspective city drawings", "Andrew", 22, "incomplete");
// const c = new Book("Go for a walk around Viewbank", "Andrew", 3, "completed");


addBookToLibrary(a);

// Initial library display
displayBooks(myLibrary);

// Add event listeners for buttons
addRemoveBtnListener();
addStatusBtnListener();
    

// Event listeners

let newBookBtn = document.querySelector('.newBookBtn') // New Book form submission, using querySelector rather than form submission

// add new book via form
newBookBtn.addEventListener('click', (e) => {

    e.preventDefault(); // Prevent default action on submission

    // Gather details from form
    let statusValue = document.querySelector('.read').value;
    let author = document.querySelector('.author').value;
    let title = document.querySelector('.title').value;
    let pages = document.querySelector('.pages').value;

    if ((author === "") || (title === "") || (pages === "")) {
        alert("Please complete all details in the form to add a new book.")
    } else {

    // Create new book object and add to library array
    let newBook = new Book(title, author, pages, statusValue);
    addBookToLibrary(newBook);

    // Update book display
    displayBooks(myLibrary);
    document.querySelector('form').reset();
    addRemoveBtnListener();
    addStatusBtnListener();
}
    });




var textFileUrl = null; // Global variable to store the URL for the file to be downloaded

// Save file
let saveButton = document.querySelector('.saveButton')  
saveButton.addEventListener('click', (e) => {
    const savedLibrary = JSON.stringify(myLibrary);
    
    generateTextFileUrl(savedLibrary);


    // Generate a text file URL          
});

function generateTextFileUrl(JSONfile) {
    let fileData = new Blob([JSONfile], {type: 'text/plain'});

    // If a file has been previously generated, revoke the existing URL
    if (textFileUrl !== null) {
        window.URL.revokeObjectURL(textFileUrl);
    }
    textFileUrl = window.URL.createObjectURL(fileData);

    // Returns a reference to the global variable holding the URL
    document.getElementById('downloadLink').href = textFileUrl; 
     };

// Load file

const fileInput = document.getElementById('fileInput'); // Get input element 

    // Add an event listener to the file input element.
    fileInput.addEventListener('change', function() {

        console.log('load called')
        const selectedFile = fileInput.files[0];

        if (selectedFile) {
            const reader = new FileReader();

            reader.onload = function(event) {
                const contents = event.target.result;
                const objectAgain = JSON.parse(contents);
                console.log(objectAgain)
                displayBooks(objectAgain);
            };
            reader.readAsText(selectedFile);
        } else {
            fileContents.textContent = 'No file selected.';
        }})


// change read status
function addStatusBtnListener() {
    let statusBtns = document.querySelectorAll('.book-status-btn');
    statusBtns.forEach((e) => {

        console.log('function called')
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
    
// remove book
function addRemoveBtnListener() {
    let removeBtns = document.querySelectorAll('.book-remove-btn');
    removeBtns.forEach((e) => {
        e.addEventListener('click', ()=> {
        deleteBook(e.dataset.index);
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
    if (this.status == "completed") {
            this.status = "incomplete";
        } else {
            this.status = "completed";
        }
    };

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
                
        pBook.innerHTML= `<div> <span class="title" >${book.title} </span> - activity proposed by ${book.author}, ${book.pages} hour(s).  <br><br> Status "${book.status}".</div> 
            <div> <button class="book-status-btn"> Change status</button> </div>
            <div> <button data-index="${index}" class="book-remove-btn">Remove</button> </div> `;
        pBook.setAttribute('class', 'p-book');
        booksDiv.appendChild(pBook);
        }
    };
    
}); // End of DOM Content Loaded Function





