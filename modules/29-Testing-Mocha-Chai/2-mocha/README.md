# Mocha

We will learn how to test using a wonderful tool named `Mocha`.

## Utils

* But first, let's look at what we're testing - the `src/utils.js` module.
* It exposes three functions: `sum`, `max`, `fill`.
* Definitely typical functions, but how do we know they work?
* We can always test them like we tested earlier:

```js
if (sum([4, 5, 6]) !== 9) throw new Error('Bad test! Bad bad test!')
```

* But that's crazy:
  * You can't mix test code with production code
  * What if the test code is complicated? (and it usually is)
  * What if you want to test two modules in combination? Where do you put the test code.

* So what do we do?
* We use an NPM library named `mocha`

## Mocha

* Mocha is a 'Testing library`
* How do we install it? The usual way - `npm install --save-dev mocha`
* Which means we need a `package.json`, which we can create using `npm init -y`/
* Why `save-dev`? Because it's used only during development. No production code `require`-s it.
* How does one use it? When you install mocha, it installs the command line in `node_modules/.bin`, so...
* `./node_modules/.bin/mocha`
* It will look in the folder `test` and "run" all js files in it.

## Writing a test file

* A test file looks like [this](test/test-utils.js):
  * `describe`: a function that describes a set of tests. Supplied by mocha.
  * `it`: a function that describes a test
  * `expect`: how to test something in a nice way
    * Instead of doing it uglily like in the first test
    * But, in the end, they're the same, except the error you get from 'expect' is
* `expect` comes from another library, called `chai`.
* Install it, as usual, using `npm install --save-dev chai`
* Notice how you import it - require('chai').expect
* The expect library is HUGE. You can find information about all the possibilities [here]
  (http://chaijs.com/api/bdd/)
  * Besides `.equal`, you can use `.deep.equal` to check equality of objects and arrays.
  * Also `.contains(value)` to check for existence of value in array.
  * And you can always say `.to.not....` for negation.
* You calso
* Let's run the tests!

## Running the tests

* To run the tests, we do `./node_modules/.bin/mocha`
* But that gets old pretty quickly, so we add this to `package.json`:

```json
  "scripts": {
    "test": "./node_modules/.bin/mocha"
  }
```

* And run `npm test`!
* Actually, we don't need `./node_modules/.bin` when we're inside an npm script, so we can just do:

```json
  "scripts": {
    "test": "mocha"
  }
````

* And the tests run!

```sh
$ npm test

utils
    sum
      ✓ should return 0 on empty array
      ✓ should return the sum on an array
      ✓ should return the sum on an array of size one
      ✓ should return the sum on an array with negatives
    max
      ✓ should return the minimum number in an array
      ✓ should return the number on an array with only one number
      1) should return the maximum on an array of all negatives
      2) should return NaN on an empty array


  6 passing (16ms)
  2 failing
```

* Oh, my god, 2 tests fail! We have a bug.
* Let's fix the first...
* In the praxis part, you will fix both bugs.

## The Limititations of Unit Tests

* Not everything can be tested this way.
  * These tests run under _node_, not under the browser.
  * So no XHR. No HTML, DOM, or CSS. Just Pure JavaScript.
  * This is why developers love to keep their code pure of stuff like DOM and XHR -
    so they'll be able to test it easily.
* There are ways to test browser code, but this is out of scope of this module.
