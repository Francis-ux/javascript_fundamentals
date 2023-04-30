class Books {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
  }
  getAge() {
    let years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }
  revise(year) {
    this.year = year;
    let revise = true;
  }
  static changeAuthor() {
    return "Author Changed";
  }
  static changeAge() {
    return "Age have been changed";
  }
}

let book1 = new Books("Book One", "John Doe", "2003");
let book2 = new Books("Book Two", "Mary Doe", "2006");
console.log(book1);
book1.revise("2009");
console.log(book1);
console.log(book1.getSummary());
console.log(Books.changeAuthor());
console.log(Books.changeAge());
