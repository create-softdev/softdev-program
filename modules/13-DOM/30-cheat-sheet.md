# Cheat Sheet for DOM

## Finding elements

* The best way!

* **document.querySelector(_cssSelector_)**: find the first element with this `_css_selector_`
* **_element_.querySelector(_cssSelector_)**: find the first element _underneath_ the `element`
* **document.querySelectorAll(_cssSelector_)**: find the list of elements with this `_css_selector_`.
  the result is array-like.
* **_element_.querySelectorAll(_cssSelector_)**: find the list of elements _underneath_ the `element`.
  the result is array-like.

* Other ways

* **document.getElementById(_id_)**: find the element with the id
* **document.getElementsByClassName(_className_)**: find the list of elements with the class _className_
* **document.getElementsByTagName(_tagName_)**: find the list of elements with the tag _tagName_

## Getting and setting element attributes

* **_element_._attributeName_ [= _value_]**: get or set attribute, as if the DOM was a JS object.
* **_element_.[_attributeName_] [= _value_]**: get or set attribute by string.
* **_element_.getAttribute(_attributeName_)**: get attribute via string.
* **_element_.setAttribute(_attributeName_, _value_)**: get attribute via string.

The three ways to get/set are _almost_ identical, but there are exceptions:

* To get the class, use _element_.className, but use _element_.getAttribute('class').
* To get an attribute with '-', you can only use `get/setAttribute`

## Getting/Setting Element content or HTML

* **_element_.textContent [= _text_]**: get/set the text of an element.
* **_element_.innerHTML [= _html_text_]**: get/set the HTML of the element.


## Creating Elements and Text Nodes

* **document.createElement(_elementTag_)**: creates an element with the tag _elementTag_
* **document.createTextNode(_text_)**: creates a text node with the text _text_

## Adding Nodes

* **_element_.appendChild(_element_)**: adds the element as the last child of the _element_
* **_parentElement_.insertBefore(_newElement_, _beforeThisElement_)**:
  inserts the _newElement_ before the _beforeThisElement_. But you have to pass the _parentElement_!

## Remove a Nodes

* **_element_.remove()**: removes the element from its _parentElement_

## Handling Events

* **_element_.addEventListener(_event_, (event) => { ... })**: will call the function given when
  the event _event_ happens on the element, *or one of its children*. The `event` parameter has
  the following fields:
  * `target`: the element that received the event. This is not necessarily the _element_ that
    `addEventListener` was called on.
  * `stopPropagation()`: if you call this method, the event will not bubble up to the parent.
  * `preventDefault()`: if you call this method, the event will not do the default behavior of
    the browser.

## Navigating Nodes

* Up:
  * **_element_.parentNode**: the parentNode of the element
  * **_element_.closest(_cssSelector_)**: the first ancestor node that conforms to the CSS selector
* Down:
  * **_element_.querySelector(_cssSelector_)**: find the first element the `element`
    that conforms to the CSS selector.
  * **_element_.querySelectorAll(_cssSelector_)**: find the list of elements _underneath_ the `element`.
    the result is array-like.
