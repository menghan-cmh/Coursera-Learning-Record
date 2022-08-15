### Using Javascript to Build Web Applications

##### Lecture 53 DOM Manipulation
- `window.document` shows the `index.html`
- `document.getElementById("");`
- `console.log(document instanceof HTMLDocument);` True, document is an instance of HTMLDocument
- add script at the end of index.html file 


- `<button onclick="sayHello();"> Say it </button>` needs a `sayHello()` function in JS.
```
function sayHello () {
	var name = document.getElementById("name").value;
}
```

- `.innerHTML`, `.value`, `.textContent`, `.querySelector("")`

##### Lecture 54 Handling Events
- `.addEventListener("click", sayHello);`
- `.onclick`
- `document.addEventListener("DOMContentLoaded", function(event){...});`

##### Lecture 55 The `event` argument
- https://developer.mozilla.org/en-US/docs/Web/API/Event


##### Lesson 56 HTTP Basics
- HTTP (HyperText Transfer Protocol)
	- based on request/response stateless protocol
		- client opens connection to server
		- client sends HTTP request for a resourse
		- Server sends HTTP response to the client (w/resource)
		- Client closes connection to server

- URN: Uniform Resource Name
	- Uniquely identifies resource or name of resource
	- does not tell us how to get the resourse

- URI: Uniform Resource Identifier
	- Uniquely identifies resource or location of resource
	- Does not necessarily tell us how to get the resource

- URL: Uniform Resource Locator
	- Form of URI that provides info on how to get resource

- HTTP Request Structure (GET)
![[Pasted image 20220812222746.png]]

- HTTP Methods
	- GET
		- retrieves the resource
		- data is passed to server as part of the URI, ie: query string
	- POST
		- sends data to server inorder to be processed
		- data is sent in the message body
		- ![[Pasted image 20220813165202.png]]
	
	- etc.

- HTTP Response Structure
	- ![[Pasted image 20220813173001.png]]
	- ![[Pasted image 20220813173018.png]]

- Response Status Codes
	- 200 OK
	- 404 Not Found: server can't find the resource requested
	- 403 Forbidden: Unauthenticated client tries to access a secure resource
	- 500 Internal Server Error: Some unhandled error raised on the server


##### Lesson 57 Ajax Basics
- Ajax (Asynchronous Javascript And XML)
	- while Ajax started with XML, very few apps use it nowadays. Plain text (at times as html) and JSON is used instead

- Traditional web app flow
 ![[Pasted image 20220813182603.png]]
 
 - Ajax web app flow: faster reponse, less bandwidth, nicer experience for user
  ![[Pasted image 20220813182708.png]]
  
  - Synchronous Execution: execution of one instruction at a time, can't start execution of another instruction until the first instruction finished its execution
  - Asynchrnous Execution: execution of more than one instruction at a time. Asynchronous instruction returns right away, the actual execution is done in a separate thread or process
  ![[Pasted image 20220813184139.png]]
  ![[Pasted image 20220813184302.png]]
  
  ![[Pasted image 20220813185613.png]]
  ![[Pasted image 20220813185702.png]]
  ![[Pasted image 20220813191111.png]]
  
  ##### Lecture 58 Processing JSON
  - JSON: JavaScript Object Notation
	  - lightweight data-interchange format, simple textual representation of data
	  - easy for humans to read and write
	  - easy for machines toparse and generate

- JSON syntax rules
	- subset of Javascript object literal syntax... but
		- property names must be in double quotes
		- string values must be in double quotes

	- syntax for everything else is exactly like for object literal

- common misconception
	- JSON is NOT a Javascript Object Literal
	- JSON is just a string
	- The syntax of JSON is based on object literal though
	- Need to covert JSON into a JS object

- Converting JSON to String & Back to JSON
	- json string to object: `var obj = JSON.parse(jsonString;`
	- object to json string: `var str = JSON.stringify(obj);`


##### Lecture 59 Fixing Mobile Nav Menu Automatic Collapse

- jQuery function is after `$`


##### Lecture 60 Dynamically Loading Home View Content
- spa: single page application
- www.ajaxload.info
- Ajex request -> newwork->XHR


##### Lecture 61 Dynamically Loading Menu Categories View
- cross-origin resource sharing


##### Lecture 62 Dynamically Loading Single Category View


##### Lecture 63 Changing 'active' Button Stylr Through Javascript