# CommonJS

Here we introduce you to CommonJS modules - how to create them, export from them, and import them

## A CommonJS Module

* A CommonJS module is a regular JavaScript file
* No more, no less

## Exporting from a CommonJS Module

* To export something, it exports it via `module.exports`, e.g.

```js
module.exports = 4
```

* The above exports the number 4. This is not very common, but could be done

```js
module.exports = (x) => x + 1
```

* The above exports a function. This is very common. What _is_ common is...

```js
module.exports = {
  functionA,
  functionB
}
```

* You can see this in [`people-view.js`](./people-view.js)
* You may also see it like this:

```js
module.exports.functionA = function() {...}
module.exports.functionB = function() {...}
```

* Or even:

```js
exports.functionA = function() {...}
exports.functionB = function() {...}
```

* (Because `exports` is the same as `module.exports`)
* You can see this in [`people-model.js`](./people-model.js)
* But don't do _this_, because it won't work:

```js
exports = {
  functionA,
  functionB
}
```

## Module Scope

* All the other stuff (functions and variables in the top scope) are *not* in global scope, but rather in module scope.

* So if I have two modules with `const x = 0`, they will be different X-es.

## Importing from another module

* To import whatever was exported, we use `require`:

```js
const utils = require('./utils')
```

* If the import was a function, we can just call it. This happens a lot

```js
utils()
```

* And if the import was an object, we can use it:

```js
utils.ajax(...)
```

## Our Code, Refactored

* So we took all our "modules" and made them into real modules.
* Go over the code and show it.

## Using this

* But how do we use these CommonJS modules?
* In NodeJS, where CommonJS was invented, we can just run the code as is (i.e. run `main.js`),
  and it will work, because the `require` function is available in NodeJS and it runs the required module,
  and returns the exported things.
* But browsers don't understand CommonJS.
  When we `<script src>` the `main.js`, the browsers don't understand the `require` function.
  We get an `unknown function 'require'` or something like that.
