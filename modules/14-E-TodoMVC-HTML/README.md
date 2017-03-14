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

Bonus:

* Clicking on the "check all" button (next to the new item input) will check all items
* The "2 items left" will show how many items are not done

## Steps

### Build the HTML

1. Start by building the HTML only. A static one just like the screenshot - no JS.
1. Build the HTML in a semantic way. ul/li-s for the items, checkbox for the done, and buttons for the various
   actions.
   * Use `&times;` in the delete button, and it will be nicer than using an `x`.
1. Define the rule `* {padding: 0; margin: 0;}` to begin the styling.
1. Kill the list bullets. How? Use CSS properties `list-style-type: none` and `list-style-position:none`,
   on the `li`-s.
1. Now define margins/paddings between the elements
1. Next do the borders and the drop-shadow.
1. You can implement the requirement where clicking on the checkbox makes the item strikethrough by
   using the checkbox trick we learned.
1. Finally, deal with the font - use a nice sans-serif font from Google Fonts, and define the correct sizes

You're on your way to making it work. Don't forget to breath, commit, and push.

### Build the JavaScript

Start implementing the other requirements. Don't try to do them all at the same time - do them
one by one.

#### Adding a Todo

1. Create a function that receives the text of the todo, creates the DOM elements (`li` and downard)
   (just like the ones you created in the "Build the HTML" approach), and appends them to the `ul`.
1. Try this function by calling it from the console of the browser. Check till it works.
1. Add an event listener for `keyup` and check if the key
   is enter. If it is, `console.log` something - just to see that it works.
1. In the same place, `console.log` the input text, to see that you can reach the input.
1. Now call this function instead of doing the `console.log`, passing it the text from the input.
1. It should work!

Add works! The rest is easier, don't worry. And don't forget to breath, commit, and push.

#### Deleting a Todo

1. Add an event listener to all the close buttons. Clicking on it will `console.log` something. Check that it works
1. Now, instead of `console.log`, using `element.closest` to get at the parent `li`,
   and `console.log` the `li`. Check that it works.
1. You've got the `li`. You only need to `li.remove` it now!

Delete works!

## Bonus

* Clicking on the "check all" button (next to the new item input) will check all items
* The "2 items left" will show how many items are not done
