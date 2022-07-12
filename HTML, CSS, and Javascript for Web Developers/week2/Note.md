### CSS3（Cascading Style Sheets）

##### Lecture 11 Power of CSS
- color, positioning, size...to style the content for the users' experiences.

- styling capability
- csszengarden.com

##### Lecture 12 Anatomy of a CSS Rule
- Selector -> tag
- Deckaration (zero or more)
	- Property

	- value
- stylesheet: a collection of CSS rules
- CSS allows to have more than 1 property/value pair per each CSS rule
```
<style>
Selector{
	property: value;
}
</style>
```


##### Lecture 13 Element, Class, and ID Selectors
- browser uses its selector API to tracerse the DOM document object model, and pick out the elements matching the selector.

- determine HTML elements to apply the CSS declaration to.
- Selector
	- element selector
		- `element_name{}`
		
		- all the elements with `element_name` will apply the same style
	- class selector
		- `.class_name{}`
		
		- all the element with the attribute `class="class_name"` will apply the same style
	- id selector
		- `#id_name{}`
		- all the element with the attribute `id="id_name"`will apply the same style
	- grouping selectors
		- `selector1, selector2`separate selectors with commas, then the elements satisfy with one of these selectors apply the style.
	- id has the lowest reuseble rate
	- A CSS rule can be applied to several selector at a time.
	- A CSS rule doesn't have to be defined separately for each selector


##### Lecture 14 Combining Selectors
- target the elements more precisely, not limited to element selectors
	- `selector1selector2`
		- selectors followed each other without space, means satisfy both selectors will apply the same style

	- `selector1 > selector2`(direct selector)
		- every selector2 that is a direct child of selector1 such that 
		- ```
		<selector1>
			<selector2></selector2>
		</selector1>```
	- `selector1 selector2`(descendent selector)
		- every selector2 this is inside (at any level) of selector1
	- `selector1 + selector2`(adjacent sibling selector)
	- `selector1 ~ selector2`(general sibling selector)
	
	
	
##### Lecture 15 Pseudo-class selectors
- Pseudo-class selectors target simple combinations of regular selectors, or the ability to style based on user interaction with the page.
- `selector:pseudo-class{...}`
	- `:link`(the link)
	
	- `:visted`(after click the specific link)
	- `:hover`(when user hovers over the element)
	- `:active`(when click the element but hasn't release the click)
	- `:nth-child(...)`(target a particular element within a list)
- simple/readable > complicated/tricky


##### Lecture 16 Style Placement
- the place of style affect how reusable the styles are, also affects which style declarations override other style declarations.

	- head styles: inside the `<head>`
	
	- Inline styling: directly in the elements with `style="xxx:xxx;"`attribute (better not to use, only use this in quick testing)
	- external style sheet: insiede`<head>`,`<link rel="stylesheet" href="style.css">` where `style.css`is in the same directory as the html file (use in real sites)
	- head styles are usually there to override external ones


##### Lecture 17 Conflict Resolution
- Cascade

	- Origin precedence
		- Last Declaration Wins (Since it reads sequential)
	
	- Merger (when no conflict)
	- Inheritance
		- DOM tree, inherit from the parents, grand-parents etc.
	- specificity (score)
		- Most specific selector combination wins
			- `style=""`, `ID`, `class, pseudo-class, attribute`, `# of elements` for a four digit score. the higher one wins
			- `!important` in the style will override everything (don't abuse or it will become nightmare)

##### Part 18 Styling Text
- `font-family` usually not only one font since relying on users' computer (common: serif, sans-serif)

- `color` # 6digits hexadecimal value(red2+green2+blue2)
- `font-style`(italic, normal etc.)
- `font-weight`(number or bold, etc.)
- `font-size` (number+px, percentage+% as the default, number+em as number times sizes) cumulative effect， not override
- `text-transform`(uppercase etc.)
- `text-align`(center etc.)


##### Lecture 19 The Box Model

- (weigth, height) > margin > border > padding > content
- In the elements / in stylesheet

	- `margin:`
	
	- `padding:`(for 4 directions)
	- `background-color:`
	- `border:` (5px solid blaock etc.)
	- `box-sizing: border-box`(the border and padding are includes in the width in this situation.) NOT INHERITED

		- `* { box-sizing: border-box}` (universal selector) * means apply these particular CSS properties to all the elements
	- box (left and right) the margin between them will be cumulative
	- box (top and bottom) the margin will collapse and the larger margin wins
	- `overflow:` avoid spill out from the box (spill may happen when the box's width and height is not enough for the content)
		- `auto`: the scroll bar will be in the box
		
		- `visible` can see the spill content
		- `hidden` cannot see the spill content

##### Lecture 20 The background property
- individual

	- `background-color:`

	- `background-image: url(xxx.png)` the url has to relative to the css file, the image is above the colorthe image will repeat
	- `background-repeat:` no repeat, repeat in one direction etc.
	- `background-position:`

- combined
	- `background: url() no-repeat position` will override the single property

##### Lecture 21 Positioning elements by floating
- `float: top/left/right;` when some elements float, the browser takes them out of the regular document flow
- the float elements' margin never collapse
- `clear: left/right/both;` nothing allowed to flow in that direction of this elements

- two column: `width: 50%`
- no floating if the elements have border

##### Lecture 22 Relative and absolute element positioning
- static positioning: normal document flow. Default for all, except html.
	- positioning offsets are ignored

- `position: relative;` relative positioning
	- element is positioned relative to its position in normal document flow
		- top, bottom, left, right 
		- elemnt is **not** taken out of normal document flow, even if moved, its original spot is preserved

- absolute positioning
	- all offsets are relative to the position of the nearest ancestoe which has positioning set on it, other than static
		- by default, html is the only element that has non-static positioning set on it(relative)
		
		- element is taken out of normal document flow

- if container element is offset, everything inside is offset with it

- HTML is default relative

##### Lecture 23 Media queries

- media queries allow to group styles together and target them to devices based on some citeria
- `@media (media feature) { style }` can have more than one combine together using logical operators
	- media feature: resolves to true or false. `max-width, min-width, orientation, screen, print etc.`
		- True: style in curly braces apply
	
	- common logical operators
		- `and`, `,`(OR)

	- clean separate boundaries
- The usual approach to using media queries is to provide some base styling and then change and/or add to them within each media query.

##### Lecture 24 Responsive design
- desktop browser / mobile devices

- responsive web site
	- site designed to adapt its layout to the viewing environment by using fluid, proportion-based grids, flexible images, and CSS3 media queries

		- site's layout adapts to the size of the device
	
		- content verbosity or its visual delivery may change


- alternative to responsive design
	- server detects user-agent (ie, m for mobile and www for desktop in browser)

 - 12-column grid responsive layout
	 - 1, 2, 3, 4, 6, 12


	 - use percentage to achieve fluid width

- `<meta name="viewpoint" content="width=device-width, initial-scale=1">` in `<head>` means it will not scale anything. or the default is 0.4

##### Lecture 25 Introduction to Twittwe bootstrap
- Bootstrap is the most popular HTML, CSS and JS framework for developing responsive, mobile first projects on the web
	- mobile first == plan mobile from the start


	- css framework is mobile ready

- disadvantages of bootstrap (vs. writing own): complaint - too big too bloated, a lot of features that may never use
			- selective download
			- write own that's more targeted/smaller
				- need a lot of time 


##### Lecture 26 The Bootstrap grid system
- the grid must be inside container (or container-fluid)
- the row class creates horizontal groups of columns, apllies negative left/reight margins![[Pasted image 20220712140314.png]]
- the column in Bootstrap is defined using template `col-SIZE-SPAN`

	- size is the screen width range identifier, columns will collapse below that width unless another rule applies


	- span is how many columns element should span, value from 1 through 12
	- if no other rules apply, specifyinf col-xs-... will keep that layout nomather what the size of the screen
- regular container class has predetermined fixed width that is still responsive based on the width of the broswer
