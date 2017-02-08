Mission
=======

Implement a navigation bar. The template can be found in the exercise file.

All that needs to be done is to implement the function 'buildNavigation'
in the exercise file to take a navigation definition (a sample is given in the exercise file)
and build a dynamic navigation bar taht shows the top level menu items.
Each top-level item either links to an href,
or has children that are toggled when it is clicked on.

Make it simple - it's OK for two top-level items to be visible at the same time.
Just deal With creating all the nodes of the nav bar,
and using hide/show in CSS to hide/show the relevant submenu items

Don't use event delegation. Each element will have their own event handler.

Bonus
-----

- Implement more than two-levels of hierarchy
- When opening one sub-menu, close any sub-menus already opened.
