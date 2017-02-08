function fibonnaci(tillNumber) {
  let a = 0;
  let b = 1;

  const ret = [a, b];

  while (a + b < tillNumber) {
    const nextB = a + b;

    a = b;
    b = nextB;
    ret.push(b);
  }

  return ret;
}

console.log(fibonnaci(17));

/**
 * while
 */
