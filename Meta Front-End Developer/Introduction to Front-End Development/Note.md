<p id="top"></p>


## Context
- [Week 1](#week1)
    - [Introduction to the Professional Certificate](#week1_1)
    - [How the web works](#week1_2)
    - [Core internet technologies](#wwek1_3)
- [Week 2](#week2)
    - [Getting started with HTML](#week2_1)
        - [Creating an HTML document](/Creating an HTML document/)
    - [CSS Basics](#week2_2)
        - [Styling a page](/Styling a page/)
    - [Creating a web page](#week2_3)
        - [Create and style a webpage](/Create and style a webpage/)
- [Week 3](#week3)
    - [Intro to UI Frameworks and Libraries](#week3_1)
    - [Introduction to React](#week3_2)
- [Week 4](#week4)

<p id="week1"></p>

## Week 1

<p id="week1_1"></p>

### Introduction to the Professional Certificate
#### Intro to the Program / Course
- 
#### Front-end, back-end and full-stack developer
- 
#### Syllabus
- 
[Back to Top↑](#top)

<p id="week1_2"></p>

### How the web works
#### How the internet works
- Network
    - A network is made up of at least two devices that connect and communicate via a wired or wireless connection. One network switch can connect to another switch to link two networks. Not only can two network switches be connected, but multiple ones can be connected to form an interconnected network like the internet.
- Client-Server model

#### What is a web server and how does it work?
- Data center all around the world
- Server purpose
    - A server is a computer that runs applications and services, ranging from websites to instant messaging.
- web server
    - A web server can function as website storage, administration, handle security and manage emails.
    - Web servers have to be able to handle high volumes of web requests.

#### What are websites and webpages?
- Technologies
    - **HTML**(HyperText Markup Language) structures the content people see
        - markup tags
    - **CSS**(Cascading Style Sheets) controls the color and style
        - enhancing HTML elements and tell them how to display
    - **JavaScript** is responsible for the user interaction
        - tools for interactivity, data processing, control and action
        - manipulate the content of webpage
- Process
    - send copy of webpage from web server to browser
    - each line of code is processed in **sequential** order
    - page rendering: browser creates building blocks as each line is interpreted
    - response from the web server must be a complete web page inorder to fulfill the request to show the page in browser

#### What is a web browser and how does it work?
- Web browser
    - software for browse World Wode Web
    - works by sending a request to a web server and then receive a response containing the content that is to be displayed on the screen of your device
    - address bar: for URL(Uniform Resource Locator), which contains Protocol(eg. HTTP), the domain name and the file path
- request respond cycle
    - browser sends a request across a network to web server
    - web server response by sending a webpage back to the browser
    - Once the browser receives all the response information, the search engine webpage is made visible

#### Web hosting
- Developers can lauch websites to the internet by web hosting
    - web hosting is a service to put data and files in the hosting companies web server
    - renting space return for stable and secure storage
    - different options
        - Shared hosting
            - cheapest, better for a small website with a small number of visitors, also used as a low-cost sandbox environment to practice deploying or hosting their personal websites, some companies offer free shared hosting with limitations
            - pay for a locating on a web server containing many web hosting accounts with shared hosting
            - share processing power, memory and bandwidth with other websites, will be impacted to perform worse
        - Virtual private hosting / virtual pricate surface(VPS)
            - more considerable demands, more expensive
            - a virtual server with dedicated CPU, memory and bandwidth resources. running on a hardware server with other VPS instances but the resources are fixed per VPS instances, not likely to be impact by others.
        - Dedicated hosting
            - hardware server to me only, more and more expensive
        - Cloud hosting
            - grown in last decade, pay based on resource use
            - runs in clous environment, spans across multiple physical and virtual servers
            - main advantage: can use as many resources as you need without hardware limitations
[Back to Top↑](#top)


<p id="week1_3"></p>

### Core internet technologies

#### Introduction to Internet Protocols
- IP address: like addressed in postal system to deliver the packets of information
    - standards of internet protocol
    - IP Version 4 
        - 4 octet(8位字节), seperate by periods
    - IP Version 6
        - 8 groups of hexadecimal digits, separated by colon
- Data transmission
    - error
        - arrive out of order
        - get damaged
        - lost during transit
    - **TCP** (Transmission Control Protocol)
        - could solve the errors above, but causes a small delay
        - used for sending the data that must arrive correctly and in order such as text or image files
    - **UDP** (User Datagram Protocol)
        - solves the corrupt packet issue but may out of order or lost
        - used for sending data that can tolerate some data loss such as voice call or live video streaming
- IP Packets
    - IP Header
        - destination & source address
    - IP Data

#### Introduction to HTTP
- HTTPS (secure version of HTTP)
    - the lock icon besides the URL
    - for secure communication that no one else can see the information being sent and received
    - by using encryption
        - before the content is sent, it is turned into a secret code
        - only the other computer can turn the secret code back into its original content
- HTTP is a core operation protocol of WWW
    - communication protocol
        - enables web browser to communicate with a web server that hosts a website
        - can transfer HTML Documents, images and files
    - request response based protocol
- HTTP request
    - method
        - type of action that client was to perform
        - `GET`: retrieve, `POST`: send, `PUT`: update, `DELETE`: remove
    - path
        - representation of where the resourve is stored on the webserver
        - `/path`
    - version
        - version of the protocol
        - `HTTP/x.x`: most used `1.1` and `2.0 `
    - headers
        - addtional information about the request, and the client that is making the request
        - for certain requests methods, the requests will also contain a body of content that the client is sending
        - `Host`: where the resouces from
        - `User-Agent`: the request OS, version and application vendor
        - `Accept`: type of content the client will accept as responses
        - `Accept-Language`: language and optionally locale that the client prefers
        - `Content-type`: type of content being transmitted in the request body;
    - body (optionally)
        - often included when using the HTTP POST and PUT methods to transmit data
        ```
        {
            "key": "value",
            "array": ["value", "value"]
        }
        ```

- HTTP response
    - similar as request
    - optionally contain a message body consisting of the response contents following the header
    - status code / status message
        - indicates if HTTP request successfully completed
        - ranges `100` - `599` and a grouped by purpose / a text representation of the status code
            - grouped by the first digit
            - `1XX`: informational
                - provisional responses send by the server, interim(临时的) before the actual response
                - `100`: `Continue`. indicates that the web client should continure to request or ignore the response if the request is already finished
                - `101`: `Switching Protocols`. The client has requested the server to switch protocols and the server has agreed to do so.
            - `2XX`: successful responses
                - indicate the at the request was successfully processed by the web server 
                - `200`: `Ok`. receiving everday life for successfully receiving content
                    - depends on the HTTP method
                    - `GET`: resource is found and is included in the body of the HTTP response
                    - `POST`: resouce was successfully transmitted to the webserver
                    - `PUT`: successfully transmitted to the webserver
                    - `DELETE`: the resource was deleted
                - `201`: `Created`. The server successfully processed the request and a resource was created.
                - `202`: `Accepted`. The server accepted the request for processing but the processing has not yet been completed.
                - `204`: `No Content`. The server successfully processed the request but is not returning any content.
            - `3XX`: redirection message
                - indicates the webclient that the requested resource has been moved to a different path
                - `301`: `Moved Permanently`. This request and all future requests should be sent to the returned location.
                - `302`: `Found`. temporary redirection, resources has been temporarily removed
                - when web browser receive these responses, they will automatically submit the request for the resource at the new path
            - `4XX`: client error responses
                - indicate that the requests contained bad syntax or content and cannot be processed by the webserver
                - `400`: `Bad Request`. used where the web browser or client submitted bad data to the webserver
                - `401`: `Unauthorized`. used to indicate that the user must log into an account bedore the request can be processed
                - `403`: `Forbidden`. used to indicate the request was valid, but that the webserver is refusing to process it. often used to indicate that a user does not have sufficient permissions to execute an action in a web application.
                - `404`: `Not Found`. used to indicate that the request resource was not found on the webserver
                - `405`: `Method Not Allowed`. The web server does not support the HTTP method used.
            - `5XX`: server error responses
                - indicate that a failure occurred on the webserver while trying to process the request.
                - `500`: `Internal Server Error`. a generic error status indicating that the server fail to process the request.
                - `502`: `Bad Gateway`. The web server received an invalid response from the Application Server
                - `503`: `Service Unavailable`. The web server cannot process the request
    - Response Headers
        - `Date`: specifies the date and time the HTTP response was generated
        - `Server`: describes the web server software used to generate the response
        - `Content-Length`: describes the length of the response
        - `Content-Type`: describes the media type of the resource returned (e.g. HTML document, image, video)

#### Intro to HTML, CSS and Javascript
- two interact demo of how three tech linked together
1. building a webpage that displays a digital clock that shows hour, minute and second, time is updated every second
    - `clock.html` has the element describes the content in hours, minutes and seconds. only use this file, the content would be shown without any style positioning or sizing
    - `style.css` is refereced by the HTML code. web browser retrieved this file and processes it. CSS code provides styling for the clock, tells the browser the position, size, color, background and font type, and size of each element on the screen.
    - `clock.js` is referenced by the HTML to ensure the clock updates with the correct time. The Java Script file contains code that every second updates the content of the hour, minute and second elements.
    - with three files created and linked together, the clock is fully functional. this example demonstrates JavaScript dynamically updating content

2. a web page that can play video, there is a button contains a play icon that plays or pauses the video
    - `videoplayer.html` describes the content, which is the video element and the Play button element.
    - `style.css` is referenced by HTML code, applied the styling to the video and button.
    - `videoplayer.js` is referenced by the HTML file. code in the JavaScript file performs actions.
        1. registers a listener on the button that will execute some code when the button is clicked.
        2. when the code runs, it checks the current state of the video.
            - if video is currently stoped, it begins playing the video and changes the buttons icon to a stop icon.
            - or if the video is currently playing, it stops playing the video and changes the buttons icon to a play icon
    - JavaScript can slso be used for interaction. the video is stopped by default when people first see the page

#### Other Internet Protocols
- Dynamic Host Configuration Protocol (DHCP)
    - You've learned that computers need IP addresses to communicate with each other. When your computer connects to a network, the Dynamic Host Configuration Protocol or DHCP as it is commonly known, is used to assign your computer an IP address.
    - Your computer communicates over User Datagram Protocol (UDP) using the protocol with a type of server called a DHCP server. The server keeps track of computers on the network and their IP addresses. It will assign your computer an IP address and respond over the protocol to let it know which IP address to use. Once your computer has an IP address, it can communicate with other computers on the network.

- Domain Name System Protocol (DNS)
    - Your computer needs a way to know with which IP address to communicate when you visit a website in your web browser, for example, meta.com. The Domain Name System Protocol, commonly known as DNS, provides this function. Your computer then checks with the DNS server associated with the domain name and then returns the correct IP address.

- Internet Message Access Protocol (IMAP)
    - Do you check your emails on your mobile or tablet device? Or maybe you use an email application on your computer?
    - Your device needs a way to download emails and manage your mailbox on the server storing your emails. This is the purpose of the Internet Message Access Protocol or IMAP.

- Simple Mail Transfer Protocol (SMTP)
    - Now that your emails are on your device, you need a way to send emails. The Simple Mail Transfer Protocol, or SMTP, is used. It allows email clients to submit emails for sending via an SMTP server. You can also use it to receive emails from an email client, but IMAP is more commonly used.

- Post Office Protocol (POP)
    - The Post Office Protocol (POP) is an older protocol used to download emails to an email client. The main difference in using POP instead of IMAP is that POP will delete the emails on the server once they have been downloaded to your local device. Although it is no longer commonly used in email clients, developers often use it to implement email automation as it is a more straightforward protocol than IMAP.

- File Transfer Protocol (FTP)
    - When running your websites and web applications on the Internet, you'll need a way to transfer the files from your local computer to the server they'll run on. The standard protocol used for this is the File Transfer Protocol or FTP. FTP allows you to list, send, receive and delete files on a server. Your server must run an FTP Server and you will need an FTP Client on your local machine. You'll learn more about these in a later course.

- Secure Shell Protocol (SSH)
    - When you start working with servers, you'll also need a way to log in and interact with the computer remotely. The most common method of doing this is using the Secure Shell Protocol, commonly referred to as SSH. Using an SSH client allows you to connect to an SSH server running on a server to perform commands on the remote computer.
    - All data sent over SSH is encrypted. This means that third parties cannot understand the data transmitted. Only the sending and receiving computers can understand the data.

- SSH File Transfer Protocol (SFTP)
    - The data is transmitted insecurely when using the File Transfer Protocol. This means that third parties may understand the data that you are sending. This is not right if you transmit company files such as software and databases. To solve this, the SSH File Transfer Protocol, alternatively called the Secure File Transfer Protocol, can be used to transfer files over the SSH protocol. This ensures that the data is transmitted securely. Most FTP clients also support the SFTP protocol.

#### Webpages, Websites and Web Apps
- web page
    - typical web page is one single page that consists of HTML, CSS and JavaScript, display text, images, videos and other content in the web browser.
- websites
    - a collection of web pages that linked together under one domain name
    - hyperlink not only link to the web page in the same website but also other website
- web application
    - oftern uses interchangably with website
    - key difference: level of interactivity and dynamic content
        - website: more informative (by official), simply views the content that is same to everyone who vist the website
        - web application: more interactive (with user), display based on the user's input and interaction.
            - personalized content, dynamically updated content, a high level of interactivity

#### Developer tools
- Most web browsers come equipped with a set of developer tools that allow developers to inspect their HTML, CSS and Javascript code. Also, to trace http request to the web server, investigate performance issues and review web page security.
- open developer tools in chrome: `fn`+`f12` on keyboard; or right click on the web page and select "inspect"
- different tabs functionality in developer tools
    - `Console`: outputs JavaScript logs and errors from web application
    - `Source`: shows all content resolved for the current page (includes HTML, CSS, JavaScript, images and videos)
    - `Network`: inspect the timeline and details of http requests and responses for the web page
    - `Performance`: shows what the web browser is doing over time, useful if web application is running slow because it is available to pinpoint the functions that takes time
    - `Memory`: displays the parts of code that are consuming the most resources
    - `Element`: to inspect the documents, HTML elements and their properties.
        - when hove over an element in the elements tab, it highlight that element in the browser pane. 
        - On the right side of the panel, there are tabs for inspecting the details of the elements further.
        - This panel shows us what CSS is applied to an element and the result of the element displayed in the browser

#### Frameworks and libraries
- includes key development processes
- to speed up development. (eg. no need to create a new hammar for building the furniture everytime)
- open-source: freely-available for anyone to modify and build from
- proprietary: licensed or developed internally
- key differences
    - libraries: re-usable code, purpose to provide a specific functionality, and to **save time**
    - frameworks: provide a structure for developers to build with. developers provide owen code that the framework interacts with. Frameworks handle functionality that is common to all web applications such as receiving HTTP requests and sending HTTP responses, The developer then adds their own code that implements the functionality of the web application.
- Most frameworks use may libraries, the libraries the framework uses can be used for application. Application can also use other libraries
- Frameworks are considered opinionated and libraries are considered unopinionated depends on the degree of freedom available to the developer to choose how to code a feature
- Frameworks
    - pros:
        - eduve development time
        - enforce a structure on how code is written
        - already have best practice in plave
    - cons:
        - structure constraints
        - compatibility
- Libraries
    - pros:
        - replace libraries as needed
    - cons:
        - selecting library sets
        - compatibility

#### APIs and services
- **API**(Application Programming Interface): a service, application, or interface offering advanced functionality with simple syntax
    - intentionally open to many applications and use cases
    - Browser API / Web API
        - extend the functionality of the browser by adding new services and are designed to simplify complex functions and provide easy syntax for building advanced features
        - DOM APIs: turns the html document into a tree of nodes that are represented as JavaScript objects
        - Grolocation API: returns coordinates of where the browser is located
        - Fetch API: fetching data
        - Canvas API: drawing graphics
        - history API: keeping history
        - web storage API: client side storage
    - REST API (representational state transfer)
        - provides data for popular web and mobile apps
        - web server, a set of principles that help build highly efficient APIs
        - key responsibility: sending and receiving data to and from a centralized database
        - can query own REST API or third party ones
        - are designed to provide ther data backbone for a web client
    - Sendor-Based API
        - the **IoT**(internet of things)
        - actual physical sensors that are interconnected with each other, and communicate through API and track and repond to physical data
- In Software development, APIs are oftern the bridge between different components or systems, like gateway or middleware
- API endpoint
    - uses endpoints to specify how different resources can be accessed
    - built into the URL when accessing the API
    - once the endpoint is hit, the API performs whatever service side processing is needed to build the response
        - two common forms of response: full web page and a data form based on JavaScript called Json

#### What is an IDE?
- **IDE** (Intergrated development environment)
    - one of the main tool, software for building applications
    - syntax highlighting to improve readability for developers
    - error highlighting
    - autocomplete
    - IntelliSense can detect variables and functions and offer them as suggestions during autocomplete
    - refactoring is changing the structure of the code without changing the functionality


[Back to Top↑](#top)



<p id="week2"></p>

## Week 2

<p id="week2_1"></p>

### Getting started with HTML

#### What is Hyper Text Markup Language?
- first web page
    - created in 1999 by Sir Tim Berners-Lee
- **HTML** (Hypertext Markup Language)
    - the frame of the web page
    - Hypertext is text which contains links to other text
    - Markup refers to tags and elements used within a document
    - File extension suffix: `.html`
    - first page that is returned to browser is often called `index.html`
- HTML is a text file with a specific structure consist with tags and elements
    - HTML tags
    - HTML elements
        - opening tag enclosed in angle brackets
            - `<p>`
        - closing tag has a forward slash off to the left angle bracket
            - `</p>`
        - elements can also be empty or self-closing element
            - `<br>`, `<br/>`: line break tag
        - can contain text, and other elements
- HTML standards
    - HTML specification is maintained by W3C (World Wide Web Consortium)
    - current version: HTML5

#### HTML documents
- HTML documents
    - a text document containing simple webpage formatting
    - standard HTML structure
        - starts with `<!DOCTYPE html>` declaration
        - then `<html></html>` tag (HTML root element)
        - inside, two elements `<head></head>` and `<body></body>`
            - head element include the information(metadata, eg. `<title></title>` ) about the HTML documents, not the content.
            - body element can contain heading, paragraphs, images, and videos

#### Simple HTML tags
- Headings 
    - `<h1></h1>` to `<h6></h6>`
- Paragraphs
    - contain text content
    - inside `<p></p>`, putting content on a new line is ignored by the web browser
- Line Breaks
    - `<br>` doesn't need a close tag
- Strong
    - `<strong></strong>` can be used to indicate that a range of text has importance.
- Bold
    - `<b></b>` can be used to draw the reader's attention to a range of text
    - Bold tags should be used to draw attention but not to indicate that something is more important
- Emphasis
    - `<em></em>` can be used to add emphasis to text
    - Emphasis tags stress the text contained in them
- Italics
    - `<i></i>` can be used to offset a range of text
    - Italics represent off-set text and should be used for technical terms, titles, a thought or a phrase from another language
    - By default emphasis and italics tags will have the same visual effect in the web browser. The only difference is the meaning.
- Lists
    - unordered list uses `<ul></ul>` tag
    - ordered list uses `<ol></ol>`
    - List items are specified using the `<li></li>` tag
- Div
    - `<div></div>` content division in HTML
    - acts as a generic container and has no effect on the content unless it is styled by CSS
    - can be nested inside other elements

- Comments
    - `<!-- This is a comment -->`
    - comment will not be displayed in the web browser

#### Linking documents
- Anchor tags: create hyperlinks to link pages together
    - `<a href="path"></a>` 
    - `href`: hypertext reference

#### Adding images to a webpage with HTML
- specify the link to the image file using the image tag, not insert into the web page
- image tag can create a placeholder for the image on the web page
- `<img src="path">`
- specify the dimensions of an image: `width="" height=""`
- short description to help improve accessibility for people using assistive technologies and it can also improve search engine rankings with `alt=""`

#### Use HTML to work with data in tables
- HTML tables
    - allow to organize content in rows and columns neatly
    - table tag for table, table row(tr) tag for rows, table data(td) tags for cell, table header(th) tag for the heading cell
    ```
    <table>
        <tr>
            <th></th>
            <th></th>
        </tr>
        <tr>
            <td></td>
            <td></td>
        </tr>
    </table>
    ```

#### What are forms
- form
    - `<form></form>` form tags
    - optional attribute `action=` which specifies the URL or path that the form should submit the request to, or submit to the original web page
    - when a user enters data on a website an HTML form submits an HTTP request containing the data to the server
    - two HTTP methods to submit the form data, `GET` and `POST`
    - text field, checkboxes, radio and others
- text field
    - for users to enter data
    - `<input type="text", name="">` input tag, not need close tag
    - input tag option, `type="password"` will mask the user's input data
    - `type="sbumit"` will create the button. When the user clicks the submit button, the HTTP request containing the form content will be sent to the web server.
    - `<label for="input-name">label:</label><br>` for add labels above the text field
```
<form action="/registration" method="POST">
    <label for="username">Username:</label><br>
    <input type="text", name="username">

    <label for="password">Password:</label><br>
    <input type="password" />
    <input type="submit" />
</form>
```

- checkboxes
    - input `type="checkbox" name="" value=""`
```
<input type="checkbox" name="dog" value="Dog" />
<label for="dog"> I own a dog</label><br>
<input type="checkbox" name="cat" value="Cat" />
<label for="cat"> I own a cat</label><br>
```

- Radio button
    - input `type="radio"`
    - check one radio button will uncheck all the other radio buttons

- other input types
    - `"number"`, `"email"`, `"file"`

- Textarea
    - sigle line text content in the previous tex field
    - to allow users to enter multiple lines of text
        - `<textarea name="" rows="?"></textarea>`
 - drop-down list switch
    - contains items that the user can select
```
<select name="food">
    <option value="chocolate">Chocolate</option>
    <option value="ice_cream">Ice Cream</option>
</select>
```

#### Introduction to the DOM
- need to interact with objects on the page such as the reaction icons or the comment button
- an HTML document must be represented in a certain way, so that JavaScript code can query and update it
- when web browser receives an HTML page, it constructs a DOM to represent it.
- **DOM** (Document Obkect Model) is simply a tree structure of the objects
    - the DOM has a series of objects each representing a single HTML element
    - root of DOM is that html object and it contains the head and body object, the head obkect houses the title object and title object contains its text object. The body object contains the div objects and so on

- Can use JavaScript to access and modify the DOM to make webpages dynamic.
    - for each element, can access the HTML attributes and content -> update the existing content that is displayed in the web browser
    - can add DOM objects to dynamically add new HTML content to a live web page
    - can add an error message to a form if the user inserts invalid input
    - DOM objects can also be deleted which will remove the corresponding HTML displayed in the browser
- Another mahor use of JavaScript and the DOM is to animate the HTML elements
    - many JavaScript libraries and frameworks rely on the DOM, such as React

#### Web accessibility
- need to build a website in a certain way to improve accessibility
- **W.A.I.** (Web Accessibility Initiative): the power of the Web is in its universality access by everyone rega rdless of disability is an essential aspect
- aims to allow people with disabilities to understand navigate and interact with websites
    - eg. Audio and visual, neurological disabilities and physical and speech disabilities
- W3C Web Accessibilities Initiative(WAI) developed specifications and supporting resources for accessibility, and becomes a requirement in many industries in 2016
    - html properly and follow best practices to support assistive technologies 
- examples
    - screen reader software
    - speech recognition software
    - subtitles and scripts
             



[Back to Top↑](#top)

<p id="week2_2"></p>

### CSS Basics

#### Selecting and styling
- CSS tells the web browser how to display html elements on screen
 - a declaration block starts with a left curly bracket and ends with the matching right curly bracket, between curly brackets are the style declarations
- CSS rule: 5 elements
    1. selector: indicates which html element or elements we want to style.
    2. left bracket
    3. property
    4. value
    5. right bracket 
```
selector {
    property: value;
}
```
- link the `style.css` file to the head element of the html file
    - `<link rel="stylesheet" href="style.css"/>
- CSS has a set of hierarchy rules which dictate which rule will apply to an element

#### Different types of selector
- element selector
    - apply to all `element` elements on the webpage
    - `element {}`
- ID selector
    - the id is unique within a webpage, it allows the developer to select a specific element for styling
    - `#id {}`
- class selector
    - apply to all elements with the specified class name
    - `.class {}`
- element with class selector
    - by first selecting the HTML element, then selecting the CSS class or ID.
    - `element.class {}`
- descendant selectors
    - useful if you need to select HTML elements that are contained within another selector
    - The structure of a descendant selector is a CSS selector, followed by a single space `_` character, followed by another CSS selector.
- child Selectors
    - Child selectors are more specific than descendant selectors. They only select elements that are immediate descendants (children) of a selector (the parent).
    - The structure of the child selector is a CSS selector followed by the child combinator symbol `>` followed by another CSS selector.
- `:hover` Pseudo-Class
    - allows developers to select elements based on their state, This pseudo-class is very useful for creating visual effects based on user interaction.
    - add the :hover pseudo-class to the end of the selector

#### Text and color in CSS
- color: there are five main ways to reference a color
    - RGB value
        - RGB is a color model that adds the colors red (R), green (G) and blue (B) together to create colors. This is based on how the human eye sees colors
        - Each value is defined as a number between 0 and 255, representing the intensity of that color
        - The color black then would be 0,0,0 and the color white 255,255,255
    - RGBA value
        - RGBA is an extension of RGB that add an alpha (A) channel. The alpha channel represents the opacity, or transparency, of the color
    - HSL value
        - HSL is a newer color model defined as Hue (H), Saturation (S) and Lightness (L). The aim of the model is to simplify mental visualization of the color that the value represents
        - The Hue value is the degree value on this circle, from 0 degrees to 360 degrees
        - Saturation is the distance from the center of the circle to its edge. The saturation value is represented by a percentage from 0% to 100% where 0% is the center of the circle and 100% is its edge
        - Lightness is the third element of this color model. Think of it as turning the circle into a 3D cylinder where the bottom of the cylinder is more black and toward the top is more white. Therefore, lightness is the distance from the bottom of the cylinder to the top
    -  hex value and predefined color names
        - Colors can be specified using a hexadecimal value
        - Colors specified using hexadecimal are prefixed with a # symbol followed by the RGB value in hexadecimal format.
    - Predefined color names
        - Modern web browsers support 140 predefined color names. These color names are for convenience purposes and can be mapped to equivalent hex/RGB/HSL values.
- Text
    - text color
        - sets the color of text
    - text font and size
        - Since computers vary in what fonts they have installed, it is recommended to include several fonts when using the `font-family` property. These are specified in a fallback order, meaning that if the first font is not available, it will check for the second font. If none of the fonts are available, it will use the browser's default font.
        - To set the size of the font, the `font-size` property is used.
    - text transformation
        - `text-transform` is for the correct capitalization
        - `uppercase`,  `lowercase`,  `capitalize`  and `none`. The default value used is `none`, which means the text displays as it was written in the HTML document
    - text decoration
        - apply additional decoration to text such as underlining and line-through (strikethrough)
        - together or individually set: `text-decoration-line`, `text-decoration-color`, `text-decoration-style` and `text-decoration-thickness`
        - The most common `text-decoration-line` values used are: `underline`, `overline`, `line-through` and `none`. None is the default value to use no text decoration.
        - There are many styles available for the `text-decoration-style`  property;  `solid`,  `double`,  `dotted`,  `dashed`  and  `wavy`. The text-decoration-style property requires the decoration line to be defined. If the decoration style is not specified, `solid` will be used

#### Box model introduction
- carefully layout, thinking inside the box
- box model in CSS
    - relocates a rectangle or box to each element
    - every box consists of four parts
        - content: the actual content of the element, content size is its width and height
        - padding: which extends the content size, its size is the padding box width and height. thickness of padding depends on `padding-top/left/right/bottom`
            - padding box width is the content width + padding left-size + padding right-side
        - border: goes around the padding and content, border box width and border box height
            - solid border, dashed border, dotted border, double border
            - can be set as `border-width: thin/medium/thick; `
            - an HTML elemnt is equal to the size of the border box
        - margin: extends the border box to separate the element from its neighboring elements
        - shorthand property
            - `Padding/Border-with/Margin: _ _ _ _;`
        - content is myself, the padding is like the thicknedd of clothes, the border is like the silhouette or outline, and the margin is the personal space

#### Document flow - block vs. inline
- document flow
    - The normal way of web browser calculating the position of html elements on the screen.
    - By default, nearly all html elements are organized into one of two categories namely in block and inline elements.
- Block level
    - occupy the full horizontal width of its parent element and the vertical height of its content
    - Each block level element will have a new line before and after. stack on top of each other
    - eg. `div`, `form`, `h1`-`h6`
- Inline level
    - only occupy the width and height of their content
    - multiple inline elements can form a wor of elements
    - eg. `a`, `img`, `input`, `label`, `b`, `i`, `em`, `span`
- use CSS can change elements between block level and inline level
    - `selector {display: inline/block; }`
- `Lauren Ipsum` is placeholder text that has been used since the 1500s

#### Alignment basics (horizontal)
- text alignment
    - `text-align:  left/right/center/justify;`
    - The `justify` alignment spreads the text out so that every line of the text has the same width.
- HTML Element Alignment
    - Aligning an HTML element is done by changing the properties of its box model and how it impacts the document flow
    - Center: set a width on the element and push its margins out to fill the remaining available space of the parent element as in the following HTML structure
        - To align the element to the center, set its margin property to auto. The auto will tell the browser to calculate the margin automatically based on the space available.
        - `.child { width: 50%; }`
    - Left / Right: 
        - float
            - The float property sets an element's position relative to the text content within a parent element. Text will wrap around the element.
        - position
            - The position property has several value options that impact how the element displays in the document flow.


[Back to Top↑](#top)



<p id="week2_3"></p>

### Creating a web page

- 


[Back to Top↑](#top)







<p id="week3"></p>

## Week 3

<p id="week3_1"></p>

### Intro to UI Frameworks and Libraries

#### Working with libraries

- build website from 
    - scratch
    - libraries (others code)
- Bootstrap library
    - add CSS library into HTML `head` by `link` element with `href=""` and `rel="stylesheet"` attributes
    - add JavaScript library to HTML `body` by `script` element with `src=""` attribute 
- button element (demo)
    - attribute `type="button"` 
    - CSS library `class="btn"` with modifier `"btn-primary"` as description to have the primary button color blue
```
<button type="button" class="btn btn-primary">Click this button!</button>
```

- Dependency tree
    - dependencies also depends on other libraries and frameworks
- package manager
    - automatically downloads and installs dependencies(packages)
    - to make sure all team members are using the same version
    - also provides the capability to publish your own packages
    - take care of the dependency tee, automatically download all of the dependency tree so that you can use APIs without dependency issues
- for each dependency, you can specify a version of that dependency and the package manager will download it for you
- most common package manager: Node Package Manager (NPM)
- bundling tool
    - purpose is to automatically combined all files into a single file.
    - if the bundle is significantly large, many bundles can split the dependencies into multiple bundles
        - eg. Gulp, Webpack

#### Introduction to responsive design
- responsice design means that a web page can automatically stretch or shrink depending on the screen scaler
- resolution of the screen refers to the number of pixels it contains
    - a common computer resolution is 1920 px * 1080 px
- screens group multiple physical pixels into one logical pixel to display smoother images and text
    - high-definition visuals
    - smoother text, images and edges
    - individual pixels less visible
- responsive design
    - a set of 3 practices that allows a website to automatically change its visual
        - flexible grids
        - fluid images
        - media queries
    - responds visually
- flexible grids: made up of columns, gutters and margins
    - the space between the columns is called the guuter
    - the spaces between the content and the left and right edges of the screen are called margins
    - are defined in percentage values, allowing them to adjust depending on screen size, not pixels. which increase the flexibility
- Fluid image
    - by setting the CSS max width property of images to 100%
    - images will scle down smaller if ther're containing column becomes narrower than the images size but never grow larger
    - enables an image to scale down to fit in a flexibly sized column rather than flow larger
- media queries, part of CSS
    - allow developer to query the display size, orientation and aspect ratio to conditionally apply CSS rules
    - use a `@media` rule to set different properties depending on the size of the screen
```
@media only screen and (max-width: 700px) {
    selector {
        property: value;
    }
}
```
- pixel value specified is often referred to as the breakpoint
    - the point at which a website's content and layout will adapt to provide the best possible user experience
    - can function indifferent ways across three different grids
        - fixed grid
            - fixed with columns and flexible margins
            - fixed content width that doesn't change in a specific breakpoint range while the flexible margins occupy the remaining space on screen
        - fluid grid (full width grids)
            - fluid with columns and fixed gutters and side margins
            - flexible content width that goes edge to edge as per screen size
            - columns either grow or shrink to adapt to the available space
        - hybrid grid 
            - both fluid width and fixed width components
- Many responsive design frameworks provide multiple CSS rules based on different device sizes to provide the best visual experience

#### Bootstrap
- Bootstrap is a library of CSS and JavaScript code that you can combine to quickly build visually appealing websites.
- Modern web development is all about **components**.
- Another important aspect of modern development is responsive grids which allow web pages to adapt their layout and content depending on the device in which they are viewed. Bootstrap comes with a pre-made set of CSS rules for building a responsive grid.
- Bootstrap is very popular amongst developers as it saves development time and provides a way for developers to build visually appealing prototypes and websites.

#### Getting started with Bootstrap
- Bootstrap
    - a collection of pre-written code chunks in CSS and JavaScript that allows you to create websites more quickly than if you had to create every bit of code from scratch
    -  The first element I add when setting up a Bootstrap website is a **container**, as it is required to be able to use the Bootstrap Grid System.


#### Using Bootstrap styles
- infixes and modifier
    - extra small is the default breakpoint in Bootstrap CSS rules (mobile first)
    - use an infix to indicate the breakpoint in Bootstrap CSS rules.  

| break point | class infix | dimension |
|-|-|-|
| Extra samll | | < 576px |
| Small |sm |≥ 576px|
| Medium | md | ≥ 768px |
| Large | lg| ≥ 992px |
| Extra large |xl| ≥ 1200px|
| Extra extra large | xxl| ≥ 1400px|

- Bootstrap components provide a pre-built set of reusable UI styles and elements for web applications
- modifier
    - Bootstrap modifiers add a CSS class to change the visual style of components
    - `<div class="alert alert-primary" role="alert">a primary alert</div>`
        - the `-primary` part of the class is the modifier, to show in blue
        - use `-danger` modifier, then shows in red
        - eg. `-secondary`, `-success`, `-info`, `warning`, `danger`, `light`, `dark` etc.
        - identify the function of the alert by `role="alert"`
        - Alerts are useful for displaying information, warnings or error messages to users

#### Bootstrap grid
- The bootstrap grid system can create web page layouts through a series of rows and columns that house the content
    - a 12 column grid system that can be fluid or fixed The bootstrap grid system always has a container, rows and columns. The container is the root element of grids.
    - If I want to control how many spaces a column uses, I can suffix a number
    - configure content to use different layouts based on the device using the breakpoint specific CSS rules

#### Bootstrap components
- Bootstrap components
    - pre-made set of UI elements and styles
- Bootstrap comes with a badge component that I can use to highlight
    - `<span class="badge bg-primary">New</span>`
- card component
    - With card elements I can style and accommodate different types of contents like title's subtitle body copy and images for the cards
    - `class="card"`, `class="card-img-top"`, `class="card-title"`, `class="card-body"`

#### Using Bootstrap documentation
- detailed documentation on setting up and using the features available in its library
    - [document](https://getbootstrap.com/docs)
- Navigating the documentation
    - Layout: grid
    - Content: default text styling and how to use responsive images and tables
    - Forms: build forms using Bootstrap's styles
        - form styling

        |Form Element |CSS class|
        |-|-|
        |input|form-control|
        |input type="checkbox"|form-check-input|
        |input type="radio"|form-check-input|
        |input type="range"|form-range|
        |select|form-select|
        - switches
        ```
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox">
        </div>
        ```
        - input-group
        ```
        <div class="input-group">
            <span class="input-group-text">$</span>
            <input type="text" class="form-control">
            <span class="input-group-text">.00</span>
        </div>
        ```
        - floating labels
        ```
        <div class="form-floating">
            <input type="email" class="form-control" id="addressInput" placeholder="Address">
            <label for="addressInput">Address</label>
        </div>
        ```
    - Components

#### Other CSS frameworks and libraries
- Foundation
    - framework for building user interfaces similar to Bootstrap
    - it can be used to style content for sending via email.
- Pure.css
    - library for building user interfaces
    - designed to be minimal in file size
- Tailwind CSS
    -  CSS framework that uses a utility-based approach for its CSS rules
    - provides many CSS classes with a single purpose
    - advantage: more flexible for customizing your webpage's design using the framework
    - disad However, the disadvantage is that if multiple developers are working on a project, it could lead to inconsistent design if the team is not strict on its design rules.
- UIKit
    - lightweight CSS framework featuring a small set of responsive components
    - Its simple design allows developers to easily customize the style rules and visuals.
- MVP.css (Minimal Viable Product)
    - a small CSS library that automatically styles HTML elements without needing to apply CSS classes to them
    - aims to allow a developer to quickly prototype a user interface without worrying about the final design, while still being visually appealing




[Back to Top↑](#top)


<p id="week3_2"></p>

### Introduction to React

#### Static and dynamic content
- static content
    - files(videos, images etc.) the server transered as they are stored in the web server
    - send request to web server, web server respond by sendin gthe file to browser
- dynamic content
    - generated when the HTTP request is made
        - based on input from a user
        - based on the current date
    - send request to webserver, web server communicates with the application server to check, application server confirms and specifies the content should show based on the profile
- web server
- application server (back-end)
    - generates the dynamic content that the web server sends back to the user's browser.
    - more complex processing than web servers
        - run application logic
        - communicate with the database
        - check permissions
- There are application servers for every type of content out there, from music streaming to creating your own blog. You can even create your own application servers, such as building a back-end for a web application.
- Application servers typically have a limited capacity on how many requests they can process per second.
- Web servers use a process called caching instead of generating content dynamically for every request.
    - caching, a saved copy of dynamic content readily available upon request
    - web server check the cache first, if not in cache, go to application server and stored in the cache, then send the dynamic content back to the browser


#### Single page applications
- traditional website
    - before the advent of modern JavaScript frameworks, most are multi-page applications
- SPA
    - user-friendly, mobile-friendly experience
    - only one HTML page that gets sent from the server to the browser
    - the page will update its content as users interact with website
    - allows user to interact with thw website without needing to download entire new web pages, instead, rewrite the current web page 
    - browsing experience faster and more responsive to user input
- two approaches to serving code and resources
    - bundling
        - when the browser requests the application, the server returns and loads all necessary HTML, CSS and JavaScript immediately.
        - if your application is complex and has a lot of resources, your bundles will grow quite large and take a long time to download
    - lazy loading
        - the browser requests the application and the server returns only the minimum HTML, CSS and JavaScript needed to load the application, additional resources are downloaded as required.

 #### What is React
 - React
    - focused on working with components which makes it simple to build functional user interfaces on web and mobile
    - most common Javascript library
    - single page applications and also develop mobile applications with React native
- building an app
    - consider the navigation
    - how the app will request data from a web server
- React is used in conjunction with other JavaScript libraries during development
- React is useful since it allows developers to write less code to create functionality -> easier to maintain code in the long term and simplifies testing
- React components: a small piece of a user interface 
    - allows developing, isolated testing and reuse
- a lot of open source libraries provide premade components for React projects


#### Case Study: Why did Facebook engineers create React?
- React isn’t an MVC(Model-View-Controller) framework.
    - React is a library for building composable user interfaces. It encourages the creation of reusable UI components which present data that changes over time.
- React doesn’t use templates.
    - Traditionally, web application UIs are built using templates or HTML directives. These templates dictate the full set of abstractions that you are allowed to use to build your UI.
    - React approaches building user interfaces differently by breaking them into components. This means React uses a real, full-featured programming language to render views, which we see as an advantage over templates for a few reasons:
        - JavaScript is a flexible, powerful programming language with the ability to build abstractions. This is incredibly important in large applications.
        - By unifying your markup with its corresponding view logic, React can actually make views easier to extend and maintain.
        - By baking an understanding of markup and content into JavaScript, there’s no manual string concatenation and therefore less surface area for XSS vulnerabilities.
- React updates are dead simple.
    - React really shines when your data changes over time.
    - In a traditional JavaScript application, you need to look at what data changed and imperatively make changes to the DOM to keep it up-to-date. Even AngularJS, which provides a declarative interface via directives and data binding requires a linking function to manually update DOM nodes.
    - React takes a different approach.
    - When your component is first initialized, the render method is called, generating a lightweight representation of your view. From that representation, a string of markup is produced and injected into the document. When your data changes, the render method is called again. In order to perform updates as efficiently as possible, we diff the return value from the previous call to render with the new one and generate a minimal set of changes to be applied to the DOM.
    - The data returned from render is neither a string nor a DOM node — it’s a lightweight description of what the DOM should look like.
    - We call this process reconciliation. Check out this jsFiddle to see an example of reconciliation in action.
    - Because this re-render is so fast (around 1ms for TodoMVC), the developer doesn’t need to explicitly specify data bindings. We’ve found this approach makes it easier to build apps.
- HTML is just the beginning.
    - Because React has its own lightweight representation of the document, we can do some pretty cool things with it:
        - Facebook has dynamic charts that render to <canvas> instead of HTML.
        - Instagram is a “single page” web app built entirely with React and Backbone.Router. Designers regularly contribute React code with JSX.
        - We’ve built internal prototypes that run React apps in a web worker and use React to drive native iOS views via an Objective-C bridge.
        - You can run React on the server for SEO, performance, code sharing and overall flexibility.
        - Events behave in a consistent, standards-compliant way in all browsers (including IE8) and automatically use event delegation.

#### How React works
- React - computing the virtual DOM
    - A reality component has a one to one relationship to an HTML element that is displayed on the webpage
    - When React builds out its DOM tree of components, it builds out its own DOM in memory called virtual DOM
    - The virtual DOMis a representation of the browser DOM that is kept in memory. React uses this virtual DOM to update the browser DOM only when it needs to.
    - React checks to see if the HTML components in the virtual DOM match the browser DOM. if doesn't match, change is required, if nothing change, no update performed. This process called **reconciliation**.

#### The Virtual DOM
- reconciliation process
    - Step 1: The virtual DOM is updated.
    - Step 2: The virtual DOM is compared to the previous version of the virtual DOM and checks which elements have changed.
    - Step 3: The changed elements are updated in the browser DOM.
    - Step 4: The displayed webpage updates to match the browser DOM.
- As updating the browser DOM can be a slow operation, this process helps to reduce the number of updates to the browser DOM by only updating when it is necessary.
- But even with this process, if a lot of elements are updated by an event, pushing the update to the browser DOM can still be expensive and cause slow performance in the web application.
- The React team invested many years of research into solving this problem. The outcome of that research is what’s known as the React Fiber Architecture.
- The Fiber Architecture allows React to incrementally render the web page. What this means is that instead of immediately updating the browser DOM with all virtual DOM changes, React can spread the update over time. But what does "over time" mean?
- Imagine a really long web page in the web browser. If the user scrolls to the bottom, the top of the web page is no longer visible. The user then clicks a button on the bottom of the web page that updates some text on the top of the web page.
- But the top of the page isn’t visible. Therefore, why update it immediately?
- Perhaps there is text currently displayed on the bottom of the page that also updates when the button is clicked. Wouldn’t that be a higher priority to update than the non-visible text?
- This is the principle of the React Fiber Architecture. React can optimize when and where updates occur to the browser DOM to significantly improve application performance and responsiveness to user input. Think of it as a priority system. The highest priority changes, the elements visible to the user, are updated first. While lower priority changes, the elements not currently displayed, are updated later.
- While you’re unlikely to interact with the virtual DOM and Fiber Architecture yourself, it’s good to know what’s going on if issues occur during the development of your web application.
- There are many tools available to help you investigate how React is processing your webpage. The official React Developer Tools web browser plugin developed by Meta will be one of the key tools in your developer toolbox. So, if you do have to look deeper into the code, you’ll have the right toolbox available to help you. These tools will be explored later on. 

#### Component hierarchy
- Every React application contains at least one component, the root component or app component
- Components are added to the app component to build out a tree structure of components that make up the application

#### Alternatives to React
- Other JavaScript libraries
    - Lodash
        - Lodash provides common logic such as sort list or round 3.14 to 3 as a utility library to save you time as a developer.
    - Luxon
        - Luxon helps you work with dates and times by providing functions to manipulate and display them. 
        - For example, think of how dates are formatted in different countries. In the United States the format is Month Day Year but in Europe it is Day Month Year. This is one area where Luxon can help you display the date in the user's local format.
    - Redux
        - It helps you manage your application state and even has advanced features such as undo and redo.
    - Axios
        - helps to simplify sending HTTP requests and processing the response. communicating with APIs over HTTP frequently
        - It also provides advanced features allowing you to cancel requests and to change data received from the web server before your application uses the data.
    - Jest
        - helps you to write automated tests for code and works with many libraries and frameworks
        - It also provides reporting utilities such as providing information on how much of your code is tested by your automated tests.



[Back to Top↑](#top)

<p id="week4"></p>

## Week 4

[Back to Top↑](#top)