function max(a, b) {
  if (a > b) {
    return a;
  }
  else {
    return b;
  }
}

console.log(max(4, 6));

/**
 * Same, but better. Why? Because we can test it!
 */
/* eslint no-else-return: 0 */
