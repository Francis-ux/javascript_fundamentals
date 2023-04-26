function Books(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.get_summary = function(){
   return `${this.title} was written by ${this.author} in the year ${this.year}`
  }
}
// Instantiate the object 
let book1 = new Books("Book One","John Doe","2003");
let book2 = new Books("Book Two","Mary Doe","2006");
console.log(book1.get_summary());
console.log(book2.get_summary());

// console.log(Object.keys(book1));
console.log(book1);
