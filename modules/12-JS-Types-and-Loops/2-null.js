function findItem (array, func) {
  for (const item of array) {
    if (func(item)) {
      return item
    }
  }

  return null
}

let foo

console.log(findItem([4, 5, 6], (n) => n > 5))    // 6
console.log(findItem([4, 5, 6], (n) => n > 7))    // null
console.log(typeof null)                          // object
console.log(foo)                                  // undefined

/**
 * null is a special value that denotes a missing value.
 * typeof null is an object.
 *
 * What is the difference between return null and returning undefined?
 * a variable with no value has an 'undefined' value.
 * null can only be set/returned programatically, and denotes a missing value.
 *
 * But undefined also denotes a missing value.
 *
 * So what should you use? I dunno. I try and use undefined and ignore null!
 * But some apis return null, like document.getElementById.
 *
 * And it's the only (!) place to use == or !=:
 * if (x == null) // checks for null or undefined.
 */
