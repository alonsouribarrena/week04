// Object.property
// Object.method()
// const s = 'Hello'
// console.log(s.toUpperCase());

// const s1 = 'Hello'
// console.log(typeof s1);
// const s2 = new String('Hello')
// console.log(typeof s2);

// console.log(window);

// console.log(navigator.appVersion);

//object literals
/*
const book1 = {
  title: 'book one',
  author: 'john doe',
  year: '2023',
  getSummary: function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

const book2 = {
  title: 'book one',
  author: 'hane doe',
  year: '2018',
  getSummary: function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}


console.log(book2.getSummary());
console.log(Object.values(book2));
console.log(Object.keys(book1));
*/

//Constructor

// function Book(title, author, year){
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   this.getSummary = function(){
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   }
// }

// //instatiate an objcte

// const book1 = new Book('book one', 'john doe', 2013)
// const book2 = new Book('book 2', 'jane two', 1990)

// console.log(book2);

// Prototypes
// const book1 = new Book('book one', 'john doe', 2013)
// const book2 = new Book('book 2', 'jane two', 1990)


// function Book(title, author, year){
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// //Prototype Get Summary
// Book.prototype.getSummary = function(){
//   return `${this.title} was written by ${this.author} in ${this.year}`;
// }


// //get age
// Book.prototype.getAge = function(){
//   const years = new Date().getFullYear() - this.year;
//   return `${this.title} is ${years} years old`
// }


// //Revised
// Book.prototype.revise = function (newYear) {
//   this.year = newYear;
//   this.revised = true;
// }

// console.log(book2);
// book2.revise('2018')
// console.log(book2);

//inheritance

// function Book(title, author, year){
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// //Prototype Get Summary
// Book.prototype.getSummary = function(){
//   return `${this.title} was written by ${this.author} in ${this.year}`;
// }

// //Magazine Constructor
// function Magazine(title, author, year, month){
//   Book.call(this, title, author, year)
//   this.month = month
// }

// //inherit prototype
// Magazine.prototype = Object.create(Book.prototype);

// //Instantiate Magazine
// const mag1 = new Magazine('mag on1', 'john doe', '2012', 'jan')

// // use magazine constructor
// Magazine.prototype.constructor = Magazine;

// console.log(mag1.getSummary());

//Object creation
// objetc of protos

// const bookProtos = {
//   getSummary: function(){
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
//   getAge: function(){
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`
//   }
// }

// //Create Objetc

// // const book1 = Object.create(bookProtos);
// // book1.title = 'Book one'
// // book1.author = 'john doe'
// // book1.year = '2013'


// const book1 = Object.create(bookProtos, {
//   title:{value: 'Book One'},
//   author:{value: 'john doe'},
//   year:{value: '2013'}
// });

// console.log(book1);


//Classes

// class Book {
//   constructor(title, author, year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
//   getSummary(){
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   }
//   getAge(){
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`
//   }
//   revise(newYear){
//     this.year = newYear;
//     this.revised = true;
//   }
//   static topBookStore(){
//     return 'Barnes & Noble'
//   }
// }

// //instantiate obkect
// const book1 = new Book('book one', 'john  doe', '02013')

// console.log(book1);

// console.log(Book.topBookStore());


//Subclasses

class Book {
  constructor(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

//Magazine Subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

//instatiate Magazine
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'jan')

console.log(mag1.getSummary());