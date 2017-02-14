function arrayMax (arr) {
  if (arr.length === 0) {
    return undefined
  }

  let maxTillNow = arr[0]

  for (const v of arr) {
    if (v > maxTillNow) {
      maxTillNow = v
    }
  }

  return maxTillNow
}

console.log(arrayMax([]))       // undefined

if (arrayMax([7, 1, 12]) !== 12) {
  throw 'failed'
}

if (arrayMax([12, 1, 4]) !== 12) {
  throw 'failed'
}

if (arrayMax([14]) !== 14) {
  throw 'failed'
}

if (arrayMax([]) !== undefined) {
  throw 'failed'
}

/**
 * the 'undefined' value
 */
