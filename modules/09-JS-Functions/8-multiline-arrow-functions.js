let i = 0

setInterval(() => {
  ++i
  console.log('hi', i)
}, 1000)

// before
// after
// hi 1
// hi 2
// ...

/**
 * When you have one statement or more, you need {} in arrow functions
 *
 * setInterval
 */
