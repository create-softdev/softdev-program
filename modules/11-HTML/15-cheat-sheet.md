# Cheat Sheet for HTML

## Structure of an HTML Document

### HTML Document Structure

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>...</title>
</head>
<body>
  ...
</body>
</html>
```

### HTML Entities

* Some characters in HTML cannot be written regularly, and are written using HTML entities.
* **HTML Entity**: `&....;`
* **`&nbsp;`**: non-breaking space
* **`&amp;`**: ampersand
* **`&lt;`**: less-than
* **`&copy;`**: copyright

### Whitespace

* Whitespace between inline elements is squashed to one whitespace
* Whitespace between block elements is ignored

## Block Elements

* **headings**: `h1`, `h2`, ...

```html
<h1>This is a big heading</h1>
<h2>This is a smaller heading</h2>
```

* **paragraph**: `p`

```html
<p>This is a paragraph</p>
<p>This is another paragraph</p>
```

* **generic block element**: `div`

```html
<div>This is a generic block element</div>
<div>This is another generic block element</div>
```

* **lists**: `ul`, `ol`, `li`

```html
<h1>Shopping List</h1>
<ul>
  <li>Flour</li>
  <li>Vanilla Flavor</li>
  <li>Chocolate</li>
</ul>

<h1>Recipe</h1>
<ol>
  <li>Mix flour and water</li>
  <li>Add vanilla and chocolate</li>
  <li>Insert into oven</li>
</ol>
</h1>
```

## Inline Elements

* **Bold**: `<strong>...</strong>`
* **Italics**: `<em>...</em>`
* **Links**: `<a href="url">text</a>`
* **Images**: `<img src="url">`

## Form Elements

* **Text field**: `<input type="text" value="initial-value">`
* **button**:
  * `<button>Text in button</button>`
  * `<input type="button" value="Text in button">`
