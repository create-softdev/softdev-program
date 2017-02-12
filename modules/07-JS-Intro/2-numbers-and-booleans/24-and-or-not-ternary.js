console.log(true && false)
console.log(true && true)
console.log(true || false)
console.log(true || true)
console.log(!true)

function isBetween (n, a, b) {
  return n >= a && n <= b
}

function max (a, b) {
  return a > b ? a : b
}

console.log(isBetween(4, 7, 9))
console.log(isBetween(8, 7, 9))

console.log(max(5, 6))

/*
** &&: true only iff both are true
** ||: false only iff both are false
** ?:
*/
