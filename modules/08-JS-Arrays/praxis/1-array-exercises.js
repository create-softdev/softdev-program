/**
 * Implement the functions below. Don't forget to write tests.
 * Don't forget to use isArrayEqual to check
 * that two arrays are equal when testing.
 */

/**
 * Returns the sum of an array.
 *
 * Hint:
 *
 * 1. iterate over the values of the array.
 * 2. In the body, print them, just so you can see that the iteration gives you the right value.
 * 3. Now how do we sum the array? We need a variable, that is an accumulator, which will accumulate
 *    the sum. Define it outside the loop, and initialize it with a 0 value.
 * 4. Now in the loop, add the "current value" in the array to the accumulator value.
 * 5. You can print the accumulator in the loop, to see it growing
 * 6. You're almost done! You just need to return the value of the accumulator.
 *
 * sum([4, 5, 6]) => 15
 * sum([]) => 0
 */
function sum (array) {

}

// Tests:
if (sum([4, 5, 6]) !== 15) {
  throw 'failed'
}
if (sum([]) !== 0) {
  throw 'failed'
}

/**
 * Returns the average of an array. Use sum function above.
 *
 * Hint: average = sum / length-of-array
 *
 * average([4, 5, 6]) => 5
 * average([4]) => 4
 * average([]) => 0
 */
function average (array) {

}

// Tests:
// write the tests...

/**
 * Checks whether the item is in the array (using ===).
 *
 * Hint:
 * 1. loop over the array values.
 * 2. print each value, to see that your loop is OK.
 * 3. For each value in the array, check if it's equal to the `item`. If it is, also print that it is.
 * 4. If it is, you found your value, and you can return true.
 * 5. If the loop ended without returning, then * the value was not found, and it can return true.
 * 6. Now remove all those console.logs you used for debugging.
 *
 * includes([4, 5, 6], 7) ==> false
 * includes([4, 7, 5, 6], 7) ==> true
 * includes([], 7) ==> false
 *
 * Do not use Array.includes
 */
function includes (array, item) {
}

// Tests:
if (includes([4, 5, 6], 7) !== false) {
  throw 'failed'
}
if (includes([4, 7, 5, 6], 7) !== true) {
  throw 'failed'
}
if (includes([], 7) !== false) {
  throw 'failed'
}

/**
 * Returns an array with the numbers from a to b, not including b.
 *
 * Hint:
 * 1. loop over the range, using old-school loop (search in the tutorial for old-school loop)
 * 2. Print the values you got in the loop, to see that they're OK.
 * 3. For each value of the variable of the loop, push it to an array that is initially an empty array ([]).
 * 4. In the loop, print the accumulator array. It should grow...
 * 5. That array is what will be returned from the function/
 *
 * range(4, 7) ==> [4, 5, 6]
 * range(4, 5) ==> [4]
 * range(4, 4) ==> []
 * range(4, 3) ==> []
 */
function range (a, b) {
}

if (!isArrayEqual(range(4, 7), [4, 5, 6])) {
  throw 'failed'
}
if (!isArrayEqual(range(4, 5), [4])) {
  throw 'failed'
}
if (!isArrayEqual(range(4, 4), [])) {
  throw 'failed'
}
if (!isArrayEqual(range(4, 3), [])) {
  throw 'failed'
}

// Tests:

/**
 * Returns an array that does not contain the value.
 *
 * Hint: Start with an empty accumulator array.
 * Loop over the values of the `array` argument. If the current value is not
 * equal to the arugment `value`, then you can push it to the accumulator array.
 * (Do this step by step, with lots of console.logs to see what you are doing.)
 *
 * removeValue([4, 5, 6, 4, 3], 4) => [5, 6, 3]
 * removeValue([4, 4, 4], 4) => []
 */
function removeValue (array, value) {

}

// Tests:
// write the tests...


/**
 * receives an array whose elements are also arrays. Returns an array with the
 * same elements as in the sub-arrays.
 *
 * Hint: Start with an empty accumulator array. Go over the items of the `arrayOfArrays`. Each
 * item is an array. use accumulator.concat to concat the elements of the current item to the accumulator.
 * Remember that concat is non-mutating and returns a new array, so you should assign it back to accumulator.
 * (Do this step by step, with lots of console.logs to see what you are doing.)
 *
 * flatten([[1, 2], [4, 3]]) ==> [1, 2, 4, 3]
 * flatten([[1, 2], []]) ==> [1, 2]
 * flatten([[]]) ==> []
 */
function flatten (arrayOfArrays) {

}

// Tests:
if (!isArrayEqual(flatten([[1, 2], [4, 3]]), [1, 2, 4, 3])) {
  throw 'failed'
}
if (!isArrayEqual(flatten([[1, 2], []]), [1, 2])) {
  throw 'failed'
}
if (!isArrayEqual(flatten([[]]), [])) {
  throw 'failed'
}

// Tests:
// write the tests. Be careful, they look a little different...

/**
 * Returns a new array that is like `array`, but with `value` pushed into the location `index`.
 *
 * Hint: Use slice to create an array with all the values before `index`, and same for `values` from index.
 * Then use concat to concatenate these two arrays along with the value.
 * (Do this step by step, with lots of console.logs to see what you are doing.)
 *
 * insertValue([4, 5, 6], 0, 999) => [999, 4, 5, 6]
 * insertValue([4, 5, 6], 2, 999) => [4, 5, 999, 6]
 * insertValue([4, 5, 6], 3, 999) => [4, 5, 6, 999]
 */
function insertValue (array, index, value) {

}
// Tests:
// write the tests...

/**
 * Returns whether an array is sorted.
 *
 * isSorted([4, 5, 6]) => true
 * isSorted([4, 7, 3]) => false
 * isSorted([]) => true
 */
function isSorted (array) {

}

// Tests:
if (isSorted([4, 5, 6]) !== true) {
  throw 'failed'
}
if (isSorted([4, 7, 3]) !== false) {
  throw 'failed'
}
if (isSorted([]) !== true) {
  throw 'failed'
}

/**
 * Bonus:
 *
 * Returns an array containing only one value from the array
 *
 * unique([4, 5, 1]) ==> [4, 5, 1]
 * unique([4, 5, 5, 4, 1, 5]) ==> [4, 5, 1]
 * unique([]) ==> []
 */
function unique (array) {

}

// Tests:
// write the tests...

/**
 * Bonus:
 *
 * Returns true if the two arrays have the same members.
 *
 * sameMembers([1, 2, 3], [3, 1, 2]) ==> true
 * sameMembers([1, 2, 3, 4], [3, 1, 2]) ==> false
 * sameMembers([1, 2, 3, 4], [3, 1, 2]) ==> false
 * sameMembers([1, 2, 3, 3], [3, 1, 2, 3]) ==> true
 * sameMembers([1, 2, 3, 3], [3, 1, 2]) ==> false
 * sameMembers([], []) ==> true
 */
function sameMembers (array1, array2) {

}

// Tests:
// write the tests...

/**
 * Big Bonus!
 *
 * returns a sorted array that is the merge of two other sorted arrays.
 *
 * mergeSorted([1, 5, 7], [2, 3, 6, 7, 8]) ==> [1, 2, 3, 5, 6, 7, 7, 8]
 */
function mergeSorted (array1, array2) {

}

// Tests:
// write the tests...


// Utility function
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
