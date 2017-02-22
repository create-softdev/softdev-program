/**
 * Write 'ls', so that it will show as many files in a row as possible.
 *
 * Just like in the theoretical part, it will receive a file or directory as an argument
 * check whether the file is a dir or a file.
 * If it's a file, it shows the name and finishes executing.
 * Otherwise, it will list the items in the directory (using fs.readdir),
 * use the function findLengthOfLongestString (which is given to you below) to find
 * how much space each item should take, figure out how many items can be in a row
 * and print the items. To make the items all the same length, use padEnd and in the length,
 * give the length you received from findLengthOfLongestString (+ 1).
 * Use process.stdout.columns to determine the width of the terminal
 *
 * Example:
 *  ['a.txt', 'bb.txt', 'ccc.txt', 'z.txt']
 *  length of longest string - 7, so each item will be 8 characters long
 *   (one space for separating the items)
 *  width of terminal - 17
 *  So the number of items in each row will be 2 (that's the maximum that can fit)
 *  And the rows will be:
 *
 *  a.txt   b.txt
 *  ccc.txt z.txt
 */
const assert = require('assert')

/**
 * This function accepts an array of strings, and returns the length of the longest string
 *
 * findLengthOfLongestString([]) => 0
 * findLengthOfLongestString(['a', 'bb']) => 2
 * findLengthOfLongestString(['a', 'bb', 'ccc', 'ddd']) => 3
 *
 * Don't forget to write tests!
 */
function findLengthOfLongestString (strings) {
  return strings.reduce((prev, curr) => curr.length > prev ? curr.length : prev, 0)
}
assert.equal(findLengthOfLongestString([]), 0)
assert.equal(findLengthOfLongestString(['a', 'bb']), 2)
assert.equal(findLengthOfLongestString(['a', 'bb', 'ccc', 'ddd']), 3)

/**
 * Accepts a str and a length, and if the str's length is smaller than 'length', it pads
 * it with spaces until it fits the length
 *
 * padEnd('a', 3) ==> 'a  ' (that's two spaces)
 * padEnd('abc', 3) ==> 'abc'
 * padEnd('abcd', 3) ==> 'abcd'
 * padEnd('ab', 5) ==> 'ab   ' (that's three spaces)
 *
 * Don't forget to write tests!
 *
 */
function padEnd (str, length) {
  if (str.length >= length) {
    return str
  } else {
    return str + ' '.repeat(length - str.length)
  }
}

assert.equal(padEnd('a', 3), 'a  ')
assert.equal(padEnd('abc', 3), 'abc')
assert.equal(padEnd('abcd', 3), 'abcd')
assert.equal(padEnd('ab', 5), 'ab   ')
