function max (a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}

console.log(max(4, 6))    // 6

if (max(19, 8) !== 19) {
  console.log('hmm..., code doesn't work)
}

/**
 * Same, but better. Why? Because we can test it!
 * Using if outside of a function. Flow of code.
 */
/* eslint no-else-return: 0 */
