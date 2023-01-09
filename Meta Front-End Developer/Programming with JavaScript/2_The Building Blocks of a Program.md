## Arrays, Objects and Functions

### Functions
- functions can take several lines of code that performs a set of related actions and then group them together under a single label
- when need to run these code, just invoke/call the functions
```
function muFunc() {
    // Execute code
}
myFunc();
```
- major advantages - the use of values
    - pass values to the function by parameters
    - the value passed to the function are called arguments

### Storing data in arrays
- store and rearrange sequenced collections of items
- index start from `0`
- array groups a sequence of variables in a collection
- Array Literal Syntax: `[]`
```
var train = ["wheat", "barley", "potato", "salt", "rocks"];
```
- values in an array are all part of a group
- values are set in a specific sequence
- values can be accessed with their index numbers

### Introduction to objects
- groups of data that related can be assigned as object
- build by dot notation: property of object(key value pair)
```
var storeManager = {};
storeManager.health = 30;
storeManager.greeting = "Let's make some money";
```
- or build by listing the key value pairs inside of the object literal, comma delimited properties
```
var assistantManager = {
    movement: 3,
    health: 40
};
```
- can still edit after the project is built

### Object Literals and the Dot Notation
- to access object
    - `console.log(myObject);`
    - `console.log(myObject.myProperty);`

### Object Literals and the Brackets Notation
- brackets notation: weap each property's key as a string
    - can include space with this way
```
var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}
```

### Arrays are Objects
- arrays are object in JavaScript, which has some built-in properties
    - `push()`: To add new items to an array
    - `pop()`: To remove the last item from an array
    - `.length`: return the array length

### Math object cheat sheet
- Number constants
    - The PI number: `Math.PI` which is approximately `3.14159`
    - The Euler's constant: `Math.E` which is approximately `2.718`
    - The natural logarithm of 2: `Math.LN2` which is approximately `0.693`
- Rounding methods
    - `Math.ceil()` - rounds up to the closest integer 
    - `Math.floor()` - rounds down to the closest integer 
    - `Math.round()` - rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer 
    - `Math.trunc()` - trims the decimal, leaving only the integer
- Arithmetic and calculus methods
    - `Math.pow(2,3)` - calculates the number 2 to the power of 3, the result is `8` 
    - `Math.sqrt(16)` - calculates the square root of 16, the result is `4` 
    - `Math.cbrt(8)` - finds the cube root of 8, the result is `2`
    - `Math.abs(-10)` - returns the absolute value, the result is `10`
    - Logarithmic methods: `Math.log()`, `Math.log2()`, `Math.log10() `
    - Return the minimum and maximum values of all the inputs: `Math.min(9,8,7)` returns `7`, `Math.max(9,8,7)` returns `9`.
    - Trigonometric methods: `Math.sin()`, `Math.cos()`, `Math.tan()`, etc.

### Math object
- random method
    - `Math.random();`
    - a part of the Math object that can generate a number bwtween 0 and 0.99
- ceil method
    - `Math.ceil(number);`
    - a part of the Math object that rounds a decimal **up** to the nearest integer
    - only round upwards
  
### A closer look at strings
- in JavaScript an iterable is any datatype that can be iterated over using a for of loop
- string is array-like
    - The string values can be joined with a plus operator, or by using the concat method.
    - not able to use `.pop()`

### String cheat sheet
- `charAt() `: read each individual character at a specific index in a string
- `concat() `: joins two strings
- `indexOf() `: returns the location of the first position that matches a character: 
- `lastIndexOf() `: finds the last match, otherwise it works the same as `indexOf`.
- `split() `: chops up the string into an array of sub-strings
- `toUpperCase() `, `toLowerCase()`: change the casing of strings.

### Object Methods
- method
```
object.method = function() {
    // Execution code
}
```

### Typeof
- `TypeOf()`: JavaScript operator that evaluates a parameter and returns the data as a string





## Error Handling

### Bugs and errors
- bug
    - When a bug happens, our program keeps running, but it behaves in a way we didn't intend.
- error
    - When an error happens, our program stops running as the result of an error.
    - reporting error by outputting an error message to the console.
- error types
    - syntax error
        - code that JavaScript cannot read
    - type error
        - wrong type of data is used in code
    - reference error
        - when a value is not defined but attempted to use

### Try catch blocks
- error handling help program continue to run even the error occurs
```
try {
    throw new Error();
} catch(err) {
    console.log(err)
}
```
- `err` is an object


### Syntax, logical and runtime errors
- the most common errors in JavaScript: 
    - ReferenceError 
        - one tries to use variables that haven't been declared anywhere
    - SyntaxError 
        - Any kind of invalid JavaScript code will cause a SyntaxError.
        - it cannot be caught using the try-catch block.  
    - TypeError 
        - trying to run a method on a non-supported data type.
    - RangeError
        - giving a value to a function, but that value is out of the allowed range of acceptable input values.
- some other errors in JavaScript. These other errors include: 
    - AggregateError 
    - Error 
    - InternalError 
    - URIError


### Undefined, null and empty values
- null
    - represents intentional absence of object value
    - return value of some build-in method
- Undefined
    - building something that hasn't been clearly defined yet and so you can't assign a value to it
    - can only hold `undefined` value
- empty value
    - the empty string: single quotes or double quotes with no characters in between them





