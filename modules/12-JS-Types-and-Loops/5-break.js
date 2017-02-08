function fibonnaci(tillNumber) {
  let a = 0;
  let b = 1;

  const ret = [a, b];

  for (;;) {
    const nextB = a + b;

    a = b;
    b = nextB;

    if (b > tillNumber) {
      break;
    }
    ret.push(b);
  }

  return ret;
}

console.log(fibonnaci(17));

/**
 * while
 */
