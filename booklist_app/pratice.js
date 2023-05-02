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
    const books = StoredBooks;
    // Loop through the array of books
    // Add the books to list
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
  static deleteBook(e) {
    if (e.classList.contains("delete")) {
      e.parentElement.parentElement.remove();
      UI.showAlert("Book Deleted", "success");
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
  static addBook(book) {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
      console.log("true");
    } else {
      console.log("false");
    }
  }
}
// Event:Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);
// Event:Delete books
document.querySelector("#book-list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
});

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

    UI.addBookToList(book);

    UI.clearField();

    UI.showAlert("Book added successfully", "success");
  }
});

Store.addBook("");
