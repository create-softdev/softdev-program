function aPresident (fullName) {
  const names = fullName.split(' ')

  return {
    firstName: names[0],
    lastName: names[1]
  }
}

function makeCurrentPresident (president) {
  president.firstName = 'Mr.'
  president.lastName = 'President'
}

const currentPresident = aPresident('Donald Trump')

console.log(currentPresident)  // { firstName: 'Donald', lastName: 'Trump' }

makeCurrentPresident(currentPresident)

console.log(currentPresident)  // { firstName: 'Mr.', lastName: 'President' }

/**
 * Functions can return objects.
 *
 * And they can be passed objects to change them.
 */
