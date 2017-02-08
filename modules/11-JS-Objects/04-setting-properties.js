const currentPresident = {
  firstName: 'Donald',
  lastName: 'Trump'
}

currentPresident.firstName = 'Mr.'
currentPresident.lastName = 'President'

function fullNameOfPresident (president) {
  return `${president.firstName} ${president.lastName}`
}

console.log(fullNameOfPresident(currentPresident))

/**
 * const only relates to the reference!
 * You cannot change `currentPresident`, but you *can* change its properties.
 */
