const formerPresident = {
  firstName: 'Barack',
  lastName: 'Obama',
  address: {
    hood: 'Kalorama',
    city: 'Washington',
    state: 'D.C.'
  }
}

console.log(formerPresident.address.state)

// or...

const presidentAddress = formerPresident.address

console.log(presidentAddress.hood)

/**
 * values
 */

