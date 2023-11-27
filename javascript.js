document.addEventListener("DOMContentLoaded", function() {

const myLibrary = [];

const a = new Book("Getting to Yes", "Fary Fart", 234, "Not read yet");
const b = new Book("Getting to No", "Smooth Operator", 23, "Not read yet");
const c = new Book("I couldn't have done it without myself", "Mr Poo", 243, "Not read yet");
const d = new Book("Friends. Who needs them?", "Mick Hucknell", 343, "Not read yet");

addBookToLibrary(a);
addBookToLibrary(b);
addBookToLibrary(c);
addBookToLibrary(d);

displayBooks(myLibrary);





// let booksDiv = document.querySelector('.books-div');








let newBookBtn = document.querySelector('.newBookBtn')

newBookBtn.addEventListener('click', (e) => {

    e.preventDefault();

    let statusValue = document.querySelector('.read').value;
    let author = document.querySelector('.author').value;
    let title = document.querySelector('.title').value;
    let pages = document.querySelector('.pages').value;
    console.log(author.name)
    console.log(author, title, pages, statusValue);

    let newBook = new Book(title, author, pages, statusValue);
    addBookToLibrary(newBook);
    
    console.log('mylibrary', myLibrary)

    console.log(e)
    // console.log(newBookSub.title, newBookSub.author, newBookSub.pages, newBookSub.value) 

    // console.log(e.author, e.value)
    // });

    displayBooks(myLibrary);

    

});


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return this.title + "by " + this.author + ", " + this.pages + " pages, " + this.read;
    } 

}






// Functions



function addBookToLibrary(book) {
    myLibrary.push(book)
}


function displayBooks(library) {

    let booksDiv = document.querySelector('.books-div');

    booksDiv.textContent = ""; // Clear out Div

    for (book of library) {
        const pBook = document.createElement('p')       
        pBook.innerHTML= `${book.title} by ${book.author} 
            <div> <button class="book-btn"> Read, make responsive</button> </div>
            <div> <button class="book-btn">Remove</button> </div>
            `;
        pBook.setAttribute('class', 'p-book');
        booksDiv.appendChild(pBook);

    }
}



}); // End of DOM Content Loaded Function





