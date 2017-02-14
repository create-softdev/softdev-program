const o1 = {
  a: 1,
  b: 2
}

const o2 = o1

o1.a = 'CHANGING AN OBJECT'

console.log(o2)       // { a: 'CHANGING AN OBJECT', b: 2 }

/**
 * An object variable is a _reference_ to the object, not the object itself
 * (like for number and boolean)
 */
