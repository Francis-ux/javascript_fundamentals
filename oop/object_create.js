// object of prototype
const Books = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
  },
  getAge: function () {
    let years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  },
};

const book1 = Object.create(Books);
book1.title = "Book One";
book1.author = "John Doe";
book1.year = "1900";
console.log(book1.getAge());