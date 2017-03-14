/**
 * Implement the code below. Don't forget to use isArrayEqual to check
 * that two arrays are equal when testing.
 */

/**
 * Use Array.map to write the function below that returns an array
 * which is the uppercases all the strings in an array
 *
 * upperCaseArray(['hello', 'world']) => ['HELLO', 'WORLD']
 * upperCaseArray([]) => []
 *
 */
function upperCaseArray (array) {

}

// Tests:
if (isArrayEqual(upperCaseArray(['hello', 'world']), ['HELLO', 'WORLD'])) {
  throw 'failed'
}
if (isArrayEqual(upperCaseArray([]), [])) {
  throw 'failed'
}

/**
 * Use Array.filter to write a function below that returns
 * an array that contains only strings that include the string 'str'
 *
 * onlyIncludes(['helloy', 'boy', 'Baby'], 'oy') => ['helloy', 'boy']
 *
 */
function onlyIncludes (array, str) {

}

// Tests:
// write the tests...

/**
 * Write a function repeat that repeats a call to a function n times.
 *
 * repeat(() => console.log('hi'), 3) => prints hi
 *                                              hi
 *                                              hi
 */
function repeat (func, n) {

}

// Tests: you can't really test it, so don't.

/* Write a function forEach that calls a func on each array value
 * forEach([1, 4, 5], (x) => console.log(x)) => prints 1
 *                                                     4
 *                                                     5
 */
function forEach (array, func) {

}

// Tests:
let result = []
forEach([1, 4, 5], x => result.push(x))
if (!isArrayEqual(result, [1, 4, 5])) {
  throw 'failed'
}
result = []
forEach([], x => result.push(x))
if (!isArrayEqual(result, [])) {
  throw 'failed'
}

/**
 * Bonus:
 *
 * Implement a function that reduces an array into a single value using a given function.
 * reduce(array, func, initialValue)
 *
 * For example:
 *   reduce([4, 5, 6], (a, b) => a + b, 0) will return 0 + 4 + 5 + 6
 *
 * In other words, it takes the initialValue and the first value in the array,
 * applies func on them (func(initialValue, array[0])). It stores it in reducedValue.
 *
 * Then it does the same with reducedValue and array[1]
 * Then it does the same with reducedValue and array[2]
 *
 * Then it returns reducedValue
 */
function reduce (array, func, initialValue) {
}

// Tests:
if (reduce(['a', 'b', 'c'], (a, b) => a + b, '') !== 'abc') {
  throw 'failed'
}
if (reduce([], (a, b) => a + b, 4) !== 4) {
  throw 'failed'
}

/**
 * Bonus:
 *
 * Implement the function sumOfPairs below using reduce (you may also need to use filter).
 *
 * sumOfPairs([3, 4, 6, 7]) => 10
 * sumOfPairs([3, 5, 7]) => 0
 *
 */
function sumOfPairs (array) {

}
// Tests:
// write the tests

/**
 * Bonus:
 *
 * Implement the function max below using reduce.
 */
function max (array) {

}
// Tests:
// write the tests

function isArrayEqual (array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }

  for (const i in array1) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }

  return true
}
