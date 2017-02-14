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

console.log(fullNameOfPresident(formerPresident))     // Barach Obama
console.log(fullNameOfPresident(currentPresident))    // Donald Trump

console.log(fullNameOfPresident({firstName: 'George', lastName: 'Washington'})) // George Washington

console.log(fullNameOfPresident({firstName: 'Eminem'}))  // Eminem undefined

/**
 * Functions can accept objects.
 * Anonymous objects
 *
 * Accesing properties that are not there returns undefined.
 */
