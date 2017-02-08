function resetArray(arr) {
  for (const i in arr) {
    arr[i] = 0;
  }
}

const arr = [0, 1, 2];

resetArray(arr);

if (arr !== [0, 0, 0]) {
  throw 'failed!';
}

/**
 * array parameters
 * equality doesn't work with arrays.
*/
