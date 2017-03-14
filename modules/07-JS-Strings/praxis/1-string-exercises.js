/**
 * Write the functions below. Don't forget to write tests!
 */

/**
 * Checks whether a string contains only blanks
 *
 * Hint:
 *
 * 1. Iterate over all the characters (using for-of).
 * 2. Print them, just to check iteration is ok
 * 3. If there is a non-blank, print it again, just to check that your condition is ok
 * 4. If there is a non-blank, return false.
 * 5. At the end of the loop, you didn't find any non-blanks, so you can return true
 *
 *
 * isAllBlanks('   ') => true
 * isAllBlanks(' x ') => false
 * isAllBlanks('') => true
 */
function isAllBlanks (str) {
}

// Tests:
if (isAllBlanks('   ') !== true) {
  throw 'failed'
}
if (isAllBlanks(' x ') !== false) {
  throw 'failed'
}
if (isAllBlanks('') !== true) {
  throw 'failed'
}

/**
 * Capitalize the words in the sentence. You can use split and join to separate the words and bring
 * them back together, capitalized
 * (If you don't know how to uppercase, well, search for it!)
 *
 * Hint:
 * (Do this step by step, with lots of console.logs to see what you are doing.)
 *
 * capitalize('robin hood') ==> 'Robin Hood'
 * capitalize('') ==> ''
 * capitalize('robin    hood') ==> 'Robin Hood'
 */
function capitalize (str) {
}

// Tests:
// write the tests...

/**
 * Truncates to a specific width, with ellipsis characters if needed.
 *
 * Hint:
 * 1. If the string's length is <= maxLength, there is nothing to do, so you can just return the string
 * 2. Otherwise, the string's length is maximum maxLength, but we need to leave place for the ellipsis,
 *    so you need to take maxLength - elllipsis.length from the string, and append to it the ellipsis.
 * (Do this step by step, with lots of console.logs to see what you are doing.)
 *
 *
 * truncate('Robin Hood') ==> 'Robin Hood'
 * truncate('Robin Hood', 5) ==> 'Robin'
 * truncate('Robin Hood', 5, '!!') ==> 'Rob!!'
 * truncate('Robin', 5, '!!') ==> 'Robin'
 * truncate('Rob', 5, '!!') ==> 'Rob'
 *
 * How do you know if a parameter was passed? Its value is undefined!
 */
function truncate (str, maxLength, ellipsis) {
}
// Tests:
// write the tests...

/**
 * Removes characters from a string
 *
 * Hint:
 * 1. Iterate over the characters in the array
 * 2. Use an accumulator string, which starts empty, to accumulate those characters that you iterate over
 * 3. Now if you return the accumulator, you will get a copy of the string, which is close.
 * 4. Now, in the loop, don't append to the accumulator if the value is equal to `char`
 * (Do this step by step, with lots of console.logs to see what you are doing.)
 *
 * remove('Robin Hood', ' ') ==> 'RobinHood'
 * remove('Robin Hood', 'o') ==> 'Rbin Hd'
 * remove('Robin Hood', 'z') ==> 'Robin Hood'
 */
function remove (str, char) {

}
// Tests:
// write the tests...

/**
 * Bonus:
 * Converts a string to an integer
 *
 * toInt('45') ==> 45
 * toInt('-4') ==> -4
 * toInt('0') ==> 0
 */
function toInt (str) {

}
// Tests:
// write the tests...

/**
 * Bonus:
 * Converts an integer to a string
 *
 * toString(45) ==> '45'
 * toString(0) ==> '0'
 * toString(-45) ==> '-45'
 */
function toStr (num) {

}
// Tests:
// write the tests...
