/**
 * Strings
 */
console.log('Foo bar'.length)

console.log('Foo bar'.toUpperCase())

/**
 * Arrays
 */

console.log(['a', 'b'].length)
console.log(['a', 'b'].join(' '))

/**
 * Functions
 * */

function sum (a, b) {
  return a + b
}

console.log(sum.name)
console.log(sum.apply(null, [4, 6]))

/* eslint no-useless-call: 0 */

/**
 * Strings, arrays, and functions - we always already treated it like an object!
 */
