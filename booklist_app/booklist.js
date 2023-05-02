// Book Class:Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// Ui Class:Handle UI Tasks
class UI {
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

    books.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const lists = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class='btn btn-danger btn-sm delete'> X </a></td>
    `;
    lists.appendChild(row);
  }
  static clearField() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
  static deleteBook(e) {
    if (e.classList.contains("delete")) {
      e.parentElement.parentElement.remove();
    }
  }
  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);
    // Vanish in 3 seconds
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }
}
// Store Class:Handles Storage
class Store {
  static getBooks() {
    let books;
    // if there is no items of book in the local storage
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

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

// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event:Add a Book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  // prevent default behavior
  e.preventDefault();
  // Get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // Validate
  if (title == "" || author == "" || isbn == "") {
    UI.showAlert("Please fill in all field", "danger");
  } else {
    // Instantiate Book
    const book = new Book(title, author, isbn);

    // Add book to UI list
    UI.addBookToList(book);

    // Add Book To Store
    Store.addBook(book);

    // Show success message
    UI.showAlert("Book Added", "success");

    // Clear Field
    UI.clearField();
  }
});

//Event:Remove a Book
document.querySelector("#book-list").addEventListener("click", (e) => {
  // Remove Book from ui
  UI.deleteBook(e.target);

  // Remove book from store
  let isbn =
    e.target.parentElement.parentElement.previousElementSibling.textContent;
  Store.removeBook(isbn);

  // Show success message
  UI.showAlert("Book Removed", "success");
});
