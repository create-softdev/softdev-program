const formerPresident = {
  firstName: 'Barack',
  lastName: 'Obama',
  children: ['Sasha', 'Malia Ann'],
  muslim: false,
  birthYear: 1961,
  address: {
    hood: 'Kalorama',
    city: 'Washington',
    state: 'D.C.'
  }
}

console.log(formerPresident.muslim)

console.log(formerPresident.children[0])

// or...

const children = formerPresident.children

console.log(children[0])

/**
 * values can be whatever they want.
 * But properties can only be strings.
 */

