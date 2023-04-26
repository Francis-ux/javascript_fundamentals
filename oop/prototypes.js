function Books(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//get summary
Books.prototype.get_summary = function () {
  return `${this.title} was written by ${this.author} in the year ${this.year}`;
};

//get age

Books.prototype.get_age = function () {
  let years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

// manipulating the data in the constructor by storing them in a prototype
// revise / change year
Books.prototype.revise = function (new_year) {
  this.year = new_year;
  this.revised = true;
};

// Instantiate the object
let book1 = new Books("Book One", "John Doe", "2003");
let book2 = new Books("Book Two", "Mary Doe", "2006");

// console.log(book1.get_summary());
// console.log(book2.get_summary());

// // console.log(Object.keys(book1));
// console.log(book2.get_age());

console.log(book1);
console.log(book1.get_age());
book1.revise("2022");
console.log(book1.get_age());
