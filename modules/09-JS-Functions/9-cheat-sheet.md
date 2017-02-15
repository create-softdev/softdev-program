# Cheat Sheet for Functions

# Anonymous Functions and Arrow Functions

```js
// anyonymous
function (_parameters_) {
  // statements
}

// arrow function with expression
(_parameters_) => _expression_

// arrow function with statement
(_parameters_) => {
  // statements
}

// examples:
function areaOfCircle(radius) {
  console.log('calculating radius...')
  return Math.PI * radius ** 2
}

(radius) => Math.PI * radius ** 2

(radius) => {
  console.log('calculating radius...')
  return Math.PI * radius ** 2
}
```

# Map and Filter

```js
array.map(_function_) // applies _function_ to each element and returns new array with applied values
array.filter(_function_) // returns new array with only the elements that _function_ returns true on them

// example
[2, 5, 7, 8].filter(x => x % 2 == 0).map(x => x ** 2) // [4, 64]
```

# Callbacks

* setInterval

```js

setInterval(_function_, _milliseconds_) // calls _function_ every milliseconds, forever

// example
setInterval(() => console.log("I'm called every second"), 1000)
```

* setCallback

```js

setCallback(_function_, _milliseconds_) // calls _function_ after milliseconds, once

// example
setInterval(() => console.log("I am called after a second"), 1000)
```
