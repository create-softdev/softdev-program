function assert (booleanTest) {
  if (booleanTest) {
    console.log('true!')
  } else {
    console.log('false...')
  }
}

assert(7 == 7)      // true
assert('77' == 77)  // true
assert('77' === 77) // false
assert(7 != 8)      // true
assert('77' != 77)  // false
assert('77' !== 77) // true

/**
 * The difference between === and ==
 * Always use ==
 * Same for !== and !===
 */
/* eslint eqeqeq: 0, no-self-compare: 0 */
