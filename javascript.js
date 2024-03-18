// CHANGE TO CLASS - TO DO
// - Create book class - done
// - look at code, examine how the previous book objects were created, and how methods attached to them were used // done
// - think about how you need to replication that functionality in the new class iterations // done
// - go through and implement these methods and calls // done
// - keep the existing book object intact, potentially. If it gets confusing  you can delete it as you've branched the git.


document.addEventListener("DOMContentLoaded", function() {

class newBook {
    constructor (title, author, pages, status) {       
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
            }

    addBookToLibrary(book) {
        myLibrary.push(book);
        }

    changeStatus() {
        this.status == "read" ? this.status = "unread": this.status = "read";
        }
    
    get info() {
        return this.title + "by " + this.author + ", " + this.pages + " pages, " + this.status;
        }
    };

// Initialization of library
const myLibrary = [];

const a = new newBook("Getting to Floof", "Whiskey Dama", 534, "unread");
const b = new newBook("Where's my chickky chick", "Whiskey Dama", 23, "unread");
const c = new newBook("Portals. The science of ingress and egress", "Whiskey Dama", 243, "read");
const d = new newBook("Tiny Box. 50 of the tiniest but most livable boxes.", "Mick Hucknell", 343, "read");
const e = new newBook("Meooowl and other Poems", "Whiskey Dama", 67, "read");
const f = new newBook("Did you ever figure out how to fix the height % of this page?", "Andrew Ma", 2, "unread")

a.addBookToLibrary(a);
a.addBookToLibrary(b);
a.addBookToLibrary(c);
a.addBookToLibrary(d);
a.addBookToLibrary(e);
a.addBookToLibrary(f);



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
    }

    // Create new book object and add to library array
    let addedBook = new newBook(title, author, pages, statusValue);
    addedBook.addBookToLibrary(addedBook);

    // Update book display
    displayBooks(myLibrary);
    document.querySelector('form').reset();
    addRemoveBtnListener();
    addStatusBtnListener();
    });

// change read status
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





