/**
 * Implement the functions below. Don't forget to test them, or to use the tests
 * that are given in the code!
 */

/**
 * Write a function that checks whether a number is even or not
 *
 * isEven(5) ==> false
 * isEven(896) ==> true
 */
function isEven (num) {

}

// Tests:
if (isEven(5) !== false) {
  throw 'failed'
}
if (isEven(896) !== true) {
  throw 'failed'
}

/**
 * Write a function that checks whether a number is odd or not. Use isEven.
 *
 * isOdd(5) ==> true
 * isOdd(896) ==> false
 */
function isOdd (num) {

}

// Tests:
// write the tests...

/**
 * Write a program that receives the three grades the student got.
 * If the average > 60, return true, otherwise return false.
 *
 * didStudentPass(60, 70, 80) ==> true
 * didStudentPass(40, 50, 60) ==> false
 */
function didStudentPass (gradeA, gradeB, gradeC) {

}

// Tests:
if (didStudentPass(60, 70, 80) !== true) {
  throw 'failed'
}
if (didStudentPass(40, 50, 60) !== false) {
  throw 'failed'
}

/**
 * returns true if n is inside the range rangeStart.. rangeEnd (including rangeStart and rangeEnd)
 *
 * insideOf(5, 4, 9) ==> true
 * insideOf(9, 4, 9) ==> true
 * insideOf(10, 4, 9) ==> false
 * insideOf(3, 4, 9) ==> false
 *
 */
function insideOf (n, rangeStart, rangeEnd) {

}

// Tests:
if (insideOf(5, 4, 9) !== true) {
  throw 'failed'
}
if (insideOf(9, 4, 9) !== true) {
  throw 'failed'
}
if (insideOf(10, 4, 9) !== false) {
  throw 'failed'
}
if (insideOf(3, 4, 9) !== false) {
  throw 'failed'
}

/**
 * returns true if n is outside the range rangeStart.. rangeEnd
 *
 * outsideOf(5, 4, 9) ==> false
 * outsideOf(9, 4, 9) ==> false
 * outsideOf(10, 4, 9) ==> true
 * outsideOf(3, 4, 9) ==> true
 *
 */
function outsideOf (n, rangeStart, rangeEnd) {

}

// Tests:
// write the tests...

/**
 * Write a function that translates the words "hello", "goodbye"
 * in two languages ("french", "spanish") to english.
 * If it receives a word it does not know, or a language it does not now, it returns "sorry".
 */
function translate (word, language) {

}

// Tests:
if (translate('bonjour', 'french') !== 'hello') {
  throw 'failed'
}
if (translate('au revoir', 'french') !== 'goodbye') {
  throw 'failed'
}
if (translate('Hola', 'french') !== 'hello') {
  throw 'failed'
}
if (translate('adios', 'french') !== 'goodbye') {
  throw 'failed'
}
if (translate('ooolloooo', 'french') !== 'sorry') {
  throw 'failed'
}
if (translate('boooloooo', 'spanish') !== 'sorry') {
  throw 'failed'
}
if (translate('boooloooo', 'burmesian') !== 'sorry') {
  throw 'failed'
}

/**
 * Write a function that returns "morning", "noon", "afternoon", "evening", or "night",
 * depending on hours and minutes.
 * morning - 6:00 - 11:29
 * noon - 11:30 - 13:00
 * afternoon - 13:01 - 17:00
 * evening - 17:01 - 20:30
 * night - 20:31 - 5:59
 */
function timeOfDay (hours, minutes) {

}

if (timeOfDay(6, 0) !== 'morning') {
  throw 'failed'
}
if (timeOfDay(10, 23) !== 'morning') {
  throw 'failed'
}
if (timeOfDay(11, 10) !== 'morning') {
  throw 'failed'
}
if (timeOfDay(11, 30) !== 'noon') {
  throw 'failed'
}
if (timeOfDay(12, 30) !== 'noon') {
  throw 'failed'
}
if (timeOfDay(13, 0) !== 'noon') {
  throw 'failed'
}
if (timeOfDay(13, 1) !== 'afternoon') {
  throw 'failed'
}
if (timeOfDay(16, 30) !== 'afternoon') {
  throw 'failed'
}
if (timeOfDay(17, 0) !== 'afternoon') {
  throw 'failed'
}
if (timeOfDay(17, 1) !== 'evening') {
  throw 'failed'
}
if (timeOfDay(19, 30) !== 'evening') {
  throw 'failed'
}
if (timeOfDay(20, 0) !== 'evening') {
  throw 'failed'
}
if (timeOfDay(20, 30) !== 'evening') {
  throw 'failed'
}
if (timeOfDay(20, 31) !== 'night') {
  throw 'failed'
}
if (timeOfDay(23, 59) !== 'night') {
  throw 'failed'
}
if (timeOfDay(0, 0) !== 'night') {
  throw 'failed'
}
if (timeOfDay(0, 30) !== 'night') {
  throw 'failed'
}
if (timeOfDay(5, 59) !== 'night') {
  throw 'failed'
}

/**
 * Bonus:
 *
 * Reverses a one or two digit number.
 * reverseTwoDigitNumber(3) ==> 30 (because 3 "===" 03)
 * reverseTwoDigitNumber(34) ==> 43
 * reverseTwoDigitNumber(0) => 0
 *
 * You can use Math.floor(). Math.floor(4) ==> 4, Math.floor(4.7) ==> 4, Math.floor(4.2) ==> 4
 *
 * How? Let's take 34. Extract the 4 using 34 % 10. Now extract the 3 using 34 / 10.
 * Now that you have the 3 and 4, rebuild the number using 4 * 10 + 3.
 *
 * If you do it this way, then 3 => 30, and 0 => 0
 * will just happen without needing any special programming.
 *
 */
function reverseTwoDigitNumber (n) {
}

// Tests:
// write the tests...

/**
 * Bonus:
 *
 * Reverses a one or two digit or three digit number. You can (and should) use
 * 'reverseTwoDigitNumber' in your implementation
 * reverseThreeDigitNumber(3) ==> 300 (because 3 "===" 003)
 * reverseThreeDigitNumber(34) ==> 430
 * reverseThreeDigitNumber(345) ==> 543
 * reverseThreeDigitNumber(0) => 0
 *
 */
function reverseThreeDigitNumber (n) {
}
