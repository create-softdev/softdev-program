function greet (name) {
  const firstAndLastName = name.split(' ')

  return `The name is ${firstAndLastName[1]}. ${name}.`
}

console.log(greet('James Bond')) // The name is Bond. James Bond.

/**
 * string interpolation
 */
/* eslint no-console: 0 */
