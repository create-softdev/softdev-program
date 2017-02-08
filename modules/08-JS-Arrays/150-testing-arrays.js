function fillArray(arr, value) {
  for (const i in arr) {
    arr[i] = value;
  }
}

function isArrayEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (const i in array1) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

const a1 = [4, 5, 6];
const a2 = [];

fillArray(a1, 3);
fillArray(a2, 3);
if (!isArrayEqual(a1, [3, 3, 3])) {
  throw 'failed';
}

if (!isArrayEqual(a2, [])) {
  throw 'failed';
}

/**
 * To test fillArray, We need to check equality of two arrays.
 * Unfortunately, a1 === a2 does not do what we expect it to.
 * So we write isArrayEqual!
 */
