function Books(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  //   this.getSummary = function () {
  //     return `${this.title} was written by ${this.author} in the year ${this.year}`;
  //   };
}

//get summary
Books.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in the year ${this.year}`;
};

//Magazine Constructor

function Magazine(title, author, year, month) {
  Books.call(this, title, author, year);
  this.month = month;
}

//Instantiate Magazine object
const mag1 = new Magazine("Mag 1", "john Mike", "2008", "june");
console.log(mag1.getSummary());
//Inherit Prototype
Magazine.prototype = Object.create(Books.prototype);
const mag2 = new Magazine("Mag 2", "Mike Jackson", "2008", "june");

//Use Magazine Constructor
// Magazine.prototype.constructor = Magazine;
console.log(mag2);
