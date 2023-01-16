## Setting up

### Introduction to Programming with JavaScript
- JavaScript is most well-known for being the programming language of the web
    - front-end
    - back-end

### How is JavaScript used in the real world?
- Language of the Internet
    - popular: the only language that is used in web development
    - unique: both front and back end, across the full stack
    - a little bit inconsistant
    - easier to learn

### Setting up VS code
- **VS Code** (Visual Studio Code): code editor
- **Node.js**
- `console.log('hello world')` output `'hello world'`


## Welcome to Programming

### Introduction to programming
- computer program: a series of instructions based on some rules which tell a computer what to do under some specific circumstances and they are written to perform a specific set of tasks.
- programming language is a bridge between computer and human, which saved in the memory
- RAM or on a disk in binary code, which is represented by a series of zeros and ones.
- a computer's central processing unit, or CPU can comprehend these binary electrical signals and update itself accordingly. This machine language, with its series of zeros and ones, is known as a low level language because it's closer to being understood by a computer's CPU
- JavaScript is higher level language, need to be converted into bin
ary language for CPU

### Why JavaScript?
- JavaScript is a language that builds interactivity into web pages
    - the client side, front-end side of websites and web applications
    - immensely popular
- alternative
    - VBScript
    - TypeScript
        - compiles down to JavaScript 
- JavaScript is currently the only computer language that allows us to directly interact with our web pages dynamically on the client
    - enduring popularity: the rules of backwards compatibility
        - all websites that were built in the past still need to work today
        - removing JavaScript from the browser would effectively render millions of websites completely useless
    - unique ecosystem
        - easy to get start
        - used widely
            - plain(vanilla) JavaScript
            - JavaScript Frameworks (React, Vue, D3?)
            - node.js

### Programming in JavaScript
- in the browser, JavaScript can
    - help various behaviour and interactivity
- on a server, JavaScript can
    - power websites
    - communicate with databases
    - native feel to web apps
        - React Native
        - Internet of Things
- browser vendors
    - developers need to write different codes for different 
- jQuery library
    - import jQuery and write code using its features which work across all browsers
- React
    - has considerable effect
    - solved many of the issues associated with creating, updating and maintaining complex websites
- Want to do the same: Knockout, Backbone, Angular, Ember, Vue, Alpine, etc.
- Legacy code
    - old code

### Coding
1. comments
    - single line: `// comments`
    - multi-line: `/* comments */`
2. semi-colon
    - to clearly delimit parts the code from other parts
    - Automatic Semi-Colon Insertion (ASI)
3. output
    - `console.log()`
    - concatenation charactre `+`, or `,` seperate by space
    - If you add the `%c` right after the `"` character, you can then style the console output by adding the , character after the second `"`, and then, inside another pair of `"` and `"` characters, use valid CSS code to style the words you want to output in the console.

### Variables
1. declare a variable: `var x;`
    - `x` is `undefined` since it has not been assigned a value yet
2. assignment operator to assign the value to variable: `var x = 1;`
    - take the value that is on the right and put into what is on its left
3. variable can be reusable now
4. reassign the variable can replace their stored values

### Data types
- 7 primitive data types
    1. String
        - text value, must be enclosed in single/double quotes
        - has unlimited number of combinations of characters
    2. Number
        - numerical value
        - limited up to a point determined by JavaScript calculation capabilities
    3. Boolean
        - only two values: `True` and `False`
    4. Null
        - only has the value `null`
        - the absence of a value
    5. Undefined
        - only `undefined` value
        - usually refers to a variable that has not been assigned a value
    6. BigInt
        - can accommodate a much greater range of numbers than the number data type
    7. Symbol
        - can be used as the unique identifier


### Operators
- used to perform operations on variables and values, manipulate individual data items and return a result
- arithmetic operators
    - `+`: Addition
    - `-`: Subtraction
    - `/`: Division
    - `*`: Multiplication
    - `**`: exponential
    - `%`: modulus
- comparison operators: compares and returns a logical value based on whether the comparison is true
    - `>`: Greater than
    - `<`: Less than
    - `==`: Equal to
    - `!=`: Not equal to
- logical operators: determine if something is true or false
    - `&&`: checks for both conditions to be true
    - `||`: checks for at least one condition to be true
    - `!`: returns false if the result is true

### Numbers
- Number data type is a foundational data type that represents **integers** and **decimal points**
- parentheses has the priority
- without parentheses, JavaScript will follow the standard mathematical sequence of calculation

### Strings
- String is a collection of characters enclosed in single quotes or double quotes

### Booleans
- The Boolean data type is used to check if a statement is true or false
- `==` only checks for value. eg. `100 == '100'` is `true`
- strictly equal operator `===` checks both value and type. eg. `100 === '100'` is `false`
- strictly inequality operator `!==` check both value and types. eg. `1 !== "1"` returns `true`

### Operators in depth
1. Additional operators
2. Using the `+` operators on strings and numbers
    - `1 + "2"` will convert `1` to `"1"` which results `"12"`
    - `+=` works
    - Operator precedence and associativity
        - Operator precedence is a set of rules that determines which operator should be evaluated first.
        - Operator associativity determines how the precedence works when the code uses operators with the same precedence
        - the assignment operator is right-to-left associative, while the greater than operator is left-to-right associative:

    
### JavaScript improvements
-  the history of JavaScript and the importance of ECMA (European Computer Manufacturers Association) and ECMAScript





## Conditionals and Loops

### Writing statements
- Conditional statements
1. if statement
    - The block of code will only get executed if the condition is evaluated to the Boolean value of true.
```
if (condition == true) {
    // Execute code
}
```
2. if-else statement
```
if (condition == true) {
    // Execute code
}
else if (condition == true) {
    // Execute code
}
else {
    // Execute code
}
```

### Working with conditional statements
- use switch statement if there are many conditions

```
switch (condition) {
    case 1:
        // Execute code;
        break;
    case 2:
        // Execute code;
        break;
    default:
        // Execute code;
}
```

### Looping constructs
- looping constructs can be used to perform repetitive tasks
- to execute repeated blocks of code until a certain condition is satisfied
    - loop counter/incrementer
- for loop
```
for (var i=1; i<4; i++){
    console.log(i);
}
```
- while loop
    - runs as long as a specified condition returns true
```
var i=1;
while(i<4){
    console.log(i);
    i = i+1;
}
```
- nested loop

### For loop
- set the counter value 
- specify the counter condition
- increment the counter

### While loop
- run till the condition becomes false

### Nested loops
- nest loop within other loops so that multiple tasks can be performed at once
- many levels nested loops are not very performant (more levels -> code runs slower)

### Uses of loops
- Using loops is the essence of the approach taken in developing many different pieces of functionality in software today.