const formerPresident = {
  firstName: 'Barack',
  lastName: 'Obama'
}

const currentPresident = {
  firstName: 'Donald',
  lastName: 'Trump'
}

function fullNameOfPresident (president) {
  return `${president.firstName} ${president.lastName}`
}

console.log(fullNameOfPresident(formerPresident))
console.log(fullNameOfPresident(currentPresident))

console.log(fullNameOfPresident({firstName: 'George', lastName: 'Washington'}))

console.log(fullNameOfPresident({firstName: 'Eminem'}))

/**
 * Functions can accept objects.
 * Anonymous objects
 *
 * Accesing properties that are not there returns undefined.
 */
