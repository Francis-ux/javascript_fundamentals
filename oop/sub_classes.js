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

class Magazines extends Books {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

const mag1 = new Magazines("Mag 1", "John Doe", "2008", "June");
console.log(mag1);
