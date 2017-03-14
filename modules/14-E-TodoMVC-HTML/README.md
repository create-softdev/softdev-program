# Mission

We'll start writing the [TodoMVC application](http://todomvc.com/). We'll not go all the way today, but
we're starting it today!

## Things to learn

* list-style-type: none; - ST
* list-style-position: inside; - ST

## Requirements

* Build the TodoMVC to look nice (see [screenshot](../more/todomvc-screenshot.png))
* Writing something in the new item box, and leaving it will create a new item.
* Clicking on the checkbox will toggle the item's strikethrough
* Clicking on the delete button of an item will delete the item
* Clicking on the "check all" button (next to the new item input) will check all items
* The "2 items left" will show how many items are not done

## Steps

1. Start by building the HTML only. A static one just like the screenshot - no JS.
   1. Build the HTML in a semantic way. ul/li-s for the items, checkbox for the done, and buttons for the various
      actions.
   1. Define the rule `* {padding: 0; margin: 0;}` to begin the styling.
   1. Kill the list bullets.
   1. Start with the font - use a nice sans-serif font from Google Fonts, and define the correct sizes
   1. Now define margins/paddings between the elements
   1. Next do the borders and the drop-shadow.
1. Then start implementing the other requirements. Don't try to do them all at the same time - do them
   one by one. Define a listener for the action triggerer, and in the code do what needs to be done.
1. One by one go over the requirements, and use the DOM manipulation things you learned to manipulate the DOM
   according to the action.


## Bonus

* Add the filtering capability from the original [TodoMVC](http://todomvc.com/).
