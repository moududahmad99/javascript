console.log('====================================');
console.log('Objects & Classes ==>>');


// Objects & Classes


// Example 1 (Objects)

const person = {
  name: "Object",
  age: 30,
  occupation: "Software Engineer"
};

console.log('output: ' + person.name); // Output: Object


// Example 2 (Classes)

// Task: create a Book class that stores the book's title, author, and publication date

class Book {
  constructor(title, author, published) {
    this.title = title;
    this.author = author;
    this.published = published;
  }

  getOutput() {
    return `This book, ${this.title}, was written by ${this.author} in ${this.yearPublished}.`;
  }

}

const  LordOfTheRigns = new Book("The Lord of the Rings", "J.R.R. Tolkien", "July 29, 1954")
console.log(LordOfTheRigns);