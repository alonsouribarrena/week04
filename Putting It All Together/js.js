// Exercise 1 - Classes
// Create a class called `Person` with the following 
// properties and methods:

// 1 - Properties:

//   `name` (string)
//   `age` (number)
// 2 - Methods:

//   `introduce()`: This method should return a string
//   introducing the person, for example: "Hi, my name 
//   is John and I am 25 years old."


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function () {
      return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    };
  }
  describePerson() {

  }
}

// Exercise 2 - This
// Create a new object using the `Person` class you 
// defined in Exercise 1. Name the object `person1` 
// and set the `name` and `age` properties accordingly. 
// Then, create a function called `describePerson` 
// that takes a callback function as an argument. 
// Inside the `describePerson` function, call the 
// callback function with `person1` as the `this` 
// context.

const person1 = new Person("John", 25);



// Exercise 3 - Promises
// Write a function called `wait` that takes a number 
// as an argument (representing milliseconds) and 
// returns a Promise. The Promise should resolve after 
// the given number of milliseconds, using `setTimeout`. 
// The resolved value can be anything you choose.

const wait = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time === 2000) {
        resolve(`the resolve the time for await`);
      } else {
        reject(new Error("we did not make it"));
      }
    }, 2000);
  });
};

wait(2000)

// Exercise 4 - Async/Await
// Create an async function called `getData` that uses 
// the `wait` function from Task 3 to simulate an 
// asynchronous operation. This function should use 
// `await` to wait for the Promise to resolve and 
// then return a string with the
//  message "Data received."

async function getData () {
  await wait(2000);
}

getData()

console.log(person1.introduce());
// console.log(describePerson(introduce(this.person1)));
console.log(getData());