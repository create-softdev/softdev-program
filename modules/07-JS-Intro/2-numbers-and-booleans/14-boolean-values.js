function assert (booleanTest) {
  if (booleanTest) {
    console.log('All good!')
  } else {
    console.log('Uh oh...')
  }
}
assert(4 > 6)   // Uh oh...
assert(6 > 4)   // All good!

/**
 * the "true" value.
 * the "false" value.
 * Booleans are values, just like numbers. So they can be passed
 * as arguments.
 */
