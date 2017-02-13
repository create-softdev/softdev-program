function assert (booleanTest) {
  if (booleanTest) {
    console.log('true!')
  } else {
    console.log('false...')
  }
}

assert(7 !== 6)   // true
assert(8 === 8)   // true
assert(7 > 6)     // true
assert(6 < 7)     // true
assert(6 <= 7)    // true
assert(7 >= 7)    // true

/**
 * ===
 * !==
 * >, <, >=, <=
 */

/*eslint no-self-compare: 0 */
