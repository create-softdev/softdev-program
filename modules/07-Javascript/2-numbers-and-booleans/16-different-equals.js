function assert(booleanTest) {
  if (booleanTest) {
    console.log('true!');
  }
  else {
    console.log('false...');
  }
}

assert(7 == 7);
assert('77' == 77);
assert('77' === 77); // false
assert(7 != 8);
assert('78' != 77);
assert('77' !== 77); // true

/**
 * The dofference between === and ==
 * Always use ==
 * Same for !== and !===
 */
/* eslint eqeqeq: 0 */
