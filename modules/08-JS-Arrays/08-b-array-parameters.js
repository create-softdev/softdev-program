function resetArray (arr) {
  for (const i in arr) {
    arr[i] = 0
  }
}

const arr = [0, 1, 2]

resetArray(arr)

if (!isArrayEqual(arr, [0, 0, 0])) {
  throw 'failed!'
}

function isArrayEqual (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  for (const i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }

  return true
}

/**
 * isArrayEqual - our first complex function!
 * The "search" pattern - "if"" within "for"
 */
