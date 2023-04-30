//Book Class: Represent a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
// Ui Class:Handle Ui Task
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Book One",
        author: "John Doe",
        isbn: "343445",
      },
      {
        title: "Book Two",
        author: "John Micheal",
        isbn: "1233345",
      },
    ];
    const books = StoredBooks;
    books.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const lists = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
   <td>${book.title}</td>
   <td>${book.author}</td>
   <td>${book.isbn}</td>
   <td><a href="" class="btn btn-danger btn-sm delete"><i class="fa fa-trash"></i></a></td>
   `;
    lists.appendChild(row);
  }
  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
  static deleteBooks(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }
}
// Store class:Handles Storage

// Event:Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event:add a Book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  //Get form values;
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  //Instantiate book

  const book = new Book(title, author, isbn);

  // Add book to UI
  UI.addBookToList(book);
  // Clear field

  UI.clearFields();
});

// Event:Remove a book

document.querySelector("#book-list").addEventListener("click", (e) => {
   e.preventDefault();
  UI.deleteBooks(e.target);
});
