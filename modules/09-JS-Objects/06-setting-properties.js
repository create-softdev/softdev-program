const currentPresident = {
  firstName: 'Donald',
  lastName: 'Trump'
}

currentPresident.firstName = 'Mr.'
currentPresident.lastName = 'President'

console.log(fullNameOfPresident(currentPresident))   // Mr. President

function fullNameOfPresident (president) {
  return `${president.firstName} ${president.lastName}`
}


/**
 * const only relates to the reference!
 * You cannot change `currentPresident`, but you *can* change its properties.
 */
