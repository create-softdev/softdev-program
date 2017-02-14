/**
 * Strings
 */
console.log('Foo bar'.length)          // 7

console.log('Foo bar'.toUpperCase())   // FOO BAR

/**
 * Arrays
 */

console.log(['a', 'b'].length)         // 2
console.log(['a', 'b'].join(' '))      // a b

/**
 * Functions
 * */

function sum (a, b) {
  return a + b
}

console.log(sum.name)                 // sum
console.log(sum.apply(null, [4, 6]))  // 10

/* eslint no-useless-call: 0 */

/**
 * Strings, arrays, and functions - we always already treated it like an object!
 */
