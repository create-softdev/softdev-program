/**
 * Implement the functions below. Don't forget to test them!
 */

/**
 * Write a function that checks whether a number is even or not
 *
 * isEven(5) ==> false
 * isEven(896) ==> true
 */
function isEven (num) {

}

/**
 * Write a function that checks whether a number is odd or not. Use isEven.
 *
 * isOdd(5) ==> false
 * isOdd(896) ==> true
 */
function isOdd (num) {

}

/**
 * returns true if n is inside the range rangeStart.. rangeEnd
 * the inclusive parameter is a boolean that says whether the range includes rangeStart and rangeEnd
 *
 */
function insideOf (n, rangeStart, rangeEnd, inclusive) {

}

/**
 * returns true if n is outside the range rangeStart.. rangeEnd
 * the inclusive parameter is a boolean that says whether the range includes rangeStart and rangeEnd
 *
 */
function outsideOf (n, rangeStart, rangeEnd, inclusive) {

}

/**
 * Write a function that translates the words "hello", "goodbye", "spanish"
 * in three languages ("english", "french", "spanish") to english.
 * If it receives a word it does not know, or a language it does not now, it returns "sorry".
 */
function translate (word, language) {

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

/**
 * Write a program that receives the three grades the student got.
 * If the average > 60, return true, otherwise return false.
 *
 * didStudentPass(60, 70, 80) ==> true
 * didStudentPass(40, 50, 60) ==> false
 */
function didStudentPass (gradeA, gradeB, gradeC) {

}

/**
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
