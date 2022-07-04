### HTML (Hypertext Markup Language)



##### Lecture 1 What is HTML?
- HTML
	- Annnotates content
	- Defines document structure

- Right and wrong syntax
- 3 **core** WEB technologies  
	- HTML -> Structure
	- CSS -> Style
	- Javascript -> Behavior
- The **core** purpose of HTML is to communicate the structure of the content 



##### Lecture 2 Relevant History of HTML
- website
	- caniuse
	- markup validation service
	- w3schools browser statistics

- W3C (World Wide Web Consortium) is one of the organization that dictates what and how browsers should implement HTML5
- WHATWG does NOT version HTML. For them, it's **NOT** HTML5. It's just HTML because they are constantly innovating.

  

##### Lecture 3 Anatomy of an HTML Tag
- **opening tag(attribute name&value), content,** closing tag(not all)
- tag -> element name
	- p: paragraph (o+c)
	- br: line break (o)
	- hr: horizontal rule (o)
- space
	- no space allowed between the opening bracket and tag name/foreward flash of closing tag.
	- at least one space between the tag itself and its attribute.
	- space is allowed everywhere else and will be ignored.
- quote
	- better to quote the attribute value in single or double quotes
	- quote in attribute value: start and end with the same one

- self closing tag
	- shorthand notation for tag that does not have any content
	- in HTML5, if the tag may have content in future, it still need opening and closing tag and no space between for semantic reason.

- **ALL** HTML5 tags must have an opening tag

##### Lecture 4 Basic HTML Document Structure
- nesting tag to another: close the last opened tag before you close its parent tag. or it will be invalidate

- start with `<!doctype html>`
	- signal to browser to treat page
	- to distinguish noncompliant(quirks mode) and compliant(standard mode) pages in the past, standard if we have it
	- doesn't matter capital or not
- `<html></html>` contains the entire html document
- `<head></head>` contains items that describe the main content of the page: character coding, author, title, meta(stand alone tag) etc.
	- `<meta charset="utf-8">` Meta tags communicate information TO THE BROWSER
	- `<title>`TITLE`</title>`
- `<body></body>` root of all content that is visible to user
- sequential (top to bottom) rendering
- Quirks Mode is when the browser assumes that the HTML in the web page is NOT following the HTML standard, i.e., not in standards mode. Styles won't work correctly, etc.
```
<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Title!!!!</title>
</head>
<body>
BODY PART
</body>
</html>
```

##### Lecture 5 HTML Content Models
- tradition
	-  block-level elements
		- render to begin on a new line by default
		- may contain inline or other block-level elements
		
		- roughly flow content (HTML5 category)
		- `<address><article><aside><blockquote><canvas><dd><div><dl><dt><fieldset><figcaption><figure><footer><form><h1>-<h6><header><hr><li><main><nav><noscript><ol><p><pre><section><table><tfoot><ul><video>`


	- inline elements
		- render on the same line by default
		
		- may only contain other inline elements
		- roughly phrasing content (HTML5 category)
		- `<a><abbr><acronym><b><bdo><big><br><button><cite><code><dfn><em><i><img><input><kbd><label><map><object><output><q><samp><script><select><small><span><strong><sub><sup><textarea><time><tt><var>`
	- remains practical because it aligns well with existing CSS rules
	- `<div></div>` stands for division, most generic block-level element
	- `<span></span>` stands for span, super generic inline element
	- span and div could exist separately, span could inside div but not the other way opposite.

- HTML5 -> 7 types
	- Metadata content


	- Flow content
	- Sectioning content
	- Heading content
	- Phrasing content
	- Embedded content 
	- Interactive content
	- ![[Pasted image 20220703165049.png]]


##### Lecture 6 Heading Elements
- Semantic html element -> element that implies some meaning to the content
- Heading
	- <h1>h1</h1> ...↓<h6>h6</h6>
	- related to the search engine optimization(SEO)
- Semantic elements
	- `<header></header>` header information (logo, tag line, navigation etc.)
	
	- `<nav></nav>`navigation elements
	- `<section></section>`
	- `<article></article>`
	- `<aside></aside>` information that relates to the main topic(eg. related posts)
	- `<footer></footer>`footer, copyrights

- Semantic HTML tags may help the SEO ranking of the page, help computers and humans better understand the structure of the page


##### Lecture 7 Lists
- Lists
	- group related contents
	
	- `<ul></ul>`unordered list (bullet)
		-  `<ul><li>item1</li><li>item2</li></ul>`
	- `<li></li>`list items
		- list inside list needs `<li><ul><li>small item1</li><li>small item2</li></ul></li>`
	- `<ol></ol>`ordered list (number)


##### Lecture 8 HTML Character Entity References
- HTML entities 
	- help avoid rendering issues
	- safeguard against more limited character encoding
	- provide characters not available on keyboard
- HTML OR content
- 3 most important
- 
| instead of | use(as content) |
| - | - |
| `<` | `&lt;` |
| `>` | `&gt;` |
| `&` | `&amp;` |
`&copy;`-> &copy;
`&nbsp;` -> no breaking space (so it will wrap together all the time)
`&quot;` -> "

##### Lecture 9 Creating Links
- Internal links
	- `href` -> hypertext reference, could be relative/absolute URL
	
	- `<a href="same-directory.html" title="same dir link"></a>` ->current URL/same-directory.html
	- `<a href="" title=""><div>DIV</div></a>`

- external link
	- `<a href="http://www.xxxx" target="" title="">SOME NAME</a>`
	
	- hosted on a different domain name than the website
	- `target="_blank"` forces the browser to open this page in a new tab or a new window

- fragment identifier (link to section of document)
	- `<a href="#section1">#section1</a>` points to the section in this page with id `<section id="section1"` or anchor tag`<a name="section1">(#section1) Section 1</a>`
	
	- `<h1 id="top">H1</h1>` and `<a href="#top">BACK TO TOP</a>`

##### Lecture 10 Displaying Images
- comments in HTML: `<!-- COMMENTS -->`
- image
	- `<img src="url/jpg" width="" height="" alt="Picture with a quote"` inline element
	- width/height is for the browser to reserve space, better to have it, or the image will be jumpy under slow network

- chrome developer tools
	- mac: option+command+I ->network tab -> throttling setting