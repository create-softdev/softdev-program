function arrayMax (arr) {
  let maxTillNow = arr[0]

  for (const v of arr) {
    if (v > maxTillNow) {
      maxTillNow = v
    }
  }

  return maxTillNow
}

console.log(arrayMax([1, 2, 17]))

if (arrayMax([7, 1, 12]) !== 12) {
  throw 'failed'
}

if (arrayMax([12, 1, 4]) !== 12) {
  throw 'failed'
}

if (arrayMax([14]) !== 14) {
  throw 'failed'
}

/**
 * let vs const
 * our first algorithm!
 * what happens if we send it an empty array?
 */
