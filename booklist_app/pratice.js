// Book Class:Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class:Handle UI Tasks
class UI {
  // This function display the books
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Book One",
        author: "John Doe",
        isbn: "3434434",
      },
      {
        title: "Book Two",
        author: "Jane Doe",
        isbn: "45545",
      },
    ];
    const books = Store.getBooks();
    // Loop through the array of books
    // Add the books to list
    books.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const lists = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
    <td class='text-capitalize'>${book.title}</td>
    <td class='text-capitalize'>${book.author}</td>
    <td class='text-capitalize'>${book.isbn}</td>
    <td class='text-capitalize'><a href='#' class='btn btn-danger btn-sm delete'> X </a></td>
   `;
    lists.appendChild(row);
  }
  static deleteBook(e) {
    if (e.classList.contains("delete")) {
      e.parentElement.parentElement.remove();
    }
  }
  static clearField() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
  static showAlert(message, className) {
    let div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    let container = document.querySelector(".container");
    let form = document.querySelector("#book-form");
    container.insertBefore(div, form);
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }
}
// Store Class :Handle the local storage
class Store {
  static getBooks() {
    let books;
    //if there is no items of book in the local storage
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      // Converting the json string to an object
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  static storeBook(book) {
    const books = Store.getBooks();
    //Push new book to the end of the array
    books.push(book);
    //Convert the javascript value to a json string
    localStorage.setItem("books", JSON.stringify(books));
  }
  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}
// Event:Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);
// Event: Add Book TO list
document.querySelector("#book-form").addEventListener("submit", (e) => {
  // Prevent Default Behavior
  e.preventDefault();
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let isbn = document.querySelector("#isbn").value;

  if (title == "" || author == "" || isbn == "") {
    UI.showAlert("Please fill in all field", "danger");
  } else {
    // Instantiate Book
    let book = new Book(title, author, isbn);
    // Add book to list
    UI.addBookToList(book);
    // Store book to local storage
    Store.storeBook(book);

    UI.clearField();

    UI.showAlert("Book added successfully", "success");
  }
});

// Event:Delete books
document.querySelector("#book-list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
  let isbn = e.target.parentElement.previousElementSibling.textContent;
  Store.removeBook(isbn);
  UI.showAlert("Book Deleted", "success");
});
