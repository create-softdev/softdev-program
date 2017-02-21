function resetArray (arr) {
  for (const i in arr) {
    arr[i] = 0
  }
}

const arr1 = [0, 1, 2]

resetArray(arr1)

console.log(arr1)

if (arr1 !== [0, 0, 0]) {
  throw 'failed!'
}

/**
 * array parameters
 * equality doesn't work with arrays.
 * Can changing the array work with for-of? No!
*/
