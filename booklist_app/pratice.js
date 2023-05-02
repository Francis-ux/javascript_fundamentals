//Book class
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI class
class UI {
  static displayBooks() {
    const allBooks = [
      {
        title: "Book one",
        author: "Micheal King",
        isbn: "#1234345",
      },
      {
        title: "Book two",
        author: "Micheal King",
        isbn: "#1234345",
      },
    ];
    const books = Store.getBooks();
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
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }
}
// Store class

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      //convert json to object
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  static addBooks(book) {
    const books = Store.getBooks();
    books.push(book);
    //convert javascript value to json string
    localStorage.setItem("books", JSON.stringify(books));
  }
  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      // splice is use to add or remove element from an array
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    //convert javascript value to json string
    localStorage.setItem("books", JSON.stringify(books));
  }
}
//Event Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

//Event Add Books
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  //Validate

  if (title == "" || author == "" || isbn == "") {
    UI.showAlert("Please fill in all field", "danger");
  } else {
    // Instantiate Book
    const book = new Book(title, author, isbn);
    UI.addBookToList(book);
    Store.addBooks(book);
    UI.clearField();
    UI.showAlert("Book Added", "success");
  }
});
// Event Delete Book
document.querySelector("#book-list").addEventListener("click", (e) => {
  // delete from list
  UI.deleteBook(e.target);
  // delete from local storage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  UI.showAlert("Book Removed", "success");
});
