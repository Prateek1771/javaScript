# Javascript and Classes

## OOP - Object Oriented Programming

## Object
 - Collection of properties and methods.
 - toLowerCase, toUpperCase

## Why use OOP
 -  the code used to get messup, where some chunk of the code was not reusable.

## Parts of OOP
Object literal

 - Constructor function
 - Prototypes
 - Classes
 - Instance (new, this)

## 4 Pillars
 - Abstraction
    Abstraction is about hiding complex implementation details and showing only the necessary features of an object. In JavaScript, abstraction can be achieved using classes by exposing only the necessary methods and properties.

    ```js
    class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} is starting...`);
  }
  
  // Abstraction: The user doesn't need to know how this method works internally.
  drive() {
    this.start();
    console.log(`${this.brand} ${this.model} is driving.`);
  }
}

const myCar = new Car('Tesla', 'Model X');
myCar.drive();  // Output: Tesla Model X is starting...
                //         Tesla Model X is driving.


    ```
 - Encapsulation
    Encapsulation is the concept of bundling data (variables) and methods (functions) that operate on the data into a single unit (class). It also involves restricting direct access to some of the object's components, which is done using private fields.

    ```js
    class BankAccount {
  #balance; // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('Insufficient funds');
    } else {
      this.#balance -= amount;
      console.log(`Withdrawn: ${amount}. New balance: ${this.#balance}`);
    }
  }

  // Public method to access private balance
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500); // Deposited: 500. New balance: 1500
account.withdraw(300); // Withdrawn: 300. New balance: 1200
console.log(account.getBalance()); // 1200

    ```

 - Inheritance
    Inheritance allows one class to inherit properties and methods from another class. This promotes code reusability.
    
    ```js
    class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Dog class inherits from Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name);  // Call parent class constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name}, the ${this.breed}, barks.`);
  }
}

const dog = new Dog('Rex', 'German Shepherd');
dog.speak();  // Output: Rex, the German Shepherd, barks.

```

 - Polymorphism
    Polymorphism means "many forms," and it allows a method to do different things based on the object that it is acting upon. This can be achieved through method overriding, where a child class defines its own version of a method inherited from a parent class.
    ```js
    class Animal {
  speak() {
    console.log("The animal makes a sound.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("The dog barks.");
  }
}

class Cat extends Animal {
  speak() {
    console.log("The cat meows.");
  }
}

function makeAnimalSpeak(animal) {
  animal.speak();  // Polymorphism: the correct speak method is called based on the animal type
}

const dog = new Dog();
const cat = new Cat();

makeAnimalSpeak(dog); // Output: The dog barks.
makeAnimalSpeak(cat); // Output: The cat meows.


    ```
