## JavaScript Basics

##### Lecture 40 Adjusting Development Environment for Javascript Development

- `<script> code </script>`

- `<script src="js/script.js"></script>`

- `console.log(x);` will show `var x` in console
- single thread environment in browser


##### Lecture 41 Defining Variables, Function, and Scope
- Variables`var message = "hi";`

	- variable definition should always start with `var`

	- no types are declared - JS is dynamically typed language, same variable can hold different types during the life of the execution
- Function `function a () {...}` or `var a = function () {...}`
	- in the rear one, `a` is the value of function assigned, NOT the returned result, and the function has no name defined, refer the function as `a`
	- defines function: `function a () {...}`. executes function/ invokes function: `a();`


	- arguments defined without `var`
	- use `return` to return value

- Scope
	- Global: variables and functions defined here are available everywhere


	- Function (aka lexical): variables and functions defined here are available only within this function

- Scope Chain
	- Everything is executed in an Execution Context
	- Function invocation creates a new Execution Context
	- Each Execution Context has:
		- its own Variable Environment
		- Special `this` object
	
		- reference to its Outer Environment

	-	Global Scope does not have an Outer Environment as it's the most outer there is
	-	Referenced (not defined) variable will be searched for in its current scope first. If not found, the Outer Reference will be searched. If not found, the Outer Reference's Outer Reference will be searched, etc. This will keep going until the Global scope. If not found in Global scope, the variable is `undefined`![[Pasted image 20220806044837.png]]

##### Lecture 42 Javascript Types

- Types: a type is a particular data structure.
	- each language defined some built-in types
	- built-in types can be used to build other data structures


	- JS has 7 built-in types: 6 primitive and 1 Object type

- Object Type: Object is a collection of name/value pairs
	- ![[Pasted image 20220806051125.png]]

- Primitive Types represents a single, immutable value
	- single value not an object
	- immutable means once it's set, it can't be changed. value becomes read-only. can create another value based on an existing one

- Primitive Type
	- Boolean can only have 2 values: `true` or `false`
	- Undefined signifies that no value has ever been set
		- can only have one value: `undefined`


		- can set a variable to `undefined`, but NEVER do it since it means that it's never been defined, so defining it to undefined is counter to its core meaning
		- has to be declared first but not set to any value
	- Null signifies lack of value
		- as opposed to `undefined`, which is lack of definition
		- can only have one value `null`
		- it's ok to explicitly set a variable to `null`

	- Number is the only numeric type in Javascript
		- always represented under the hood as double-precision 64-bit floating point


		- JS does not have an integer type, since integers are a subset of doubles instead of a separate data type

	- String is sequence of characters used to represent text, use either single or double quotes
	- Symbol is new to ES6 (released 2-15), which isn't widely supported or used yet
	
	
##### Lecture 43 Common Language Constructs
- allow to concatenate string
- regular math operators: `+`,`-`,`*`,`/`
- `undefined` in operation: `NaN` not a number
- `==` equality, can convert type when both sides are different
- `===` strict equality, won't convert type
- If statement:  OR`||`,   AND `&&`
	- `false`, `null`, `undefined`, `""`, `0`, `NaN` are all false
	- `true`, `"hello"`, `1`, `-1`, `"false"` are all true
	- **Strict equality** operator (\==\=) differs from regular **equality operator** (**\==**) in that it checks if both values on its right and left are of the same type **first**. If they are not, it doesn't try to coerce them to be the same value and just returns **false**.

- {} style: curly brace on the same line. if it in the different line, the command line stops running.
- for loop: `for (var i=0; i<10; i++) { sum = sum+i; }`
	- if `i` has been declared, no need to declare it second time.

##### Lecture 44 Handling Default Values
- defualt value eg. `undefined`
- `x = x || "whatever";`
	- when `x==undefined`, `x` will be `"wahtever"`


##### Lecture 45 Creating Objects Using 'new Object()' Syntax
- creation
	- can directly create name and assign value when the object exist
	- name could be `.name` or `["name"]`

- Defining a variable as an Object Literal accomplishes pretty much the same thing as defining a variable equal to 'new Object()'. However, it's faster and easier to type up an object literal.


##### Lecture 46 Functions Explained
- functions are first-class data types
- functions are objects
- ![[Pasted image 20220807003249.png]]
- functions could be passing as arguments


##### Lecture 47 Passing Variables by Value vs. by Reference

- By value: given `b=a`, passing/copying by value means changing copied value in `b` does not affect the value stored in `a` and vise versa.
- By reference: give `b=a`, passing/coppying by reference means changing copied value in`b` does affect the value stored in `a` and vise versa
- In Javascript
	- primitives are passed by value
	- objects are passed by reference (stored the address of object content)


	- functions parameter follows the same rule


##### Lecture 48 Function Constructors, prototype, and the 'this' Keyword
- `this` point to the global Window object.
- when invoke a function together with the `new` keyworrd, the JS makes it point to the new object itself.


- prototype: `func1.prototype.method = function () {...}` which is located out of the func1

##### Lecture 49 Object Literals and the 'this' Keyword
- when `this` in a function of an object, it points to the object
- `this.name` 
- `this` in the inner function of function in object, points to the window
- ![[Pasted image 20220807203246.png]]


##### Lecture 50 Arrays
- `var array = new Array();`
- could store different types of object in the same array
- `var array = [];`
- could assign value to `array[100]` after `array[3]` even there's a loooot of `undefined` in between.

- for loop: 
	- `for (var prop in myObj){console.log(prop+":"+myObj[prop]);} `
	- `for (var name in names2) {console.log(names2[name]);}` works if there's no other property in names2

##### Lecture 51 Closures
```
function makeMultiplier (multiplier) {
return (
	function (x) {
		 return multiplier * x;
		}
	);
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));
```
console: 20
does not affect other functions in `makeMultiplier`
`doubleAll` equals the function `function (x) {...}`


##### Lecture 52 Fake Namespaces and  Immediately Invoked Function Expressions (IIFEs)
- to avoid conflict
```
var johnGreeter = {};
johnGreeter.name = "John";
JohnGreeter.sayHi = function () {
	console.log("Hi " + johnGreeter.name);
}
```

- IIFE
```
(function () {
	console.log("Hello Courseta!");
})();
```

```
(function (window) {
	var johnGreeter = {};
	johnGreeter.name = "John";
	JohnGreeter.sayHi = function () {
		console.log("Hi " + johnGreeter.name);
	}
	
	window.johnGreeter = johnGreeter;
})(window);
```
- Immediately Invoked Function Expressions are usually used to place code into its own execution context not to conflict with the global scope.
- 