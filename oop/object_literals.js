//object literals
const book1 = {
  title: "Book One",
  author: "John Doe",
  year: "2013",
  all_book: ["Book three", "Book Four"],
  get_summary: function () {
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
  },
};


const book2 = {
   title: "Book Two",
   author: "Mary Doe",
   year: "2013",
   all_book: ["Book six", "Book seven"],
   get_summary: function () {
     return `${this.title} was written by ${this.author} in the year ${this.year}`;
   },
 };

// console.log(book2.get_summary());
// console.log(book2.all_book[0]);

// getting all the values from the object
console.log(Object.values(book1));
// getting all the keys from the object
console.log(Object.keys(book2));