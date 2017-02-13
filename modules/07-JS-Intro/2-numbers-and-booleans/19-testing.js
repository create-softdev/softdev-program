function max (a, b) {
  if (a > b) {
    return a
  } else {
    return a // This is a bug
  }
}

// Tests:
if (max(4, 5) !== 5) {
  throw 'failed!'
}
if (max(5, 4) !== 5) {
  throw 'failed!'
}

// Code:
console.log(max(7, 9))  // 9, after the bug is fixed

/**
 * Tests
 * throw
 */
/* eslint no-else-return: 0 */
