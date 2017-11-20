# coookie-stand
Lab for class 6!


## User Stories (MVP)
 - As a user, I want a webpage that displays individual store data for my Salmon Cookie Shops, so that I can be informed about how to run my business
 - As a developer, I want to represent the store data in a list format on the webpage, so my client can view the information
 - As a developer, I want to use object-oriented programming to build this site, so that the site will be more effective and the code will be easier to read and understand

## Technical Requirements
 - New repository properly set up with a license and README, and cloned to local machine
 - Working on a non-master branch, with regular commit history
 - Good use of Object Literals **(no constructors allowed today)**; one for each store model; properties/values and methods are correctly constructed and given meaningful names
 - Main page meets requirements of the problem domain
 - Stores are correctly rendering as lists to the main page

## User Stories (Stretch... only after completing everything above)
 - As a developer, I want to make some headway on the public-facing page for the business
 
 ## Implement a Constructor Function

In class, we learned how to refactor a group of object literals by using a constructor function and creating instances.

Let's replace your object literals for the salmon cookie stands with a single constructor function that, when called with 'new', creates new instances.

Your code will end up with probably 1/4 the number of lines it had before refactoring, and every line of code you don't have is one you don't need to debug!

See pages 106-109 in your textbook for a constructor example... and especially focus on 108 and 109. Also refer to the demo code from class that showed how we can view a constructor function as a translation of an object literal.

## Replace the Lists with a Table

We will also be replacing the lists of data for each store, and building a **single table of data** instead! Tables are much easier to read than lists, and presenting data in a table makes analysis more intuitive and comprehensive.

What numbers should go into a table? Your client, Pat, has reviewed the lists of data you dutifully provided yesterday, and has decided that's actually not the best way to view the information. Here's what Jo wants:

- A table to show the total amount of projected cookie needs at each location, with the table displaying the cookie stand location, the total number of cookies needed for each location, an hourly breakdown of total cookies sales for each location, and [STRETCH GOAL] a row of totals for each column.
- Here's what it should look like, in general (this example is for structural and layout purposes only, since you can style the table however you want):

### Cookies Needed By Location Each Day

|                | 6:00am | 7:00am | 8:00am | 9:00am | 10:00am | 11:00am | 12:00pm | 1:00pm | 2:00pm | 3:00pm | 4:00pm | 5:00pm | 6:00pm | 7:00pm | Daily Location Total
|------------------------|-------|--------|--------|--------|--------|---------|---------|---------|--------|--------|--------|--------|--------|--------|--------|
| 1st and Pike      |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| SeaTac Airport           |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Seattle Center |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Capitol Hill       |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Alki        |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Totals                 |       |        |        |        |        |         |         |         |        |        |        |        |        |        |


## User Stories (MVP)
- As a developer, I want to implement a constructor function, so that I can reuse code and eliminate much of the duplication in my JavaScript
- As a user, I want cookie sales data represented in tables rather than lists

## Technical Requirements
- Good use of a constructor function; style and syntax are correctly implemented
- Each cookie stand location should have a separate render() method that creates and appends its row to the table
- The header row and footer row are each created in their own stand-alone function
- Duplicate code has been removed and DRY principles are evident
- Working on a non-master branch for the day, with regular commit history. Basically, every time you get something to work, you should do a commit. But you only need to push every couple of hours or so, tops.

## User Stories (Stretch... NOT REQUIRED)
- As a developer, I will continue to work on design aspects of the public-facing page.
- As a developer, to facilitate design work, I will build a style guide.
- As a developer, to demonstrate to my client my ability to add value, I will create a second table that will help Jo manage staffing. Using the basic rubric that single Salmon Cookie Tosser can serve 20 customers per hour, and that each location should have a minimum of two Salmon Cookie Tossers on shift at all times, calculate how many Salmon Cookie Tossers are needed at each location each hour.

## Instructions

Here's some of the steps you'll need to take, but not necessarily in this order:

- Add the necessary HTML to create the input form.
- Don't forget \<fieldset>!
- Use the constructor function as your guide to determine what input fields your form needs (hint: also consider what is passed in when creating instances!)
- Your JS will need an event listener and and event handler, and also a variable to facilitate DOM access to the form.
- As we saw in class, the event handler should use the take the data from the input field, pass it into the constructor function, and create a new instance of a cookie stand that then appends to the table.
- Are you going to do any error correction on input? You probably should. Look at what kind of input validation is built in to HTML5.
- Build incrementally. Test frequently.
- Be attentive to overall code structure.
- This is a good point to refactor your code into smaller functions/methods if you have some huge functions going on. Remember that each function should do one thing, and then you can compose more complex behavior out of functions.
- Anywhere you have repeated chunks of code, maybe you can start to apply some DRY principles. Generally, once some chunk of code is appearing for a 3rd time or so, that's when you want to consider refactoring.
- When making code more DRY, look for repeated behaviors that act on different pieces of data. Put the behavior into a function that is declared with parameters to receive the unique data, and then replace the repeated code with the function called with the unique data in arguments.

## Instructions

Continue working on the functionality of your **sales.html** page if you do not have it working 100% yet, including the row of totals across the bottom.

Here's your other tasks for today:

- Style up the public facing page (**index.html**) to make it appealing to customers. NOTE: You **must** use all of the images in the adjacent asset directory. Your client insists that you use Every. Single. One.
- Your public-facing **index.html** page should have all of the things you'd expect such a page to have for such a business: locations with addresses, hours open, contact information, and so us. Just do mockups of these things since this is not a real business, of course.
- You can also mock up references (either links or little sections on the **index.html** page) for things like About Us (company history and mission), Merchandise (sales of t-shirts, mugs, stickers, etc.), links to salmon events like the Salmon Days in Issaquah, etc. 

- Apply a similar style to the **sales.html** page.

## Stretch Goals (Not required! Do either one, both, or neither)

- Give your input form functionality to update the data for a location that is already in the table. This is going to require some additional pieces, such as:
	- Some kind of `if` statement to test whether the inputted cookie stand location name matches one that is already in the table (or other mechanism to indicate which location to update)
	- The new input numbers need to be run through the calculation methods as with the original creation of the instances

- Make a style guide, using [this one that a team another instructor was on made for Everlast](http://everlast.com/style-guide) as a model.

- Make two additional pages:
	- Mock up an order form that would be public facing (**store.html**) so that visitors to the website can order salmon cookies and swag. That form would need to receive all of the things you'd expect on an order form: name, address, payment info, products to order, quantities, special instructions, and so on.
	- A second 'private' page (**order-processing.html**) that shows a list of pending orders and the individual order details. The business owner can then process the orders by clicking a button next to the order that then moves that list item to a 'Filled Orders' list at the bottom of the page.
