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






// let booksDiv = document.querySelector('.books-div');

function displayBooks(library) {
    for (book of library) {


        const pBook = document.createElement('p')
        
        pBook.innerHTML= `${book.title} by ${book.author} 
            <div> <button class="book-btn"> Read, make responsive</button> </div>
            <div> <button class="book-btn">Remove</button> </div>
            `;
            
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


let newBookBtn = document.querySelector('.newBookBtn')

newBookBtn.addEventListener('click', (e) => {

    e.preventDefault('no');

    let statusValue = document.querySelector('.read').value;
    
    let author = document.querySelector('.author').value;
    let title = document.querySelector('.title').value;
    let pages = document.querySelector('.pages').value;

    console.log(author, title, pages, statusValue);

    let x = new Book(title, author, pages, statusValue);
    addBookToLibrary(x);


    
console.log(e)
    // console.log(newBookSub.title, newBookSub.author, newBookSub.pages, newBookSub.value) 

    // console.log(e.author, e.value)
    // });


    

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

function addBookToLibrary(book) {
    myLibrary.push(book)
}


});