# JavaScript Mastery with Hitesh Sir Playlist

This repository showcases the JavaScript concepts and projects I worked on while following the entire JavaScript playlist by Hitesh Sir. The playlist covers JavaScript from the basics to advanced topics. You can access the playlist at: [Chai Aur Code - Hitesh Sir's YouTube Channel](https://www.youtube.com/@chaiaurcode).

Here is the Notion Docs for the reference:[JavaScript Notes](https://www.notion.so/JS-Notes-11058ffb53d280ac91edd15505239e9e?pvs=4)

## Topics Covered

<details>
  <summary>01_Basics</summary>

- **Variables**: Learn how to declare and initialize variables in JavaScript using `var`, `let`, and `const`. Understand the difference in their scope, hoisting behavior, and use cases in various situations.
- **Data Types**: Dive deep into the primitive data types such as `number`, `string`, `boolean`, `undefined`, `null`, `symbol`, and complex data types like `object`. This section explains how different data types interact and how JavaScript is dynamically typed.
- **Type Conversion**: Understand how to convert data from one type to another using functions like `Number()`, `String()`, `Boolean()`, and automatic type coercion that happens during operations.
- **Operators**: Explore arithmetic operators (`+`, `-`, `*`, `/`), comparison operators (`==`, `===`, `!=`), logical operators (`&&`, `||`, `!`), and assignment operators (`=`) to manipulate data and perform operations.
- **Comparison Operators**: Compare values and understand the difference between loose equality (`==`) and strict equality (`===`), as well as inequality checks.
- **Data Types Summary**: A review of how primitive and reference types are treated in memory, including pass-by-value and pass-by-reference.
- **Strings**: Learn to work with text using JavaScript strings, explore common methods such as `slice()`, `substring()`, `replace()`, `concat()`, and handle string immutability and template literals for dynamic strings.
- **Dates**: Use the `Date` object to manage and manipulate date and time. Learn methods like `getFullYear()`, `getMonth()`, `getDate()` to fetch date parts and create formatted date strings.
- **Arrays**: Master the basics of arrays, an ordered list of values. Understand methods like `push()`, `pop()`, `shift()`, `unshift()`, `map()`, `filter()`, `reduce()` for efficient data handling.
- **Objects**: Explore JavaScript objects, collections of key-value pairs. Learn how to create, modify, and access object properties and methods, and understand how to use `this` in object contexts.
- **Functions**: Learn how to write reusable functions with `function` declarations, function expressions, and how functions are first-class citizens in JavaScript.
- **Scope**: Understand how variable scope works, focusing on function scope, block scope (with `let` and `const`), and the concept of the global scope.
- **Arrow Functions**: Introduced in ES6, arrow functions provide a concise syntax for writing functions. This section covers their behavior, especially with the `this` keyword and when to use them.
- **IIFE (Immediately Invoked Function Expressions)**: Functions that execute right after they are defined. Learn why they are useful for encapsulating code and avoiding variable pollution in the global scope.
</details>

<details>
  <summary>02_Control Flow</summary>

- **Switch Statements**: A more readable alternative to `if-else` statements when handling multiple possible values of a single expression. Understand the syntax and the importance of the `break` statement.
- **Operators in Control Flow**: Learn how to use logical operators (`&&`, `||`) and ternary operators to make control flow more concise and readable.
</details>

<details>
  <summary>03_Iterations</summary>

- **For Loops**: Classic loops that repeat actions a specific number of times. Learn to iterate over arrays, numbers, and other iterable data types, and control loop execution with `continue` and `break`.
- **For-of Loops**: A simpler and cleaner way to iterate over iterable objects like arrays, strings, maps, and sets without managing a counter variable.
- **While Loops**: Loops that continue execution as long as a specified condition remains `true`. This is useful when the number of iterations isn't known beforehand.
- **Do-While Loops**: Similar to `while` loops but ensures that the loop executes at least once, even if the condition is false from the start.
</details>

<details>
  <summary>04_DOM Operations</summary>

- **DOM Manipulation**: Explore how to dynamically change the content and structure of a web page. Learn methods like `getElementById()`, `querySelector()`, and manipulate elements by adding/removing classes, styles, and content. This section covers key concepts like the DOM tree, node types, and event-driven updates.
</details>

<details>
  <summary>05_Projects</summary>

- **Color Changer**: A simple project to dynamically change the background color of the page based on user input or pre-defined options.
- **BMI Calculator**: A functional app that takes user inputs (height and weight) and calculates Body Mass Index, providing feedback based on the result.
- **Digital Clock**: Create a clock that displays the current time and updates every second using `setInterval()` and the `Date` object.
- **Guess the Number**: A fun game where users try to guess a randomly generated number within a given range, with feedback for each guess (higher/lower).
- **Keyboard**: Captures user key presses and displays them on the screen, highlighting the role of keyboard events like `keydown` and `keyup`.
- **Unlimited Scrolling**: Implement an infinite scrolling effect where new content loads dynamically as the user scrolls down the page.
- **Typer Game**: A speed typing game where the user must quickly type words that appear on the screen, testing their typing accuracy and speed.
- **Mouse Tracker**: A project that visually tracks and displays the user's mouse movement coordinates in real-time on the screen.
- **Emoji Generator**: Generates random emojis using a predefined list or API, and displays them in a fun, creative way.
- **Text Editor**: A mini in-browser text editor where users can write, format text (bold, italic, underline), and save their work.
- **Random Image Generator**: Use an API or a random image generator function to display different images each time the user clicks a button.
- **Joke Teller**: Fetch and display random jokes from an API, with an option for users to get a new joke with each button click.
- **Cats API**: Use the Cats API to fetch and display cute cat pictures, practicing API requests and DOM manipulation.
- **CRUD Operations**: Learn to perform Create, Read, Update, and Delete operations using JavaScript and DOM manipulation, focusing on updating user data dynamically on the webpage.
- **Debounce Implementation**: Create a debounce function that limits how often a time-consuming task (like API requests or event handling) can be triggered, improving the performance of search inputs and real-time filters.
</details>

<details>
  <summary>06_Events in JavaScript</summary>

- **Event Listeners**: Attach event listeners to HTML elements, learning how to capture user actions like clicks, key presses, mouse movements, and form submissions. Understand the event object and how it gives access to event details.
- **Handling DOM Events**: Learn about event propagation (bubbling and capturing), event delegation for optimizing event handling, and how to prevent the default behavior of elements.
</details>

<details>
  <summary>07_Advanced JavaScript Concepts</summary>

- **API Requests**: Explore how to send HTTP requests to external servers using the `fetch()` method, retrieve data from APIs, and update your web page dynamically based on responses.
- **Promises**: Learn about JavaScript promises to handle asynchronous operations. Understand how to chain promises using `.then()` and handle errors with `.catch()`.
- **Fetch API**: A modern and flexible way to perform network requests in JavaScript. Learn to handle both successful and failed responses, and how to parse data formats like JSON.
- **`new` Keyword**: Understand how the `new` keyword is used in JavaScript to create instances of objects from constructors, and how it binds the `this` context to the new object.
</details>

<details>
  <summary>08_Classes and Objects in JavaScript (OOP)</summary>

- **Object-Oriented Programming**: Explore the key principles of OOP in JavaScript, including encapsulation, abstraction, inheritance, and polymorphism, using classes and objects.
- **Objects and Prototypes**: Understand how JavaScript uses prototypes for inheritance. Learn about the prototype chain and how methods and properties are inherited from one object to another.
- **Call, Apply, Bind**: Learn how these methods are used to control the `this` context in functions. `Call()` and `apply()` execute functions immediately, while `bind()` returns a new function with the specified context.
- **Classes and Inheritance**: Use ES6 classes to define templates for creating objects and use inheritance to extend class functionality. Learn about `constructor()` and `super()` methods.
- **Static Properties**: Explore properties that belong to the class itself rather than to instances of the class, useful for defining constants and utility functions.
- **Getter and Setter Methods**: Learn how to use getter and setter methods to access and modify object properties indirectly, providing control over how properties are handled in objects.
</details>
