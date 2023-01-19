## Introduction to Functional Programming

### Introduction to Functional Programming
- formal and informal
- programming paradigms: no one style is better suited than the other
- functional programming (FP)
    - a clear distinction between data and functions since data can exist outside of function, and pass the values to functions in the form of arguments
- object-oriented programming (OOP)
    - combine both data and functions into objects

### Return values from functions
- Many functions, by default, return the value of `undefined`, because not have the explicitly set return value
- reason of useful: use return values from one function inside another function.

### Function calling and recursion
- To call, invoke, or execute a function means instructing it to follow the code inside of it one line at a time.
- avoid infinite loop in recursion

### Introduction to scope
- scope: global/local, determines the code accessibility
- global scope: code outside the function
- local scope: code inside the function
    - If a variable is defined within a function, then you can say it's scoped to that function
- function scope
- scope chain: Each function keeps a reference to its parent scope.
- Variables created within the local scope cannot be read by code at the global scope level. They are accessible only to functions located within the local scope.  

### The functional programming paradigm
- paradigms
    - FP
        - keep data and functionality separate and pass data into functions only when we want something computed
        - functions return new values and then use those values somewhere else in the code
    - OOP
        - group data and functionality as properties and methods inside objects
        - methods update properties stored in the object instead of generating new return values
- OOP helps us model real-life objects. It works best when the grouping of properties and data in an object makes logical sense - meaning, the properties and methods "belong together"

- more concepts and ideas in functional programming:
    - First-class functions
        - means that a function in JavaScript is just another value that we can:
            - pass to other functions
            - save in a variable
            - return from other functions
    - Higher-order functions
        - a function that has either one or both of the following characteristics:
            - It accepts other functions as arguments
            - It returns functions when invoked
        - The language itself allows me to pass a function to another function, or to return a function from another function.
    - Pure functions and side-effects
        - A pure function returns the exact same result as long as it's given the same values.
        - Another rule for a function to be considered pure is that it should not have side-effects. A side-effect is any instance where a function makes a change outside of itself:
            - changing variable values outside of the function itself, or even relying on outside variables 
            - calling a Browser API (even the console itself!) 
            - calling `Math.random()` - since the value cannot be reliably repeated

### Scoping with var, let and const
- Local scope states that a variable is only accessible in the function where it is declared
    - ES5 JavaScript: only functions build local scope
    - ES6 JavaScript: block scope
        - a variable declared in a block of code is only accessible inside that block. All the other code outside of the code block cannot access it. 
        - Block scope is built when you declare variables using `let` or `const`.
        - contained within curly braces
- Before ES6, only `var` keyword can declare variable
    - can be used before it is declared
    - same variable can be redclared
    - can be scoped to a function, or globally
- ES6 the suggested way to declare variables is to use the `let` or `const` keywords.
    - Its syntax is very similar to the `var` syntax. Only the keyword is replaced.
    - the behavior of `let` and `const` is more strict
        - cannot use before declare it
        - cannot be redeclared it using the variable keyword, but can reassign
        - it's scoped to the block, even within if statements and loops, like the far or while loops
    - use `let` if the value might change; use `const` if the value will never change

### Comparing var, let and const
- Variables declared with `const` must be assigned during declaration.



## Introduction to Object-Oriented Programming

### Introduction to object-oriented programming
- OOP: Another popular programming paradigm
    - group data
    - separate data
    - With the OOP approach, you create an object and store all data related to that object including variables, functions and output statements.
- `this.`:  the alias of the current objects name, namely, this keyword.
- comparison example
```
// functional programming
var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, tax) {
    return shoes * tax;
}

var toPay = totalPrice(shoes, stateTax);
console.log(toPay);



// OOP 1
var purchase1 = {
    shoes: 100,
    stateTax: 1.2;
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total price:', calculation);
    }
}
purchase1.totalPrice();
```
- In JavaScript, one of the most elegant ways to efficiently build new objects is by using classes.

### Classes
- Classes
    - They are essentially a blueprint that you can repeatedly use to build new objects of a certain kind
    - build using a `class` keyword, followed by the name of the class starting with a capital letter and a pair of curly braces.
    - inside of the curly braces:
        - `constructor` function: to assign the passed in parameters to the future objects properties when instantiating new objects, instances of a given class
        - then any methods, no `function` keyword needed, only method names
    - create an instance of the class using the keyword `new` and that class' name, followed by opening and closing paratheses, and optional arguments

### Object Oriented Programming principles
- Benefits
    - mimic the relationship between objects in the real world
    - effective approach
        - Allows you to write modular code,
        - Makes your code more flexible and
        - Makes your code reusable.
- The Principles of OOP
    - inheritance 继承
        1. There is a base class of a "thing".
        2. There is one or more sub-classes of "things" that inherit the properties of the base class (sometimes also referred to as the "super-class")
        3. There might be some other sub-sub-classes of "things" that inherit from those classes in point 2.
        - To setup the inheritance relation between classes in JavaScript, I can use the `extends` keyword, as in `class B extends A`.
    - encapsulation 封装
        - making a code implementation "hidden" from other users, in the sense that they don't have to know how my code works in order to "consume" the code.
        - Encapsulation is about you not having access to, or not being concerned with, how some implementation works internally.
    - abstraction 抽象
        - writing code in a way that will make it more generalized.
        - An abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept. 
    - polymorphism 多态
        - Polymorphism is a word derived from the Greek language meaning "multiple forms". An alternative translation might be: "something that can take on many shapes".
        - the exact same function producing different results, based on the context (eg. datatype) in which it is used.
        - To reiterate, polymorphism is useful because it allows developers to build objects that can have the exact same functionality, namely, functions with the exact same name, which behave exactly the same. However, at the same time, you can override some parts of the shared functionality or even the complete functionality, in some other parts of the OOP structure.
- Objects exist in a hierarchal structure
```
class Animal { /* ...class code here... */ }

var myDog = Object.create(Animal)
// or
var myDog = new Animal()
```

### Constructors
- JavaScript has a number of built-in object types, such as: Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON, etc.
- Constructor functions, commonly referred to as just "constructors", are special functions that allow us to build instances of these built-in native objects. All the constructors are capitalized.
    - To use a constructor function, I must prepend it with the operator `new`
    - not all the built-in objects come with a constructor function.
    - true for object constructors of primitive types, namely: String, Number, and Boolean.
- RegExp object 
    - built-in object in JavaScript. It's used to pattern-match strings using what's known as "Regular Expressions". Regular Expressions exist in many languages, not just JavaScript.
    - In JavaScript, you can built an instance of the RegExp constructor using new RegExp. 
    - Alternatively, you can use a pattern literal instead of RegExp. Here's an example of using /d/ as a pattern literal, passed-in as an argument to the match method on a string.
- Instead of using `Array`, `Function`, and `RegExp` constructors, you should use their array literal, function literal, and pattern literal varieties: `[]`, `()` `{}`, and `/()/`.

### Inheritance
- In JavaScript, the prototype is an object that can hold properties to be shared by multiple other objects
- prototye model

### Creating classes
- All objects that are built from the prototype share the same functionality. more complex OOP relationships, you can use the `class` 
- ...

### Default Parameters
- ES6 feature allows me to set a default parameter inside a function definition
- Default params allow me to build a function that will run with default argument values even if I don't pass it any arguments, while still being flexible enough to allow me to pass custom argument values and deal with them accordingly.
### Designing an OO Program
- `extends` allows me to inherit from an existing class.
    - `Cat` is the sub-class of `Animal`
```
class Cat extends Animal {
    // ... class code here ...
}
```
- `super()`
    - allows me to "borrow" functionality from a super-class, in a sub-class




## Advanced JavaScript Features
### De-structuring arrays and objects
- JavaScript objects can have properties that define their characteristics.
- de-structuring something out of an object or array, in this case your project folder is like copying that item from your folder on to another location, and the copy is completely independent of the origin item
```
let {PI} = Math;
PI; // 3.1415926....
let {pi} = Math;
pi; // undefined
```

### For of loops and objects
- a for of loop cannot work on an object directly, since an object is not iterable
- Contrary to objects, arrays are iterable.
- Built-in methods
    - `Object.keys()`
        - receives an object as its parameter
        - the returned value is an array of strings, where each string is a property key of the properties contained in the Object.
    - `Object.values()`
    - `Object.entries()`
        - returns an array listing both the keys and the values.  

### For- of loops and objects
- The for-in loop will indeed iterate over the object's properties, and also over its prototype's properties.
- The for-of loop will iterate over the object's own properties only when using the Object.keys() method to return an array to loop over.
- The for-of loop will not iterate over the object and its prototype properties。
```
for (prop of Object.keys(objectName)) {
    console.log(prop + ": " + sportsCar[prop]);
}
```

### Template literals examples
- Template literals are an alternative way of working with strings
    - up until ES6, delimit strings in either single quotes or double quotes
    - ES6 introduce the backtick
- Differences between a template and regular string
    - First, template allows for variable interpolation:
        - using template literals allows programmers to embed variables directly in between the backticks
        - inside the backticks, `${varName}`
    - Additionally, this syntax actually allows for expression evaluation. 
        - This opens up a host of possibilities. For example, it's possible to evaluate a ternary expression inside a template literal.

### Working with template literals
- ES6, backtick can create multi-line strings
- Template literals can be used to create multi-line strings, interpolate variables, and to combine strings with simpler code.

### Data Structures
- Objects
    - unordered, noniterable collection of key-value pairs
    - use objects when you need to store and later access a value under a key
- Arrays
    - ordered iterable collection of values
    - use arrays when you need to store and later access a value under an index
- Maps
    - iterable like Arrays, consists of key- value pairs (hash function - hash table).
    - With maps any value can be used as a key. With objects, keys can only be strings or symbols.
- Sets
    - a collection that each item in the collection must be unique

### Data Structures examples
- Working with arrays in JavaScript
        - `forEach()`
        - Arrays in JavaScript come with a handy method that allows you to loop over each of their members. 
        - accepts a function that will work on each array item. That function's first parameter is the current array item itself, and the second (optional) parameter is the index.

        ```
        const veggies = ['onion', 'garlic', 'potato'];
        veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${fruit}`);
});
        ```

    - `filter()`
        - filters your arrays based on a specific test. Those array items that pass the test are returned.
        - also accepts a function and that function performs some work on each of the items in the array.
        ```
        const nums = [0,10,20,30,40,50];
        nums.filter( function(num) {
            return num > 20;
        })      
        // [30,40,50]
        ```
    - `map`
        - used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter. 
        ```
        [0,10,20,30,40,50].map( function(num) {
            return num / 10
        })
        // [0,1,2,3,4,5]
        ```
- Working with Objects in JavaScript
- Working with Maps in JavaScript
    - A map can feel very similar to an object in JS.
    - However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.
    - `new Map();`
- Working with Sets in JavaScript
    - A set is a collection of unique values.
    - `new Set();`
- Other data structures in JavaScript
    - Queues
    - Linked lists (singly-linked and doubly-linked
    - Trees
    - Graphs

### Spread operator
- ES6 update, the shortest and simplest method to copy the properties of an object onto a newly created object
- spread out array items and join objects together
    - no need to list array elements
    - clear and easy to type syntax
```
array[0], array[1], array[2], array[3]
↓
...array[3]
```

### Rest operator
- to unpack box
```
// top7 is an array with length 7
const [] = top7;
const [first, second, third, ...secondVisit] = top7;
// which split top7 into 4 variables
```

### Using Spread and Rest
- Join arrays, objects using the rest operator
    - Using the spread operator, it's easy to concatenate arrays and join onjects
- Add new members to arrays without using the `push()` method
    - use the spread operator to easily add one or more members to an existing array
- Convert a string to an array using the spread operator
    - `const arr = [...str];`
- Copy either an object or an array into a separate one


## JavaScript in the Browser
### JavaScript modules
- complex programs can be useful for multiple applications, they can be saved ans used elesewhere as modules in this video
- JavaScript modules are standalone units of code that you can reuse again and again
    - add
    - remove
    - replace
- Server JS -> Common JS
    - to sprcify how modules should work outside of the browser environment
    - mostly used on server side JavaScript namely node.js
- To use an ES6 module in a browser, the script's type attribute must be set to “module”.  
```
<script type="text/javascript"> // default is "type/javascript" as well
</script>
<script type="modules">
    import {func }from './file.js';
    func();
</script>
<>
```

### JavaScript DOM manipulation
- DOM gives developers power in how they can manipulate and update webpages
- DOM tree structure: DOM is in the form of a JavaScript object with nested objects for different parts of the page.
- to interact with DOM
    - the Elements tab in the browser's DevTOols
    - the Console panel
```
const h2 = document.createElement('h2')
h2.innerText = "h2 heading"
h2.setAttribute('id', 'sub-heading') // attribute name, attribute value
```
-  The DOM is an in-memory representation of the active HTML document. Any changes made are local and do not affect the document stored on the webserver.

### JavaScript interactivity
- JavaScript's initial purpose was to provide interactivity in the browser
    - Get their geolocation,
    - Interact with maps,
    - Play games in the browser, 
    - Handle all kinds of user-triggered events, regardless of the device,
    - Verify form input before sending it to the backend of a webapp,
    - and more!

### JavaScript selectors
- JavaScript selectors work with the document object which you can access by typing the keyword `document`
- locating specific elements inside the document object
    - query selector method: 
        - `document.querySelector('p');`
        - `document.querySelectorAll('p');`
    - get element by ID:
        - `getElementById('');`
    - get element by class name:
        - `getElementByClassName('');`

### Event Handling
- User-triggered events: use JS code to listen for these event
    - `<button> </button>`
```
const target = document.querySelector('body');
function handleClick() {
    console.log('clicked the body');
}
target.addEventListener('click', handleClick)
```
or
```
<h1 onclick="handleClick2()">heading</h1>
function handleClick2() {
    console.log('clicked the heading');
}
```

### Web page content update
- a simple example that demonstrates how to manipulate information displayed based on user input.
- capture input: `prompt()`
```
let answer = prompt('What is your name?');
if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1')
    h1.innerText = answer;
    document.body.innerText = '';
    document.body.appendChild(h1);
}
```
- to be more efficient in a more complex way
    - dynamically adding the input element, and you're setting its HTML type attribute to text.
```
var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);
```
- set up an event listener. The event you're listening for is the change event. In this case, the change event will fire after you've typed into the input and pressed the ENTER key.
```
var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})
```

### Moving data around on the web
- JSON, which is JavaScript Object Notation.
- Before JSON, the most common data interchange file format was XML
- Thus, the two major reasons for the JSON format becoming the dominant data interchange format that it is today is two-fold:
    - First, it's very lightweight, with syntax very similar to "a stringified JavaScript object". You'll learn more about the specifics of this later.
    - Second, it's easier to handle in JavaScript code, since, JSON, after all, is just JavaScript.
- Besides being a data interchange format, JSON is also a file format. It's not uncommon to access some third-party data from a third-party website into our own code in the form of a `json` file.
```
const currencyInfo = {
    [
        USD: {
            // ...
        },
        GBP: {
            // ...
        },
        EUR: {
            // ...
        }
    ]
}
```
- JSON is properly-formatted string. (key-value pair)
    - primitive values: strings, numbers, bolleans, null
    - complex values: objects and arrays (no functions!)
    - Objects have double-quoted strings for all keys
    - Properties are comma-delimited both in JSON objects and in JSON arrays, just like in regular JavaScript code
    - String properties must be surrounded in double quotes. 
    - Number properties are represented using the regular JavaScript number syntax
    - Boolean properties are represented using the regular JavaScript boolean syntax: `true`, `false`
    - Null as a property is the same as in regular JavaScript; it's just a `null`
- JSON could be object and array

### JavaScript Object Notation - JSON
- conver JSON string to a JavaScript object
    - `const aPlainObj = JSON.parse(jsonStr);`
- convert object to JSON string
    - `JSON.stringify(data)`
- limitations
    - plain JavaScript objects can hold functions, JSON strings cannot.
    - valid JSON doesn't allow the use of JavaScript comments. 
    - while stringfy a JavaScript object containing a method, that method will be excluded from the stringfy operation

