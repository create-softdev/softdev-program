
/**
 * Write the function min that will return the minimum of the two parameters:
 *
 * min(4, 5) => 4
 * min(6, 2) => 2
 * min(3, 3) => 3
 *
 * Test this function!
 */
function min (a, b) {

}

// Tests:
if (min(4, 5) !== 4) {
  throw 'failed'
}
if (min(6, 2) !== 2) {
  throw 'failed'
}
if (min(3, 3) !== 3) {
  throw 'failed'
}

/**
 * Write the function max that will return the maximum of the two parameters:
 *
 * min(4, 5) => 5
 * min(6, 2) => 6
 * min(3, 3) => 3
 *
 * Test this function!
 */
function max (a, b) {

}

// Tests:
// write the tests...

/**
 * Function that returns true if the number is even or divides by 5
 *
 * isEvenOrDividesBy5(6) => true
 * isEvenOrDividesBy5(10) => true
 * isEvenOrDividesBy5(15) => true
 * isEvenOrDividesBy5(7) => false
 * isEvenOrDividesBy5(9) => false
 *
 * Test this function!
 */
function isEvenOrDividesBy5 (num) {
}

// Tests...
if (isEvenOrDividesBy5(6) !== true) {
  throw 'failed'
}
if (isEvenOrDividesBy5(10) !== true) {
  throw 'failed'
}
if (isEvenOrDividesBy5(15) !== true) {
  throw 'failed'
}
if (isEvenOrDividesBy5(7) !== false) {
  throw 'failed'
}
if (isEvenOrDividesBy5(9) !== false) {
  throw 'failed'
}

/**
 * Write a function that will print a, b - sorted
 *
 * sort(4, 7) => prints 4 7
 * sort(7, 4) => prints 4 7
 *
 * Hint: Use min and max that you wrote above for that. First number is the minimum of the two numbers,
 * and the second number is the maximum of the two numbers.
 *
 * Test this function!
 */
function sort (a, b) {

}

// Tests...
// write the tests...

/**
 * Check whether two players can play the game of thrones. True only iff both are adults (>= 18)
 *
 * canPlayGameOfThrones(7, 19) => false
 * canPlayGameOfThrones(18, 19) => true
 * canPlayGameOfThrones(8, 8) => false
 *
 * Test this function!
 */
function canPlayGameOfThrones (age1, age2) {

}

// Tests:
if (canPlayGameOfThrones(7, 19) !== false) {
  throw 'failed'
}
if (canPlayGameOfThrones(18, 19) !== true) {
  throw 'failed'
}
if (canPlayGameOfThrones(8, 8) !== false) {
  throw 'failed'
}

/**
 * Check whether two players can play the cards against humanity game.
 * True only iff at least one is an adult (>= 18)
 *
 * canPlayCardsAgainstHumanity(7, 19) => true
 * canPlayCardsAgainstHumanity(19, 7) => true
 * canPlayCardsAgainstHumanity(7, 8) => false
 * canPlayCardsAgainstHumanity(20, 20) => true
 *
 * Test this function!
 */
function canPlayCardsAgainstHumanity (age1, age2) {

}

// Tests:
// write the tests...

/**
 * Check whether two players can play Barbie.
 * True only iff none of them are aduly(>= 18)
 *
 * canPlayBarbie(7, 19) => false
 * canPlayBarbie(18, 7) => false
 * canPlayBarbie(7, 8) => true
 * canPlayBarbie(20, 20) => false
 *
 * Test this function!
 */
function canPlayBarbie (age1, age2) {

}

if (canPlayBarbie(7, 19) !== false) {
  throw 'failed'
}
if (canPlayBarbie(18, 7) !== false) {
  throw 'failed'
}
if (canPlayBarbie(7, 8) !== true) {
  throw 'failed'
}
if (canPlayBarbie(20, 20) !== false) {
  throw 'failed'
}

/**
 * Check whether two players can play a game. The games can be Barbie, CardsAgainstHumanity, GameOfThrones,
 * or Monopoly. Monopoly, everyone can play. For the others, the rules are above. Please use the functions
 * above to implement this function.
 *
 * canPlay('Monopoly', 4, 6) => true
 * canPlay('Barbie', 10, 20) => false
 * ...
 *
 * Test this function!
 */
function canPlay (game, age1, age2) {

}

// Tests:
// write the tests...
